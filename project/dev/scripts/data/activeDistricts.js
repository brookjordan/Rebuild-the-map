"use strict";

var data_activeDistricts = [];

(function () {
	"use strict";

	var rawdata_activeDistricts = !!data_hashString.activeDistricts ? data_hashString.activeDistricts.split(',') : [];

	for (var i = 0; i < rawdata_activeDistricts.length; ++i) {
		if (+rawdata_activeDistricts[i] && data_activeDistricts.indexOf(+rawdata_activeDistricts[i]) === -1) {
			data_activeDistricts.push(+rawdata_activeDistricts[i]);
		}
	}
})();
//# sourceMappingURL=activeDistricts.js.map
