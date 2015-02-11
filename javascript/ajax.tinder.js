/**
 * TinderAjax
 * Given an URL, it makes an ajax request and passes the json data
 * to a callback url as an object.
 *
 * Usage:
 *   TinderAjax.getJSON("http://example.com/api/data.json", function(data) {
 *     console.log(data);
 *   });
 */

var Tinder = window.Tinder || {};

Tinder.geoTrack = function() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess);
    }
    console.log("sgf");
}



function onSuccess(position) {
  console.log("sgf");
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log(lat);
  document.getElementById("lon").innerHTML = lon;
  document.getElementById("lat").innerHTML = lat; 
  document.getElementById("image").src = "http://maps.google.com/maps?q="+5+"+"+5;
}








// var TinderAjax = (function() {
//   // private properties
//   var _xmlhttp,
//       callback;

//   // private methods
//   function _onLoad() {
//     if (xmlhttp.status == 200) {
//       // the response is correct
//       var data = JSON.parse(xmlhttp.response);
//       callback(data);
//     } else {
//       throw new Error("There was an error " + xmlhttp.status);
//     }
//   }

//   function _getJSON(url, callbackFunction) {
//     if (!window.XMLHttpRequest) {
//       throw new Error("Ajax is not supported!");
//     }
//     callback = callbackFunction;
//     xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", url);
//     xmlhttp.setRequestHeader('Accept', 'application/json');
//     xmlhttp.onload = _onLoad;
//     xmlhttp.send();
//   }

//   return {
//     getJSON: _getJSON
//   }
// })();