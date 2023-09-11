let map;
const centerMap = { lat: -3.716816, lng: -38.519115};

function initMap() {
  const mapOptions = {
    center: centerMap,
    zoom: 8
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  map.addListener('zoom_changed', function() {
    console.log("mudou o zoom");
  });

  map.addListener('click', function(e) {
    console.log(e);
  });

  map.addListener('dblclick', function() {
    console.log('click duplo')
  });

  //property_chenged, zoom_changed

}
