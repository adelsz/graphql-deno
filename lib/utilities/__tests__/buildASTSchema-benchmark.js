import { parse } from '../../language/parser.js';
import { buildASTSchema } from '../buildASTSchema.js';
import { bigSchemaSDL } from '../../__fixtures__/index.js';
const schemaAST = parse(bigSchemaSDL);
export const name = 'Build Schema from AST';
export const count = 10;
export function measure() {
  buildASTSchema(schemaAST, {
    assumeValid: true
  });
}