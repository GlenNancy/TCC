let map;
const centerMap = { lat: -3.716816, lng: -38.519115};

function initMap() {
  const mapOptions = {
    center: centerMap,
    zoom: 8
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  //adicionar um marcador
  var marker = new google.maps.Marker({
      position: centerMap,
      map: map, //definir o mapa que este marcador vai aparecer
      title: 'Centro de Fortaleza',
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  // remover

  // animações

  // draggable
}