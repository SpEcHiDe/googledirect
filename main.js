var CORS_URL = "https://projects.shrimadhavuk.me/tracker/cors.php";

var G_SEARCH_URL = "https://www.google.com/search?q=";
var G_OPT_PARAMS = "-inurl:(htm|html|php|pls|txt) intitle:index.of \"last modified\" ";

var FetchData = function(type, URL, formData, callBack){
  // create a XHR object
  var xhr = new XMLHttpRequest();
  // open the XHR object in asynchronous mode
  xhr.open(type, URL, true);
  //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=ISO-8859-1')
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // OK! we have a successful response.
      var response = xhr.responseText;
      //console.log('OUTPUT: ' + response);
      // do something else with the response
      callBack(response);
    }
  };
  // GET or POST the URL according to type
  if(type == "GET"){
    xhr.send();
  }
  if(type == "POST"){
    xhr.send(formData);
  }
};

var doSearch = function(query, search_type){
	var theurl = encodeURIComponent(G_SEARCH_URL + encodeURIComponent(query) + " " + G_OPT_PARAMS + "(" + search_type + ")");
	// FetchData("POST", CORS_URL + "?q=" + theurl, "", function(response){
	// 	console.log(response);
	// });
  window.open(decodeURIComponent(theurl));
};

// DO NOT EDIT BELOW THIS LINE
function toggleAbout(e){
	if (e.preventDefault){
    e.preventDefault();
  }
	abouttext.style.visibility = abouttext.style.visibility == "hidden" ? "visible" : "hidden";
	return false;
}

var abouttext=document.getElementById("abouttext");
abouttext.style.visibility="hidden";
var aboutbutton = document.getElementById('aboutbutton');

if (aboutbutton.attachEvent) {
    aboutbutton.attachEvent("click", toggleAbout);
} else {
    aboutbutton.addEventListener("click", toggleAbout);
}
// DO NOT EDIT ABOVE THIS LINE
