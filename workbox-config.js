module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{json,ts,svg}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};