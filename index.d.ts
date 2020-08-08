declare namespace hashLengthRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any hashes in a string. Useful with `RegExp#test()` to check if a string is a hash.
		@default false
		*/
		readonly exact?: boolean;
	}
}

/**
Returns a regular expression for matching hashes of the specified bit-length.    @example
```
import hashLengthRegex = require('hash-length-regex')
hashLengthRegex(128).test('nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9');
//=> true
```
*/
declare function hashLengthRegex(bitLength: number, options?: hashLengthRegex.Options): RegExp

export = hashLengthRegex
