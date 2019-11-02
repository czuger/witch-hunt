function draw_chart()
{
    console.log( $( '#results' ).attr( 'data' ) );

    var data = JSON.parse( $( '#results' ).attr( 'data' ) );

    console.log( data[0] );
    console.log( data[0].data[1789-1275] );

    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'TOTO'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1275
            }
        },
        yAxis: {
            title: {
                text: 'Nombre de condammnations'
            }
        },
        series: data,
        annotations: [{
            labels: [{
                point: {
                    x: 1275,
                    y: data[0].data[0],
                    xAxis: 0,
                    yAxis: 0
                },
                text: "Procès d'Angéle de la Barthe"
            },
            {
                point: {
                    x: 1453,
                    y: data[0].data[1453-1275],
                    xAxis: 0,
                    yAxis: 0
                },
                text: 'Renaissance'
            },
            // {
            //     point: {
            //         x: 1610,
            //         y: data[0].data[1610-1275],
            //         xAxis: 0,
            //         yAxis: 0
            //     },
            //     text: 'Fin de la renaissance'
            // },
            {
                point: {
                    x: 1618,
                    y: data[0].data[1618-1275],
                    xAxis: 0,
                    yAxis: 0
                },
                text: 'Guerre de trente ans'
            },

            {
                point: {
                    x: 1715,
                    y: data[0].data[1715-1275],
                    xAxis: 0,
                    yAxis: 0
                },
                text: 'Siècle des lumières'
            },
            // {
            //     point: {
            //         x: 1789,
            //         y: data[0].data[1789-1275],
            //         xAxis: 0,
            //         yAxis: 0
            //     },
            //     text: 'Révolution Française'
            // }
            ]
        }]
    });
};

document.addEventListener('DOMContentLoaded', function () {
    draw_chart();
});