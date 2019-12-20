# hash-length-regex [![Build Status](https://travis-ci.org/k4m4/hash-length-regex.svg?branch=master)](https://travis-ci.org/k4m4/hash-length-regex)

> Retrieve the regular expression of a hash of specified bit-length.


## Install

```
~ ❯❯❯ npm install hash-length-regex
```


## Usage

```js
const hashLengthRegex = require('hash-length-regex');

hashLengthRegex(128).test('nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9');
//=> true

hashLengthRegex(128, {exact: true}).test('nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9 foo');
//=> false

hashLengthRegex(256, {exact: true}).test('4696a780a2051b5a0f422970904da794adc1b499b2f4583e778e100a0bdd79cc');
//=> true

'nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9 rainbow 897b47d80a717715378832539b4c1340'.match(hashLengthRegex(128));
//=> ['1abcb33beeb811dca15f0ac3e47b88d9', '897b47d80a717715378832539b4c1340']
```


## API

### hashLengthRegex (bitLength, [options])

Returns a regular expression for matching hashes of the specified bit-length.

#### bitLength

Type: `number`

Number of bits of desired hash.

#### options

##### options.exact

Type: `boolean`
Default: `false` *(Matches any hash in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is a hash of given bit-length.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)