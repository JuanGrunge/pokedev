$(document).ready(function(){
  $( "#formP" ).submit(function( event ) {
    event.preventDefault();
    var valueNumber = $("#numberP").val();
    $(".pokeInfo").empty();
    $(".pStats").empty();


    // ANIMACION LEDS
    $("#ledInfo").animate({
      opacity: '1',
    });
    $("#ledUno").delay(500).animate({
      opacity: '1',
    });
    $("#ledInfo").animate({
      opacity: '0.2',
    });
    $("#ledInfo").animate({
      opacity: '1',
    });
    $("#ledInfo").animate({
      opacity: '0.2',
    });
    $("#ledInfo").animate({
      opacity: '1',
    });
    $("#ledDos").delay(1000).animate({
      opacity: '1',
    });
    $("#ledInfo").animate({
      opacity: '0.2',
    });
    $("#ledInfo").animate({
      opacity: '1',
    });
    $("#ledInfo").animate({
      opacity: '0.2',
    });
    $("#ledInfo").animate({
      opacity: '1',
    });
    $("#ledTres").delay(1500).animate({
      opacity: '1',
    });
    $("#ledInfo").delay(800).animate({
      opacity: '0.2',
    });
    $("#ledUno").delay(3500).animate({
      opacity: '0.2',
    });
    $("#ledDos").delay(3000).animate({
      opacity: '0.2',
    });
    $("#ledTres").delay(2500).animate({
      opacity: '0.2',
    });

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
          $(".pokeInfo").append(`<div class="bg-dark col-5 d-inline-block rounded-bottom text-right text-light pt-3"> <h3>#${data.id}<h3> <div>`);//jquery
          $(".pokeInfo").append(`<div class="bg-primary col-10 d-inline-block rounded-bottom text-justify"> <h3>${data.name}<h3> <div>`);
          $(".pokeInfo").append(`<img src="${data.sprites.front_default}" alt="${data.name}"> <img>`);
          $(".pokeInfo").append(`<div class="bg-secondary text-center rounded-top position-fixed pl-5"> <p>Peso: ${data.weight/10} [kg]<p> <div>`);

          var options = {
            animationEnabled: true,
            title: {
              text: "Skills",
              fontFamily: "'Press Start 2P',cursive"
            },
            axisX: {
              labelFontFamily: "'Press Start 2P',cursive",
              labelFontSize: 17
            },
            axisY: {
              includeZero: false,
              labelFontFamily: "'Press Start 2P',cursive",
              labelFontSize: 10,
              gridColor: "#FFF"
            },
            data: [{
              type: "bar",
              color: "darkgreen",
              dataPoints: dataChart,
            }]
          };
          $(".pStats").CanvasJSChart(options);
        }
      });
    }
  });
});

