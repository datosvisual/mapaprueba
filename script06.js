$(document).ready(function () {

  var locale = d3.formatLocale({
    decimal: ",",
    thousands: ".",
    grouping: [3]
  });


  var init_position = [-3.61726, 38.62880]

  /** CLICK de los button*/
  $("#DataActual").on("click", function () {
    map.getLayer('Municipios-fill');
    map.setLayoutProperty('Municipios-fill', 'visibility', 'visible');
    map.setLayoutProperty('Municipios-line', 'visibility', 'visible');
    map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
    map.setLayoutProperty('Otros-fill', 'visibility', 'none');
    map.setLayoutProperty('Otros-line', 'visibility', 'none');

    var features = map.queryRenderedFeatures({ layers: ['Municipios-fill'] });

    // Calcula los partidos ganadores
    var winningParties = calculateWinningParties(features);

    // Actualiza la leyenda
    updateLegend(winningParties);

    d3.selectAll("#DataActual")
      .classed("active", true);

    d3.selectAll("#DataOtros")
      .classed("active", false);

    d3.selectAll("#VarData")
      .classed("active", false);

    popup.remove();

  })



})