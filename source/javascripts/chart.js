function get_data()
{
    var category = get_selected_category();
    var data = $( '#insecurity_data' );

    data = JSON.parse( data.attr('data') );

    console.log( 'data', data[category] );

    return data[category];
}

function draw_chart()
{
    var data = get_data();

    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'TOTO'
        },
        xAxis: {
            categories: data.years
        },
        yAxis: {
            title: {
                text: 'Nombre de plaintes par an'
            }
        },
        series: data.series_js
    });
}

function compute_complains_reported_to_time()
{
    var data = get_data();
    var recent_year_data = data['recent_year_data'];
    var message = null;

    var per_seconds = (360.0*24*60*60) / recent_year_data;
    console.log( per_seconds );

    message = Math.round(per_seconds) + ' secondes';

    if(per_seconds >= 60)
    {
        per_minutes = per_seconds / 60;
        message = Math.round(per_minutes) + ' minutes';

        if(per_minutes >= 60)
        {
            per_hour = per_minutes / 60;
            message = Math.round(per_hour) + ' heures';
        }
    }

    $('#complains_time').html('Un(e) toute les ' + message);
}

document.addEventListener('DOMContentLoaded', function () {

    var category = get_selected_category();
    console.log( 'Selected category =', category );

    var categ = $( "#categories" );

    categ.val( category );
    draw_chart( category );
});