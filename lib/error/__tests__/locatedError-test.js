import { expect } from 'chai.js';
import { describe, it } from 'mocha.js';
import { GraphQLError } from '../GraphQLError.js';
import { locatedError } from '../locatedError.js';
describe('locatedError', () => {
  it('passes GraphQLError through', () => {
    const e = new GraphQLError('msg', null, null, null, ['path', 3, 'to', 'field']);
    expect(locatedError(e, [], [])).to.deep.equal(e);
  });
  it('passes GraphQLError-ish through', () => {
    const e = new Error('I have a different prototype chain');
    e.locations = [];
    e.path = [];
    e.nodes = [];
    e.source = null;
    e.positions = [];
    e.name = 'GraphQLError';
    expect(locatedError(e, [], [])).to.deep.equal(e);
  });
  it('does not pass through elasticsearch-like errors', () => {
    const e = new Error('I am from elasticsearch');
    e.path = '/something/feed/_search';
    expect(locatedError(e, [], [])).to.not.deep.equal(e);
  });
});