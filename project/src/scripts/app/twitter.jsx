var sha = require( '../app/sha.jsx' );



var shaBuilder = new sha( 'SHA-1', 'TEXT' );

alert( shaBuilder.getHash( 'B64', '¡Brook!' + 'USERNAME' + '¡Jordan!' ) );