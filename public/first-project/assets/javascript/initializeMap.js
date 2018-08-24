var markerArray = [];
var service;

function placeMarker(coordinates, name, type) {
    var iconLink;
    if (type === 'Restaurants') {
        iconLink = 'https://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png';
    } else if (type === 'Hotels') {
        iconLink = 'https://maps.gstatic.com/mapfiles/ms2/micons/lodging.png';
    } else {
        iconLink = 'https://maps.gstatic.com/mapfiles/ms2/micons/camera.png';
    }
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: name,
        icon: iconLink
    });
    markerArray.push(marker);
    google.maps.event.addListener(marker, 'click', captureMarkerClicks);
    google.maps.event.addListener(marker, 'tap', captureMarkerClicks);
}


function initialMap() { 
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.053342, lng: -118.376099},
        zoom: 12,
        mapTypeControl: false 
    }); 

    for (var i = 0; i < objectArray.length; i++) {
        placeMarker(objectArray[i].coordinates, objectArray[i].name, objectArray[i].type    );
    }
    service = new google.maps.places.PlacesService(map);
}