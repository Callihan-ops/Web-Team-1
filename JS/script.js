//----------------theme--------------------
function myFunction2() {
   var element = document.body;
   element.classList.toggle("light-mode");
}
//making topnav white or a different theme (currently in prosses)
//function myFunction3() {
 //  var element1 = document.ul;
  // element1.classList.toggle("light-mode-topnav");
//}


//function myFunction4() {
  // var element2 = document.body("ul");
  // element2.classList.toggle("light-mode2");
//}
function myFunction4() {
  var element2 = document.getElementById("topnav");

  if (element2.classList) { 
    element2.classList.toggle("light-mode2");
  } else {
    var classes = element2.className.split(" ");
    var i = classes.indexOf("light-mode2");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("light-mode2");
      element2.className = classes.join(" "); 
  }
}
//---------------------end-theme-----------------------
//--------audio---------
/*
var aud = document.getElementById("myAudio");aud.onseeking = function() {};
var aud1 = document.getElementById("myAudio1");aud1.onseeking = function() {};
var aud2 = document.getElementById("myAudio2");aud2.onseeking = function() {};
var aud3 = document.getElementById("myAudio3");aud3.onseeking = function() {};
var aud4 = document.getElementById("myAudio4");aud4.onseeking = function() {};
var aud5 = document.getElementById("myAudio5");aud5.onseeking = function() {};
var aud6 = document.getElementById("myAudio6");aud6.onseeking = function() {};
var aud7 = document.getElementById("myAudio7");aud7.onseeking = function() {};
var aud8 = document.getElementById("myAudio8");aud8.onseeking = function() {};
var aud9 = document.getElementById("myAudio9");aud9.onseeking = function() {};
var aud10 = document.getElementById("myAudio10");aud10.onseeking = function() {};
var aud11 = document.getElementById("myAudio11");aud11.onseeking = function() {};
var aud12 = document.getElementById("myAudio12");aud12.onseeking = function() {};
var vid = document.getElementById("vid1");vid.onseeking = function() {};

*/






