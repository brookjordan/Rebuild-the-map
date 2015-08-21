var safeChars = [
		//	DIGITS	//
	'0', '1', '2', '3', '4', '5',
	'6', '7', '8', '9',

		//	UPPERCASE LETTERS	//
	'A', 'B', 'C', 'D', 'E', 'F',
	'G', 'H', 'I', 'J', 'K', 'L',
	'M', 'N', 'O', 'P', 'Q', 'R',
	'S', 'T', 'U', 'V', 'W', 'X',
	'Y', 'Z',

		//	LOWERCASE LETTERS	//
	'a', 'b', 'c', 'd', 'e', 'f',
	'g', 'h', 'i', 'j', 'k', 'l',
	'm', 'n', 'o', 'p', 'q', 'r',
	's', 't', 'u', 'v', 'w', 'x',
	'y', 'z',

		//	RESERVED CHARACTERS	//
	'-', '.', '_', '~',
];

module.exports = fullURLEncode;



//	FUNCTIONS	//
function fullURLEncode ( stringToEncode ) {
	var encodedString = '';
	var i;

	for ( i = 0; i < stringToEncode.length; ++i ) {
		encodedString += safeChars.indexOf( stringToEncode[i] ) > -1 ?
			stringToEncode[i] :
			'%' + stringToEncode[i].charCodeAt(0).toString( 16 ).toUpperCase();
	}

	return encodedString;
}