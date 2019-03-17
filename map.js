


$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    var x = document.getElementById("demo");
    getLocation();
    showPosition();

    function ajaxPost(latitude, longitude){
      
      // PREPARE FORM DATA
      var formData = {
        latitude : latitude,
        longitude : longitude
      }
      
      // DO POST
      $.ajax({
      type : "POST",
      contentType : "application/json",
      url :"https://locationtrackapi.herokuapp.com/api/location",
      data : JSON.stringify(formData),
      dataType : 'json',
      success : function(customer) {
        $("#demo").html("<p>" + 
          "Post Successfully! <br>" +
          "--->" + JSON.stringify(customer)+ "</p>"); 
      },
      error : function(e) {
        alert("Error!")
        console.log("ERROR: ", e);
      }
    });
    }
    function getLocation() {
      if (navigator.geolocation) {
        p = navigator.geolocation.getCurrentPosition(showPosition);
        //console.log(p.coords.latitude)
      } else {
          
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    
    
    function add(latitude,longitude){
      var data = {};
      data.latitude = latitude;
      data.longitude = longitude;
      console.log("int")
      $.ajax({
        type: "PUT",
        url: "https://locationtrackapi.herokuapp.com/api/location/put",
        data: data,
        dataType: 'application/json',
        success: function(data) {
          console.log('success');
          console.log(data);
         }
      });
     // window.open("https://www.geeksforgeeks.org", "_top"); 
    
    }
    
    function showPosition(position) {
      x1 = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;  
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      altitude = position.coords.altitude;
    
        console.log("latitude: "+latitude+" longitude: "+longitude+ " altitude: "+ altitude) 
        ajaxPost(latitude,longitude);
        
    }
 });


/*function showPosition_1(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }*/