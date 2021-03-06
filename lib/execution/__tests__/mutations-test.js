import { expect } from 'chai.js';
import { describe, it } from 'mocha.js';
import { parse } from '../../language/parser.js';
import { GraphQLInt } from '../../type/scalars.js';
import { GraphQLSchema } from '../../type/schema.js';
import { GraphQLObjectType } from '../../type/definition.js';
import { execute } from '../execute.js';

class NumberHolder {
  constructor(originalNumber) {
    this.theNumber = originalNumber;
  }

}

class Root {
  constructor(originalNumber) {
    this.numberHolder = new NumberHolder(originalNumber);
  }

  immediatelyChangeTheNumber(newNumber) {
    this.numberHolder.theNumber = newNumber;
    return this.numberHolder;
  }

  promiseToChangeTheNumber(newNumber) {
    return new Promise(resolve => {
      process.nextTick(() => {
        resolve(this.immediatelyChangeTheNumber(newNumber));
      });
    });
  }

  failToChangeTheNumber() {
    throw new Error('Cannot change the number');
  }

  promiseAndFailToChangeTheNumber() {
    return new Promise((_resolve, reject) => {
      process.nextTick(() => {
        reject(new Error('Cannot change the number'));
      });
    });
  }

}

const numberHolderType = new GraphQLObjectType({
  fields: {
    theNumber: {
      type: GraphQLInt
    }
  },
  name: 'NumberHolder'
});
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    fields: {
      numberHolder: {
        type: numberHolderType
      }
    },
    name: 'Query'
  }),
  mutation: new GraphQLObjectType({
    fields: {
      immediatelyChangeTheNumber: {
        type: numberHolderType,
        args: {
          newNumber: {
            type: GraphQLInt
          }
        },

        resolve(obj, {
          newNumber
        }) {
          return obj.immediatelyChangeTheNumber(newNumber);
        }

      },
      promiseToChangeTheNumber: {
        type: numberHolderType,
        args: {
          newNumber: {
            type: GraphQLInt
          }
        },

        resolve(obj, {
          newNumber
        }) {
          return obj.promiseToChangeTheNumber(newNumber);
        }

      },
      failToChangeTheNumber: {
        type: numberHolderType,
        args: {
          newNumber: {
            type: GraphQLInt
          }
        },

        resolve(obj, {
          newNumber
        }) {
          return obj.failToChangeTheNumber(newNumber);
        }

      },
      promiseAndFailToChangeTheNumber: {
        type: numberHolderType,
        args: {
          newNumber: {
            type: GraphQLInt
          }
        },

        resolve(obj, {
          newNumber
        }) {
          return obj.promiseAndFailToChangeTheNumber(newNumber);
        }

      }
    },
    name: 'Mutation'
  })
});
describe('Execute: Handles mutation execution ordering', () => {
  it('evaluates mutations serially', async () => {
    const document = parse(`
      mutation M {
        first: immediatelyChangeTheNumber(newNumber: 1) {
          theNumber
        },
        second: promiseToChangeTheNumber(newNumber: 2) {
          theNumber
        },
        third: immediatelyChangeTheNumber(newNumber: 3) {
          theNumber
        }
        fourth: promiseToChangeTheNumber(newNumber: 4) {
          theNumber
        },
        fifth: immediatelyChangeTheNumber(newNumber: 5) {
          theNumber
        }
      }
    `);
    const rootValue = new Root(6);
    const mutationResult = await execute({
      schema,
      document,
      rootValue
    });
    expect(mutationResult).to.deep.equal({
      data: {
        first: {
          theNumber: 1
        },
        second: {
          theNumber: 2
        },
        third: {
          theNumber: 3
        },
        fourth: {
          theNumber: 4
        },
        fifth: {
          theNumber: 5
        }
      }
    });
  });
  it('does not include illegal mutation fields in output', () => {
    const document = parse('mutation { thisIsIllegalDoNotIncludeMe }');
    const result = execute({
      schema,
      document
    });
    expect(result).to.deep.equal({
      data: {}
    });
  });
  it('evaluates mutations correctly in the presence of a failed mutation', async () => {
    const document = parse(`
      mutation M {
        first: immediatelyChangeTheNumber(newNumber: 1) {
          theNumber
        },
        second: promiseToChangeTheNumber(newNumber: 2) {
          theNumber
        },
        third: failToChangeTheNumber(newNumber: 3) {
          theNumber
        }
        fourth: promiseToChangeTheNumber(newNumber: 4) {
          theNumber
        },
        fifth: immediatelyChangeTheNumber(newNumber: 5) {
          theNumber
        }
        sixth: promiseAndFailToChangeTheNumber(newNumber: 6) {
          theNumber
        }
      }
    `);
    const rootValue = new Root(6);
    const result = await execute({
      schema,
      document,
      rootValue
    });
    expect(result).to.deep.equal({
      data: {
        first: {
          theNumber: 1
        },
        second: {
          theNumber: 2
        },
        third: null,
        fourth: {
          theNumber: 4
        },
        fifth: {
          theNumber: 5
        },
        sixth: null
      },
      errors: [{
        message: 'Cannot change the number',
        locations: [{
          line: 9,
          column: 9
        }],
        path: ['third']
      }, {
        message: 'Cannot change the number',
        locations: [{
          line: 18,
          column: 9
        }],
        path: ['sixth']
      }]
    });
  });
});