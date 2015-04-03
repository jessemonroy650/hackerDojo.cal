// Date: 2013-08-29 - directly from: http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp
// Rewrite: 2015-03-29 - Decide to make this for mobile only. Ignore IE 5 & 6.
var AJAX = {
	jsonhttp: null,

	init : function (callback) {
		// It's not clear if this will work:
		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#XMLHttpRequest%28%29
		// https://bugzilla.mozilla.org/show_bug.cgi?id=692677#c68
		jsonhttp = new XMLHttpRequest();
		if (typeof callback == 'function') {
			jsonhttp.onreadystatechange = function() {
				if (jsonhttp.readyState === 4 && jsonhttp.status === 200) {
					callback(jsonhttp.responseText);
				}
			}
		} else if (typeof callback == 'string') {
			jsonhttp.onreadystatechange = function() {
				if (jsonhttp.readyState === 4 && jsonhttp.status === 200) {
					document.getElementById(callback).innerHTML = jsonhttp.responseText;
				}
			}
		} else {
			alert('AJAX.init, No tag or callback');
		}
	},

	// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	// On ''async''
	// An optional boolean parameter, defaulting to true, indicating whether or
	// not to perform the operation asynchronously.
	// If this value is false, the send()method does not return until
	// the response is received.  If true, notification of a completed transaction
	// is provided using event listeners. This must be true if the multipart
	// attribute is true, or an exception will be thrown. 
	GET : function (URL) {
		async = true; // This is explicit for clarity.
		jsonhttp.open('GET', URL, async);
		jsonhttp.send();
		// After this the callback handles the returning data.
	}
}
