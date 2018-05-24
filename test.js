import test from 'ava';
import m from './';

const hashes = [
	'1abcb33beeb811dca15f0ac3e47b88d9',
	'17413f944145f37dcaa9bc55d9a201a248a08aae',
	'c3ab8ff13720e8ad9047dd39466b3c8974e592c2fa383d4a3960714caef0c4f2'
];

test('success', async t => {
	for (const x of hashes) {
		t.true((await m(x.length*4).test(x)));
	}
});

test('fail', async t => {
	for (const x of hashes) {
		t.false((await m(x.length*4).test('foobar' + x)));
	}
});