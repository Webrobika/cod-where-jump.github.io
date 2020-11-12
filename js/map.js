var map = L.map('map', {
    minZoom: 0,
    maxZoom: 2,
    center: [0, 0],
    zoom: 0,
    crs: L.CRS.Simple ,
    zoomControl: false 
  });
  
  var w = 2030,
      h = 2238,
      url = 'img/map_edit.png';
  
  var southWest = map.unproject([0, h], map.getMaxZoom()-1);
  var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
  var bounds = new L.LatLngBounds(southWest, northEast);
  L.imageOverlay(url, bounds).addTo(map);

  
  map.setMaxBounds(bounds);
//map.on('click', (e) => { console.log('"lat" : ' + e.latlng.lat + ',\n"lng" : ' + e.latlng.lng ); });
