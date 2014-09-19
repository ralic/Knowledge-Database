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
