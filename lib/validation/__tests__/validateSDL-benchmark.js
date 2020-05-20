import { parse } from '../../language/parser.js';
import { validateSDL } from '../validate.js';
import { bigSchemaSDL } from '../../__fixtures__/index.js';
const sdlAST = parse(bigSchemaSDL);
export const name = 'Validate SDL Document';
export const count = 10;
export function measure() {
  validateSDL(sdlAST);
}