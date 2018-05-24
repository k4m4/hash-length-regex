'use strict';

function buildRegExp(bodyExp, opts) {
	let beginning = `\\b(?:`, end = `)\\b`
	if (opts && opts.exact) {
		beginning = `^(`
		end = `)$`
	}
	const regExp = beginning + bodyExp + end
	if (opts && opts.exact) {
		return new RegExp(regExp)
	}
	return new RegExp(regExp, 'g')
}

const hashLengthRegex = (bitLength, opts) => {
  let RegExp = `(?:[a-f0-9]{` + bitLength/4 + `})`
	return buildRegExp(RegExp, opts)
}
module.exports = hashLengthRegex;