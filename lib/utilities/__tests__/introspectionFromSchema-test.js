import { expect } from 'chai.js';
import { describe, it } from 'mocha.js';
import dedent from '../../jsutils/dedent.js';
import { GraphQLSchema } from '../../type/schema.js';
import { GraphQLString } from '../../type/scalars.js';
import { GraphQLObjectType } from '../../type/definition.js';
import { printSchema } from '../printSchema.js';
import { buildClientSchema } from '../buildClientSchema.js';
import { introspectionFromSchema } from '../introspectionFromSchema.js';

function introspectionToSDL(introspection) {
  return printSchema(buildClientSchema(introspection));
}

describe('introspectionFromSchema', () => {
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Simple',
      description: 'This is a simple type',
      fields: {
        string: {
          type: GraphQLString,
          description: 'This is a string field'
        }
      }
    })
  });
  it('converts a simple schema', () => {
    const introspection = introspectionFromSchema(schema);
    expect(introspectionToSDL(introspection)).to.deep.equal(dedent`
      schema {
        query: Simple
      }

      """This is a simple type"""
      type Simple {
        """This is a string field"""
        string: String
      }
    `);
  });
  it('converts a simple schema without descriptions', () => {
    const introspection = introspectionFromSchema(schema, {
      descriptions: false
    });
    expect(introspectionToSDL(introspection)).to.deep.equal(dedent`
      schema {
        query: Simple
      }

      type Simple {
        string: String
      }
    `);
  });
});