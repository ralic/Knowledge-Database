###Faster your google maps

1. [Too many Markers](https://developers.google.com/maps/articles/toomanymarkers?csw=1#gridbasedclustering)

###Google Maps Library

https://code.google.com/p/google-maps-utility-library-v3/

###Google Maps Url with lat/long/zoom

```
https://www.google.com/maps/place/@25.033701,121.565598,17z // w/o location but no marker
https://www.google.com/maps/place/Taipei+101/@25.033701,121.565598,17z // with location and marker
https://maps.google.com/maps?q=46.907091,0.243929&sll=46.907091,0.243929 // old version with sll with marker
```

###Google Maps Url with Location

```
http://www.google.com/maps/place/Taipei+101
```

###Initial Map

```js
function initialMap() {
    // set the actual height
    $('#map-canvas').css('height', $(document).height() - 204);
    
    // bootup map
    map = new google.maps.Map($('#map-canvas')[0], {
        zoom: 15,
        center: new google.maps.LatLng(25.0293008, 121.5205833), // 預設中正區中心點
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    google.maps.event.addListenerOnce(map, 'idle', function () {
        // when map ready
    });
}
```

###Show Marker (infowindow)

```js
var map,
    markers,
    lastCallInfoWindow;

function showMarker(event) {
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(event.location.lat, event.location.long),
        animation: google.maps.Animation.DROP
    });
    markers.push(marker);
  
    var infowindow = new google.maps.InfoWindow({
        content: '<div>' + event.title + '</div>',
        disableAutoPan: true
    });
  
    // marker event
    google.maps.event.addListener(marker, 'mouseover', function() {
        if (lastCallInfoWindow) {
            lastCallInfoWindow.close();
        }
        infowindow.open(map,marker);
        lastCallInfoWindow = infowwindow;
    });
    google.maps.event.addListener(marker, 'mouseout', function() {
        // mouseout event
    });
    google.maps.event.addListener(marker, 'click', function () {
        if (lastCallInfoWindow) {
            lastCallInfoWindow.close();
        }
        infowindow.open(map, marker);
        lastCallInfoWindow = infowindow;
    });
  }
```

###Clear Marker

```js
var markers = [/*...*/],
    lastCallInfoWindow;

function clearMarker() {
    for (var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }
    markers.length = 0;
    if (lastCallInfoWindow) {
        lastCallInfoWindow.close();
    }
}
```

###Marker Cluster

```js
// http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerclusterer/1.0/docs/reference.html
var center = new google.maps.LatLng(37.4419, -122.1419);
var options = {
  'zoom': 13,
  'center': center,
  'mapTypeId': google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map"), options);

var markers = [];
for (var i = 0; i < 100; i++) {
  var latLng = new google.maps.LatLng(data.photos[i].latitude,
      data.photos[i].longitude);
  var marker = new google.maps.Marker({'position': latLng});
  markers.push(marker);
}
var markerCluster = new MarkerClusterer(map, markers);
```

###Get your Location City

```js
var geocoder = new google.maps.Geocoder();

navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng);
});

function codeLatLng(lat, lng) {

var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {
         //formatted address
         alert(results[0].formatted_address)
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {
    
            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
        alert(city.short_name + " " + city.long_name)
    
    
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
}
```
