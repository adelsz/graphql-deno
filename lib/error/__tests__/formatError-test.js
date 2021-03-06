import { expect } from 'chai.js';
import { describe, it } from 'mocha.js';
import { formatError } from '../formatError.js';
import { GraphQLError } from '../GraphQLError.js';
describe('formatError: default error formatter', () => {
  it('uses default message', () => {
    // $DisableFlowOnNegativeTest
    const e = new GraphQLError();
    expect(formatError(e)).to.deep.equal({
      message: 'An unknown error occurred.',
      path: undefined,
      locations: undefined
    });
  });
  it('includes path', () => {
    const e = new GraphQLError('msg', null, null, null, ['path', 3, 'to', 'field']);
    expect(formatError(e)).to.deep.equal({
      message: 'msg',
      locations: undefined,
      path: ['path', 3, 'to', 'field']
    });
  });
  it('includes extension fields', () => {
    const e = new GraphQLError('msg', null, null, null, null, null, {
      foo: 'bar'
    });
    expect(formatError(e)).to.deep.equal({
      message: 'msg',
      locations: undefined,
      path: undefined,
      extensions: {
        foo: 'bar'
      }
    });
  });
  it('rejects null and undefined errors', () => {
    // $DisableFlowOnNegativeTest
    expect(() => formatError(undefined)).to.throw('Received null or undefined error.'); // $DisableFlowOnNegativeTest

    expect(() => formatError(null)).to.throw('Received null or undefined error.');
  });
});