let map;
let  trueFalse = false;
let button = document.getElementById('botao');

function desabilitarHabilitar() {
  if(trueFalse == false)
  {
    trueFalse = !trueFalse;
    button.innerText = 'Habilitar controles'
  }
  else
  {
    trueFalse = !trueFalse;
    button.innerText = 'Desabilitar controles'
  }

  map.setOptions({
    disableDefaultUI: trueFalse
  });
}

const centerMap = { lat: -3.716816, lng: -38.519115};

class CenterControl {
  constructor(map) {
    //Seguimos o padrão sugerido pela google, div -> div -> div
    this.controlDiv = document.createElement('div');
    this.controlUi = document.createElement('div');
    this.controlText = document.createElement('div');

    this.controlUi.style.backgroundColor = "#fff";
    this.controlUi.style.border = '2px solid #ebebeb';
    this.controlUi.style.borderRadius = '3px';
    this.controlUi.style.padding = '6px'
    this.controlUi.style.cursor = 'pointer';
    this.controlUi.title = 'Centralizar mapa';

    this.controlDiv.appendChild(this.controlUi);

    this.controlText.style.fontSize = '16px';
    this.controlText.style.textAlign = 'center';
    this.controlText.style.lineHeight = '20px';
    this.controlText.style.color = '#333';
    this.controlText.innerHTML = 'Centralizar';

    this.controlUi.appendChild(this.controlText);

    this.controlUi.addEventListener('click', () => {
      map.panTo(centerMap);
    })
  }
}

function initMap() {
  const mapOptions = {
    center: centerMap,
    zoom: 8,
    disableDefaultUI: trueFalse
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const centerControl = new CenterControl(map);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControl.controlDiv);
}