var proxy = "http://skyrideraj.appspot.com/";
var newUrl = proxy + document.URL.substring( document.URL.indexOf(':') + 3);
console.log(newUrl);

function redirect(loc) {
	window.location = loc;
}

redirect(newUrl);