'use strict'

const buildRegExp = (bodyExp, options) => {
	let beginning = '\\b(?:'
	let end = ')\\b'
	if (options && options.exact) {
		beginning = '^('
		end = ')$'
	}

	const regExp = beginning + bodyExp + end
	if (options && options.exact) {
		return new RegExp(regExp)
	}

	return new RegExp(regExp, 'g')
}

const hashLengthRegex = (bitLength, options) => {
	const RegExp = `(?:[a-f0-9]{${bitLength / 4}})`
	return buildRegExp(RegExp, options)
}

module.exports = hashLengthRegex
