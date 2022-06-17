/**
 - assert (assert module from Node.js)
 - chai - имеет несколько интерфейсов ассертов (expect, should, assert)
 - should.js
 - expect.js
 - assertThat.js
 */

import * as assert from 'assert'
import chai from 'chai'


let foo = 'bar';

// assert lib
assert.strictEqual(foo, 'bar');

//chai lib
chai.should();
foo.should.be.a('string');
foo.should.equal('bar');

const expect = chai.expect;
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');

const asserts = chai.assert;
asserts.typeOf(foo, 'string');
asserts.equal(foo, 'bar');

// should lib
foo.should.be.equal('bar');

// expect lib
expect(foo).to.be('bar');

// assertthat lib
assert.that(foo).is.EqualTo('bar');

