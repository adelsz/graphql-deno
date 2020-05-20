import { parse } from '../../language/parser.js';
import { buildSchema } from '../../utilities/buildASTSchema.js';
import { getIntrospectionQuery } from '../../utilities/getIntrospectionQuery.js';
import { validate } from '../validate.js';
import { bigSchemaSDL } from '../../__fixtures__/index.js';
const schema = buildSchema(bigSchemaSDL, {
  assumeValid: true
});
const queryAST = parse(getIntrospectionQuery());
export const name = 'Validate Introspection Query';
export const count = 50;
export function measure() {
  validate(schema, queryAST);
}