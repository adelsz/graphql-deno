import { parse } from '../../language/parser.js';
import { buildSchema } from '../../utilities/buildASTSchema.js';
import { validate } from '../validate.js';
import { bigSchemaSDL } from '../../__fixtures__/index.js';
const schema = buildSchema(bigSchemaSDL, {
  assumeValid: true
});
const queryAST = parse(`
  {
    unknownField
    ... on unknownType {
      anotherUnknownField
      ...unknownFragment
    }
  }

  fragment TestFragment on anotherUnknownType {
    yetAnotherUnknownField
  }
`);
export const name = 'Validate Invalid Query';
export const count = 50;
export function measure() {
  validate(schema, queryAST);
}