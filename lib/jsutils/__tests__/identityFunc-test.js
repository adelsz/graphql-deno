import { expect } from 'chai.js';
import { describe, it } from 'mocha.js';
import identityFunc from '../identityFunc.js';
describe('identityFunc', () => {
  it('returns the first argument it receives', () => {
    expect(identityFunc()).to.equal(undefined);
    expect(identityFunc(undefined)).to.equal(undefined);
    expect(identityFunc(null)).to.equal(null);
    const obj = {};
    expect(identityFunc(obj)).to.equal(obj);
  });
});