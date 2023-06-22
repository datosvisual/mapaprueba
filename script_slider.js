$(document).ready(function () {

  var locale = d3.formatLocale({
    decimal: ",",
    thousands: ".",
    grouping: [3]
  });


  var init_position = [-3.61726, 38.62880]

  $("#DataActual").on("click", function () {
    map.getLayer('Municipios-fill');
    map.setLayoutProperty('Municipios-fill', 'visibility', 'visible');
    map.setLayoutProperty('Municipios-line', 'visibility', 'visible');
    map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
    map.setLayoutProperty('Otros-fill', 'visibility', 'none');
    map.setLayoutProperty('Otros-line', 'visibility', 'none');

    var features = map.queryRenderedFeatures({ layers: ['Municipios-fill'] });

    // Partidos ganadores
    var winningParties = partidosGanadores(features);

    // Actualización de la leyenda
    actualizarLegenda(winningParties);

    d3.selectAll("#DataActual")
      .classed("active", true);

    d3.selectAll("#DataOtros")
      .classed("active", false);

    d3.selectAll("#VarData")
      .classed("active", false);

    popup.remove();

  })

   
   $("#VarData").on("click", function () {
    map.getLayer('Municipios-fill');
    map.setLayoutProperty('Municipios-fill', 'visibility', 'none');
    map.setLayoutProperty('Municipios-line', 'visibility', 'visible');
    map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'visible');
    map.setLayoutProperty('Otros-fill', 'visibility', 'none');
    map.setLayoutProperty('Otros-line', 'visibility', 'none');

    var features = map.queryRenderedFeatures({ layers: ['VariacionesMun-fill'] });

    var winningParties = partidosGanadores(features);

    actualizarLegenda(winningParties);

    d3.selectAll("#DataActual")
      .classed("active", false);

    d3.selectAll("#DataOtros")
      .classed("active", false);

    d3.selectAll("#VarData")
      .classed("active", true);

    popup.remove();

  })


  $("#DataOtros").on("click", function () {
    map.getLayer('Municipios-fill');
    map.setLayoutProperty('Municipios-fill', 'visibility', 'none');
    map.setLayoutProperty('Municipios-line', 'visibility', 'none');
    map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
    map.setLayoutProperty('Otros-fill', 'visibility', 'visible');
    map.setLayoutProperty('Otros-line', 'visibility', 'visible');

    var features = map.queryRenderedFeatures({ layers: ['Otros-fill'] });

    var winningParties = partidosGanadores(features);

    actualizarLegenda(winningParties);

    d3.selectAll("#DataActual")
      .classed("active", false);

    d3.selectAll("#DataOtros")
      .classed("active", true);

    d3.selectAll("#VarData")
      .classed("active", false);

    popup.remove();

  })
})