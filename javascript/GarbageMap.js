var map;
var markers = [];
				
function initialize() {
    var mapProp = {
	center:new google.maps.LatLng(55.861629,-4.242531),
	zoom:15,
	mapTypeId:google.maps.MapTypeId.ROADMAP
	};
    var marker;
    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    google.maps.event.addListener(map, 'click', function(event) { 
        placeMarker(event.latLng);
    });
						
    $.get("LoadMarkers.php", function(data){
	console.log("Preparing to load dataset... Data: " + data);
	var pos = JSON.parse(data);
        console.log("Parsed JSON: " + pos);
	for(i = 0; i < pos.markers.length; i++){
            var current_lat = parseFloat(pos.markers[i].lat);
            var current_lng = parseFloat(pos.markers[i].lng);
            console.log("Loaded (lat="+current_lat+", lng="+current_lng+")");
            placeMarker(new google.maps.LatLng(current_lat, current_lng));
        }
    });
}

function placeMarker(location) {
    var loc = {lat: location.lat(), lng: location.lng()};
	$.post("SaveMarker.php", loc, function(data){
            console.log("Saving data: " + loc);
            console.log("Returned: " + data);
            console.log("Saved marker location (lat="+location.lat()+",lng="+location.lng()+") to database");
	});
				 
    var marker = new google.maps.Marker({
	position: location,
	map: map,
	icon: 'Images/RubbishBin.png'
    });
    
    
    /*markers.push([location.lat(), location.lng()]);
    for(i = 0; i < markers.length; i++) {
	console.log("lat loc: " + location.lat() + " markers lat: " +  markers[i][0]);
	console.log("lat lng: " + location.lng() + " markers lng: " +  markers[0][i]);
	if(location.lat() > markers[i][0] && (location.lat() - markers[i][0]) < 0.01) {
            if(location.lng() > markers[0][i] && (location.lng() - markers[0][i]) < 0.01) {
		var marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: 'Images/RubbishBinRed.png'
		});
            }
	}
    }*/
}
					
google.maps.event.addDomListener(window, 'load', initialize);



