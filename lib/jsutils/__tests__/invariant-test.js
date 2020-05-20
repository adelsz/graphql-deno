import { expect } from 'chai.js';
import { describe, it } from 'mocha.js';
import invariant from '../invariant.js';
describe('invariant', () => {
  it('throws on false conditions', () => {
    expect(() => invariant(false, 'Oops!')).to.throw('Oops!');
  });
  it('use default error message', () => {
    expect(() => invariant(false)).to.throw('Unexpected invariant triggered.');
  });
});