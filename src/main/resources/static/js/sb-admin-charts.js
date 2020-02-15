// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");

// Added new code
var odsLabels = $("#odsLabels").val();
var odsOrders = $("#odsOrders").val();

odsLabels = odsLabels.substring(1,odsLabels.length-1);
odsOrders = odsOrders.substring(1,odsOrders.length-1);

odsLabels = odsLabels.split(",");
odsOrders = odsOrders.split(",");
// End added new code

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    //labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
      labels: odsLabels,
    datasets: [{
      label: "Orders",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      //data: [150, 165, 158, 155, 145, 176, 162, 159, 149, 167, 180, 150, 149],
        data: odsOrders,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 100,
          max: 200,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Bar Chart Example

var crLabels = $("#crLabels").val();
var crRevenue = $("#crRevenue").val();

crLabels = crLabels.substring(1,crLabels.length-1);
crRevenue = crRevenue.substring(1,crRevenue.length-1);

crLabels = crLabels.split(",");
crRevenue = crRevenue.split(",");


var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: crLabels,
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      //data: [23000, 31000, 32000, 36000, 37000, 45000],
        data: crRevenue,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");

// Added new code
var catsNames = $("#catsNames").val();
var catsPct = $("#catsPct").val();

catsNames = catsNames.substring(1,catsNames.length-1);
catsPct = catsPct.substring(1,catsPct.length-1);

catsNames = catsNames.split(",");
catsPct = catsPct.split(",");
// End new added code

var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    //labels: ["Electronics", "Phone/iPad", "Purses", "Jwellery"],
      labels: catsNames,
    datasets: [{
      //data: [12.21, 15.58, 11.25, 8.32],
        data: catsPct,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});
