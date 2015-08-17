//	Used for outputting information.
//
//	These can be extended with a by-line
//		to clarify why this log happened.
//
//	By calling infoLog.getMessages()
//		you can retrieve a full log
//		of info logged so far.

'use strict';

var infoLog = (function () {
	var messages = {};

	var returnFunction = function returnFunction(_message, byLine) {
		var message = typeof _message === 'string' ? _message : _message[0].replace(/\$\d+/g, '');
		messages[message] = messages[message] || [];

		if (!!byLine) {
			console.info(buildMessage(_message) + ' by ' + byLine + '.');

			if (typeof _message === 'string') {
				messages[message].push({
					message: buildMessage(_message),
					by: byLine,
					at: +new Date()
				});
			} else {
				messages[message].push({
					message: buildMessage(_message),
					by: byLine,
					at: +new Date(),
					info: _message.length > 2 ? _message.slice(1) : _message[1]
				});
			}
		} else {
			console.info(buildMessage(_message) + '.');
			messages[message].push({
				by: 'ANONYMOUS',
				at: +new Date()
			});
		}
	};

	returnFunction.getMessages = function () {
		return messages;
	};

	return returnFunction;

	function buildMessage(message) {
		var builtMessage;

		if (typeof message === 'string') {
			return message;
		} else {
			builtMessage = message[0];
			for (var i = 1; i < message.length; ++i) {
				builtMessage = builtMessage.replace('$' + i, '"' + message[i] + '"');
			}
			return builtMessage;
		}
	}
})();
//# sourceMappingURL=infoLog.js.map
