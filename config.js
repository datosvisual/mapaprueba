var config = {
    style: 'mapbox://styles/datosvisual/cku8kgu455l1418tit02gtb8m',
    accessToken: 'pk.eyJ1IjoiZGF0b3N2aXN1YWwiLCJhIjoiY2t0eThqaGN6MWMyYTJ1bXhzdG85dDZuZiJ9.psw5gd3RhBsYwo5kZri0Gg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Primera Prueba de Storytelling',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            //image: './path/to/image/source.png',
            description: 'Esta es la primera prueba',
            location: {
                /*center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0*/
                center: [-3.70038, 40.42175],
                zoom: 7.91,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                /*center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2*/
                center: [2.12516, 41.80087],
                zoom: 8.41,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
