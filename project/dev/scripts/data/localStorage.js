'use strict';

if (!!data_hashString.clearLocalStorage) {
	destroyAllData('URL request');
}

//	FUNCTIONS	//
function storeData(dataName, data, storedBy) {
	if (!!localStorage) {
		infoLog(['Data $1 stored', dataName], storedBy);

		localStorage.setItem(dataName, JSON.stringify(data));
	}
}

function retrieveData(dataName, fallback) {
	if (!!localStorage) {
		return JSON.parse(localStorage.getItem(dataName));
	}

	return fallback;
}

function removeData(dataName, removedBy) {
	if (!!localStorage) {
		infoLog(['Data $1 removed', dataName], removedBy);

		localStorage.removeItem(dataName);
	}
}

function destroyAllData(destroyedBy) {
	if (!!localStorage) {
		infoLog('All data destroyed', destroyedBy);

		localStorage.clear();
	}
}
//# sourceMappingURL=localStorage.js.map
