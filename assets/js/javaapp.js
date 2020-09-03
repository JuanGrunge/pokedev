$(document).ready(function(){
  $( "#formP" ).submit(function( event ) {
    event.preventDefault();
    var valueNumber = $("#numberP").val();
    $(".pokeInfo").empty();
    $(".pStats").empty();
    //console.log(valueNumber);
    if(valueNumber !== null && valueNumber !== undefined) {
      $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${valueNumber}/`, //ajax
      }).done(function( data ) {
        if ( data ) {
          var dataChart = data.stats;
          var i;
          for(i = 0; i < dataChart.length; i++){ // ciclos.
              dataChart[i].label = dataChart[i]['stat'].name;
              dataChart[i].y = dataChart[i]['base_stat'];
          }
          //console.log( "Sample of data:", data );
          $(".pokeInfo").append(`<div class="bg-dark rounded d-inline-flex text-left text-light pt-3 pl-5"> <h3>#${data.id}<h3> <div>`);
          $(".pokeInfo").append(`<div class="d-inline-flex"> <h3>${data.name}<h3> <div>`); //jquery
          $(".pokeInfo").append(`<div class="d-block text-center "><img src="${data.sprites.front_default}" alt="${data.name}"> <img></div>`);
          $(".pokeInfo").append(`<div class="text-center"> <p>Peso: ${data.weight/10} [kg]<p> <div>`);
          var options = {
            animationEnabled: true,
            title: {
              text: "Puntos de base",
              fontFamily: "'Press Start 2P',cursive"
            },
            axisY: {
              title: "Valor",
              titleFontFamily: "'Press Start 2P',cursive",
              labelFontFamily: "'Press Start 2P',cursive",
              includeZero: false
            },
            axisX: {
              labelFontFamily: "'Press Start 2P',cursive",
              labelFontSize: 10
            },
            data: [{
              type: "column",
              dataPoints: dataChart
            }]
          };
          $(".pStats").CanvasJSChart(options);
        }
      });
    }
  });
});

