import { parse } from '../parser.js';
import { kitchenSinkQuery } from '../../__fixtures__/index.js';
export const name = 'Parse kitchen sink';
export const count = 1000;
export function measure() {
  parse(kitchenSinkQuery);
}