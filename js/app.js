var currentWeather;
$(document).ready(function(){
  $("#toggleTerminal").click(function(e){
    $("#terminalDiv").slideToggle("slow");
    e.preventDefault();
  });
	
	$.ajax({
        	url: "https://api.wunderground.com/api/26ef3640837b68be/conditions/q/CT/New%20Haven.json",
        	dataType : "jsonp",
        	success : function(parsed_json) {
            	var city = parsed_json['current_observation']['display_location']['city'];
        	    var state_name = parsed_json['current_observation']['display_location']['state_name'];
    	        var temperature_string = parsed_json['current_observation']['temperature_string'];
	            var weather = parsed_json['current_observation']['weather'];
            	currentWeather = "The tempature is " + temperature_string + " and it is currently " + weather + " for " + city + ", " + state_name;
        	    $('#currentWeather').text(currentWeather);
    	    }
	    }); 
	$('#getWeather').click(function() {
		//alert("this works");

	 	$('#displayWeather').show().delay(5000).fadeOut();
		
	});
	
});