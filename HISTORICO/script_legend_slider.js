// FUNCIÓN PARA CALCULAR LOS PARTIDOS GANADORES

function partidosGanadores(features) {
    console.log('partidosGanadores llamada con', features);
    // Objeto vacío para almacenar los partidos y sus victorias
    var partidos = {};

    // Recorrido de todas las características (municipios) en la capa actualmente visible
    for (var i = 0; i < features.length; i++) {
        // Nombre del partido gobernante del municipio actual
        var partido = features[i].state.partido_alcalde;
        // Si el partido no está definido, continúa con la siguiente entidad
        if (!partido) {
            continue;
        }

        // Si este partido aún no ha sido registrado, lo añade al objeto de partidos con un conteo inicial de victorias de 0
        if (!partidos[partido]) {
            partidos[partido] = 0;
        }

        // Incrementa el conteo de victorias para este partido
        partidos[partido]++;
    }


    // Convierte el objeto de partidos en una matriz de pares [partido, victorias], clasifica los pares por el número de victorias (de más a menos) y toma los primeros 5
    var ordenPartidos = Object.keys(partidos).sort((a, b) => partidos[b] - partidos[a]).slice(0, 5);

    // Si hay menos de 5 partidos, completa la matriz con partidos por defecto
    var defaultPartidos = ["PSOE", "PP", "PODEMOS", "COMPROMÍS", "VOX", "ERC", "MÁS MADRID"];
    while (ordenPartidos.length < 5) {
        var defaultPartido = defaultPartidos.find(partido => !ordenPartidos.includes(partido));
        if (defaultPartido) {
            ordenPartidos.push(defaultPartido);
            // Asegurarse de que el partido por defecto tenga un conteo de victorias en `partidos`
            if (!partidos[defaultPartido]) {
                partidos[defaultPartido] = 0;
            }
        } else {
            break;
        }
    }


    // Convierte la matriz de partidos en una matriz de objetos, cada uno con un nombre de partido y un conteo de victorias
    var ganadores = ordenPartidos.map(partido => ({ partido, wins: partidos[partido] || 0 }));

    while (ordenPartidos.length < 5) {
        var defaultPartido = defaultPartidos.find(partido => !ordenPartidos.includes(partido));
        if (defaultPartido) {
            ordenPartidos.push(defaultPartido);
            // Asegurarse de que el partido por defecto tenga un conteo de victorias en `partidos`
            if (!partidos[defaultPartido]) {
                partidos[defaultPartido] = 0;
            }
        } else {
            break;
        }
    }
    console.log('ordenPartidos después de completar con partidos por defecto', ordenPartidos);

    // Devuelve la matriz de partidos ganadores
    return ganadores;
}




function actualizarLegenda(ganadores) {
    console.log('actualizarLegenda llamada con', ganadores);

    var contieneSvg = d3.select("#leyenda svg");
    if (!contieneSvg.empty()) {
        console.log('Eliminando elemento SVG existente');
        contieneSvg.remove();
    } else {
        console.log('No se encontró un elemento SVG existente');
    }

   
    console.log('Creando nuevo elemento SVG para la leyenda');

    var svg = d3.select("#leyenda")
        .append("svg")
        .attr("width", "50%")
        .attr("height", 80)
        .attr("class", "menu")
        .attr("transform", "translate(100,50)");

    var legend = svg.selectAll(".legend")
        .data(ganadores)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) { return "translate(" + i * 80 + ",0)"; });
    
    legend.append("rect")
        .attr("x", 0)
        .attr("width", 80)
        .attr("height", 18)
        .style("fill", d => partidoColors[d.partido] || '#EDEDEA');
    legend.append("text")
        .attr("x", 40)
        .attr("y", 35)
        .attr("text-anchor", "middle")
        .text(d => d.partido);
        //.text(d => d.partido + " (" + d.wins + ")");

}





