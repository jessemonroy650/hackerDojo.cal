// directly from: http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp
// Date: 2013-08-29
var jsonhttp;

function ajaxLite_init(altfunc, tag) {
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    jsonhttp = new XMLHttpRequest();
  } else {// code for IE6, IE5
    jsonhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (tag != null) {
    jsonhttp.onreadystatechange = function() {
      if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
        document.getElementById(tag).innerHTML = jsonhttp.responseText;
      }
    }
  } else { 
    if (typeof altfunc == 'function') {
      jsonhttp.onreadystatechange = function() {
        if (jsonhttp.readyState == 4 && jsonhttp.status == 200) {
          altfunc(jsonhttp.responseText);
        }
      }
    }
  }

}

// async is a boolean flag (true or false), if true, needs a callback fuction.
function ajaxLite_GET(URL, async) {
  jsonhttp.open('GET', URL, async);
  jsonhttp.send();
}


// http://www.mkyong.com/jquery/jquery-access-to-restricted-uri-denied-solution/
// DATE: 2013-08-29
// Problem #1: load html local file, cannot access remote file.
// [01:53:51.820] NS_ERROR_DOM_BAD_URI: Access to restricted URI denied @ file:///home/jessem/projects/javascript/ajaxLite.js:21
// Problem: canNOT crossload content from other domains;
//	content must load from same domain as page
// Work Around: Sideload from webserver, or used signed script
// <?php echo file_get_contents($_GET['url']);?>
// or
// http://www-archive.mozilla.org/projects/security/components/signed-scripts.html

// Problem #2: load html as web file (remote) and JSON on same domain, fixed.
// NS_ERROR_ILLEGAL_VALUE: Illegal value 
// Solution: dummy me got the parameters wrong

// HOW TO DO a POST method:
// jsonhttp.open("POST","ajax_test.asp",true);
// jsonhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// jsonhttp.send("fname=Henry&lname=Ford");
