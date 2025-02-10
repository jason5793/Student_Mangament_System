
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Country', 'Mhl'],
        ['Italy', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
    ]);

    // Set Options
    const options = {
        title: 'World Wide Wine Production',
        width: '100%',
        height: 400
    };

    // Draw Chart
    const chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
      ['Contry', 'Mhl'],
      ['Italy',54.8],
      ['France',48.6],
      ['Spain',44.4],
      ['USA',23.9],
      ['Argentina',14.5]
    ]);
    
    // Set Options
    const options = {
      title:'World Wide Wine Production'
    };
    
    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('mychart1'));
    chart.draw(data, options);
    
    }