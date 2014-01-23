var proxy = "http://skyrideraj.appspot.com/";
var newUrl = proxy + document.URL.substring(7);
console.log(newUrl);

function redirect(loc) {
	window.location = loc;
}

redirect(newUrl);