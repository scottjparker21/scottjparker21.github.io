function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(43.034366, -87.912106),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var myLatLng = {lat: 43.034366, lng: -87.912106};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Peel Truck'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
