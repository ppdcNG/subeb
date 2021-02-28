var data = {
  labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [{
    label: "Dataset #1",
    backgroundColor: "rgb(61, 118, 159)",
    hoverBackgroundColor: "rgba(61, 118, 159, 0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [65, 59, 20, 81, 56, 55, 40],
  }]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

Chart.Bar('chart', {
  options: options,
  data: data
});
