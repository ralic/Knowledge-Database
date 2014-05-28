(function () {

    myApp.controller('indexController', ['utility', function (utility) {
          var map,
              infowindow,
              markers = [],
              umarker = [],
              circles = [];

          function createMarker(place) {

              var marker = new google.maps.Marker({
                  map: map,
                  position: place.pos,
                  animation: google.maps.Animation.DROP
              });

              google.maps.event.addListener(marker, 'click', function() {
                  infowindow.setContent(place.name);
                  infowindow.open(map, this);
              });
          }

          function createCircle(place) {
              var cicleOption = {
                  strokeColor: 'white',
                  strokeOpacity: 0.3,
                  strokeWeight: 3,
                  fillColor: '#ff5400',
                  fillOpacity: 0.35,
                  map: map,
                  center: place.pos,
                  radius: 1000
              };
              // Add the circle for this city to the map.
              var cityCircle = new google.maps.Circle(cicleOption);
          }

          function initialMapAndSearchBar(mapId, searchId) {

              var pos = new google.maps.LatLng(25.0392179, 121.5398562);
              var mapOptions = {
                  zoom: 15,
                  disableDefaultUI: true,
                  center: pos,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              map = new google.maps.Map(document.getElementById(mapId), mapOptions);
              infowindow = new google.maps.InfoWindow();
              google.maps.visualRefresh = true;


              var input = (document.getElementById(searchId));
              // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

              var searchBox = new google.maps.places.SearchBox((input));

              google.maps.event.addListener(searchBox, 'places_changed', function () {

                  var places = searchBox.getPlaces();

                  // For each place, get the icon, place name, and location.

                  map.setCenter(places[0].geometry.location);

                  createMarker({
                      pos: places[0].geometry.location,
                      name: places[0].name
                  });

              });

              // Try HTML5 geolocation
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (position) {
                      var pos = new google.maps.LatLng(position.coords.latitude,
                        position.coords.longitude);

                      var infowindow = new google.maps.InfoWindow({
                          content: 'I am here'
                      });

                      map.setCenter(pos);

                      createMarker({
                          pos: pos,
                          name: 'I\'m here'
                      });

                      createCircle({
                          pos: pos
                      });

                      utility.spinner.off();
                  });


              }

              google.maps.event.addListener(map, 'idle', function () {
                  // do something only the first time the map is loaded
              });

          }

          google.maps.event.addDomListener(window, 'load', function () {
              initialMapAndSearchBar('map-canvas', 'pac-input');
          });

      }]);

})();