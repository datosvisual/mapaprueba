$( document ).ready(function() {
		
    var locale = d3.formatLocale({
      decimal: ",",
      thousands: ".",
      grouping: [3]
    });
  
     var legendRenta = d3
    .select("div#leyenda")
    .append("svg")
    .attr("width", 300)
    .attr("height", 80)
    
    .attr("class", "menu")
    .attr("transform", "translate(100,50)")
    
    var init_position = [-3.61726, 38.62880]
  
    /** CLICK de los button*/ 
    $("#DataActual").on("click", function () {
      map.getLayer('Municipios-fill');
      map.setLayoutProperty('Municipios-fill','visibility','visible');
      //map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'visible');
      map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
      //map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
      //map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
      map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
      
              var legendRentaActual = d3.legendColor()
              .labels((["Menor participación", "" , "", "Mayor participación"]))
              .title("DataActual 2019")
              .shapeWidth(50)
                        
              .orient('horizontal')
              .scale(color_escala);
    
              legendRenta.
              call(legendRentaActual);
    
              d3.selectAll("#DataActual")
                .classed("active", true);
    
              d3.selectAll("#DataPrevia")
                .classed("active", false);
    
              d3.selectAll("#VarData")
                .classed("active", false);
  
      popup.remove();          
              
    })
    
    /*previa*/
    $("#DataPrevia").on("click", function () {
      map.getLayer('Municipiosprevia-fill');
      map.setLayoutProperty('Municipiosprevia-fill','visibility','visible');
      //map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'visible');
      map.setLayoutProperty('Municipios-fill', 'visibility', 'none');
      //map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');
      //map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
      map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
  
      var legendRentaPrevia = d3.legendColor()
      .labels((["Menor" ,"", "", "Mayor"]))
      .title("Renta 2019")
      .shapeWidth(50)
              
  
      .orient('horizontal')
      .scale(color_escala);
  
      legendRenta.
      call(legendRentaPrevia);
  
      d3.selectAll("#DataPrevia")
      .classed("active", true);
  
      d3.selectAll("#DataActual")
        .classed("active", false);
  
      d3.selectAll("#VarData")
        .classed("active", false);
    
      popup.remove();  
            
    })
    /*Variacion*/
    $("#VarData").on("click", function () {
      map.getLayer('VariacionesMun-fill');
      map.setLayoutProperty('VariacionesMun-fill','visibility','visible');
      //map.setLayoutProperty('Variaciones-fill', 'visibility', 'visible');
      map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
      //map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
      map.setLayoutProperty('Municipios-fill', 'visibility', 'none');
      //map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');
  
      var legendVarRenta= d3.legendColor()
      .labels(([
        "Baja", "",
        "", "Sube"]))
      .title("Variación Renta 2019 - 2020")
      .shapeWidth(50)
    
  
      .orient('horizontal')
      .scale(color_escala_variacion);
  
      legendRenta.
      call(legendVarRenta);
  
      d3.selectAll("#VarData")
      .classed("active", true);
  
      d3.selectAll("#DataActual")
        .classed("active", false);
  
      d3.selectAll("#DataPrevia")
        .classed("active", false);
  
      popup.remove();
    
    })
  
    })