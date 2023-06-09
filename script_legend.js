// FUNCIÓN calculateWinningParties ---> Calcula partidos ganadores

function calculateWinningParties(features) {
    console.log('calculateWinningParties llamada con', features);
    // Crea un objeto vacío donde se almacenarán los partidos y sus conteos de victorias
    var parties = {};

    // Recorre todas las características (municipios) en la capa actualmente visible
    for (var i = 0; i < features.length; i++) {
        // Extrae el nombre del partido gobernante del municipio actual
        var party = features[i].state.partido_alcalde;

        // Si el partido no está definido, continúa con la siguiente entidad
        if (!party) {
            continue;
        }

        // Si este partido aún no ha sido registrado, añádelo al objeto de partidos con un conteo inicial de victorias de 0
        if (!parties[party]) {
            parties[party] = 0;
        }

        // Incrementa el conteo de victorias para este partido
        parties[party]++;
    }


    // Convierte el objeto de partidos en una matriz de pares [partido, victorias], clasifica los pares por el número de victorias (de más a menos) y toma los primeros 5
    var sortedParties = Object.keys(parties).sort((a, b) => parties[b] - parties[a]).slice(0, 5);

    // Si hay menos de 5 partidos, completa la matriz con partidos por defecto
    var defaultParties = ["PP", "PSOE", "PODEMOS", "COMPROMÍS", "VOX", "ERC", "MÁS MADRID"]; // ajusta según tus necesidades
    while (sortedParties.length < 5) {
        var defaultParty = defaultParties.find(party => !sortedParties.includes(party));
        if (defaultParty) {
            sortedParties.push(defaultParty);
            // Asegurarse de que el partido por defecto tenga un conteo de victorias en `parties`
            if (!parties[defaultParty]) {
                parties[defaultParty] = 0;
            }
        } else {
            break;
        }
    }


    // Convierte la matriz de partidos en una matriz de objetos, cada uno con un nombre de partido y un conteo de victorias
    var winningParties = sortedParties.map(party => ({ party, wins: parties[party] || 0 }));

    while (sortedParties.length < 5) {
        var defaultParty = defaultParties.find(party => !sortedParties.includes(party));
        if (defaultParty) {
            sortedParties.push(defaultParty);
            // Asegurarse de que el partido por defecto tenga un conteo de victorias en `parties`
            if (!parties[defaultParty]) {
                parties[defaultParty] = 0;
            }
        } else {
            break;
        }
    }
    console.log('sortedParties después de completar con partidos por defecto', sortedParties);

    // Devuelve la matriz de partidos ganadores
    return winningParties;
}




function updateLegend(winningParties) {
    console.log('updateLegend llamada con', winningParties);

    // Verifica si ya existe un elemento SVG para la leyenda
    var existingSvg = d3.select("#leyenda svg");
    if (!existingSvg.empty()) {
        console.log('Eliminando elemento SVG existente');
        // Eliminar el elemento SVG existente antes de crear uno nuevo
        existingSvg.remove();
    } else {
        console.log('No se encontró un elemento SVG existente');
    }

    // Crea un nuevo elemento SVG para la leyenda
    console.log('Creando nuevo elemento SVG para la leyenda');

    // Crea un nuevo elemento SVG para la leyenda
    var svg = d3.select("#leyenda")
        .append("svg")
        .attr("width", 300)
        .attr("height", 80)
        .attr("class", "menu")
        .attr("transform", "translate(100,50)");

    // Crea nuevos elementos de leyenda para cada partido ganador
    var legend = svg.selectAll(".legend")
        .data(winningParties)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) { return "translate(" + i * 80 + ",0)"; }); // Ajusta el valor "80" según el tamaño de tus elementos de leyenda


    // Añade un rectángulo de color para cada partido
    legend.append("rect")
        .attr("x", 0)
        .attr("width", 80)
        .attr("height", 18)
        .style("fill", d => partidoColors[d.party] || '#EDEDEA'); // Reemplaza 'black' con el color que desees usar por defecto

    // Añade un texto con el nombre del partido y el número de victorias para cada partido
    legend.append("text")
        .attr("x", 40) // Centrado horizontalmente. Ajusta este valor a la mitad del ancho del rectángulo.
        .attr("y", 35) // Posición debajo del rectángulo. Ajusta este valor si cambias la altura del rectángulo o el espacio que deseas entre el rectángulo y el texto.
        .attr("text-anchor", "middle") // Asegura que el texto esté centrado en su posición 'x'.
        .text(d => d.party);
        //.text(d => d.party + " (" + d.wins + ")");

}





