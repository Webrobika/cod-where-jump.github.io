$(function() {
    var p = [0, 0], speed = 10, runMe = function () {
       var angle = Math.random() * 2 * Math.PI;
       var d = [
           speed * Math.cos(angle), 
           speed * Math.sin(angle)
       ];

       for (var i = 0; i < 2; i++)
          p[i] = (p[i] + d[i] > 100 || p[i] + d[i] < 0) ? p[i] - d[i] : p[i] + d[i];

       $('body').animate({
           backgroundPositionX: p[0] + '%',
           backgroundPositionY: p[1] + '%'
       }, 6000, 'linear', runMe);
    };
   
    runMe();
});

var marker = {};
$('button').click(function(){
    let placec = 19;

    if (marker != undefined) {
        map.removeLayer(marker);
    };
    
    $.getJSON('datas/map.json', function(data){
        map.removeLayer(marker)
        let genPlace = data[Math.floor(Math.random() * placec)]
        marker = L.marker([genPlace.lat, genPlace.lng]).addTo(map);
        map.panTo(new L.LatLng(genPlace.lat, genPlace.lng));

    })
})

