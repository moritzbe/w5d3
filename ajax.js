var lat = "41.385064";
var lng = "2.173403";
var latlng = lat+","+lng;

var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latlng+"&sensor=true_or_false";
var xhr = new XMLHttpRequest();

xhr.open("POST", url);  
xhr.send(formData); 
xhr.onload = function() {
  var response = JSON.parse(this.responseText);
  console.log(response);
}
