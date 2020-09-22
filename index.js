google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  data.addRows([
    ['PCB', 'PCB', 'PCB',
     new Date(2020, 8, 25), new Date(2020, 9, 16), null,  90,  null],
    ['Enclosure', 'Enclosure', 'Enclosure',
     new Date(2020, 8, 25), new Date(2020, 9, 24), daysToMilliseconds(3), 25, null],
    ['Code', 'Concept Code', 'Code',
     new Date(2020, 10, 10), new Date(2020, 11, 14), daysToMilliseconds(1), 50,'PCB'],
    ['Pedal', 'Rocker Pedal', 'Pedal',
     new Date(2020, 8, 25), new Date(2020, 10, 6), daysToMilliseconds(1), 0, null],
    ['LED', 'LED Programming', 'Code',
     new Date(2020, 9, 1), new Date(2020, 10, 25), daysToMilliseconds(1), 0, null],
    ['Final Code', 'Proprietary Code', 'Proprietary Code',
     new Date(2021, 0, 6), new Date(2021, 3, 16), daysToMilliseconds(1), 0, null],
    ['Graphics', 'Graphics', 'Proprietary Code',
     new Date(2021, 0, 6), new Date(2021, 3, 16), daysToMilliseconds(1), 2, null],
    ['Daughter Board', 'Daughter Board Integration', 'Daughter Board',
     new Date(2021, 2, 1), new Date(2021, 3, 16), daysToMilliseconds(1), 5, null ],
    ]);

  var options = {
    height: 400,
    'allowHtml': true,
    gantt: {
      trackHeight: 30
    }
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

  chart.draw(data, options);
}
