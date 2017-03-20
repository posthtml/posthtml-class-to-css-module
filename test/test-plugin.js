import test from 'ava';
import posthtml from 'posthtml';
import isPromise from 'is-promise';
import clone from '../src/index.js';

function processing(html) {
	return posthtml()
		.use(clone())
		.process(html);
}

test('plugin must be function', t => {
	t.true(typeof clone === 'function');
});

test('should return reject', async t => {
	t.throws(clone()());
});

test('should return promise', t => {
	t.true(isPromise(processing('')));
});

test('should clone to attribute css module', async t => {
	const fixture = '<html><head></head><body class="my-class-to-body"></body></html>';
	const expected = '<html><head></head><body class="my-class-to-body" css-module="my-class-to-body"></body></html>';
	t.deepEqual(expected, (await processing(fixture)).html);
});
