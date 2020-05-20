import { parse } from '../../language/parser.js';
import { execute } from '../../execution/execute.js';
import { buildSchema } from '../buildASTSchema.js';
import { getIntrospectionQuery } from '../getIntrospectionQuery.js';
import { bigSchemaSDL } from '../../__fixtures__/index.js';
const schema = buildSchema(bigSchemaSDL, {
  assumeValid: true
});
const document = parse(getIntrospectionQuery());
export const name = 'Execute Introspection Query';
export const count = 10;
export function measure() {
  execute({
    schema,
    document
  });
}