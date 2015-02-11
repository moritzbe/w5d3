/** 
* TinderGeolocation
* A demonstration of the Constructor Pattern
* to retrieve your current coordinates.
*
* Usage:
*   var geolocation = new TinderGeolocation();
*   geolocation.geolocate(function(coords) {
*     console.log(coords);
*   })
*/

var Tinder = window.Tinder || {};


Tinder.geoLocate = function() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess);
    }
}



function onSuccess(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = lat +","+lon;
  document.getElementById("lon").innerHTML = lon;
  document.getElementById("lat").innerHTML = lat; 
  document.getElementById("image").src = "http://maps.google.com/maps?q="+5+"+"+5;
}











// var TinderGeolocation = function() {
//   this.geolocate = function(callback) {
//     if (navigator.geolocation) {

//       // get permission
//       navigator.geolocation.getCurrentPosition(onSuccess, onError);
      
//       function onSuccess(position) {
//         callback(position.coords);
//       }

//       function onError() {
//         throw new Error("Could not get latitude and longitude");
//       }
//     }
//   }
// }