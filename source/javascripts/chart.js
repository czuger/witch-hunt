function draw_chart()
{
    // console.log( $( '#results' ).attr( 'data' ) );

    var data = JSON.parse( $( '#results' ).attr( 'data' ) );

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
                pointStart: 1250
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
                    xAxis: 50
                },
                text: 'Arbois'
            }]
        }]
    });
};

document.addEventListener('DOMContentLoaded', function () {
    draw_chart();
});