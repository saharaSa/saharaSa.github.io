var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    p = navigator.geolocation.getCurrentPosition(showPosition);
    //console.log(p.coords.latitude)
  } else {
      
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x1 = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;  
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  altitude = position.coords.altitude;

    console.log("latitude: "+latitude+" longitude: "+longitude+ " altitude: "+ altitude) 
    add(latitude,longitude);
    
}

$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
 
    getLocation();
    showPosition();    
   
 });

function add(latitude,longitude){
  var data = {};
  data.latitude = latitude;
  data.longitude = longitude;
  console.log("int")
  $.ajax({
    type: "POST",
    url: "https://locationtrackapi.herokuapp.com/api/location",
    data: data,
    dataType: 'application/json',
    success: function(data) {
      console.log('success');
      console.log(data);
     }
  });
 // window.open("https://www.geeksforgeeks.org", "_top"); 

}

 function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
/*function showPosition_1(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }*/