import { expect } from 'chai.js';
import { describe, it } from 'mocha.js';
import instanceOf from '../instanceOf.js';
describe('instanceOf', () => {
  it('fails with descriptive error message', () => {
    function getFoo() {
      class Foo {}

      return Foo;
    }

    const Foo1 = getFoo();
    const Foo2 = getFoo();
    expect(() => instanceOf(new Foo1(), Foo2)).to.throw(/^Cannot use Foo "\[object Object\]" from another module or realm./m);
    expect(() => instanceOf(new Foo2(), Foo1)).to.throw(/^Cannot use Foo "\[object Object\]" from another module or realm./m);
  });
});