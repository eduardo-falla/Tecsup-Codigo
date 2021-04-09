/* --------------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------------- */
/* 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

 */
/* --------------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------------- */

var opts = {
    angle: 0.15, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.49, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
      
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    percentColors : [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],


    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [50, 100, 150, 200, 250, 300],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },

/*       pointer: {
        // Extra optional pointer options:
        iconPath: 'myicon.png',  // Icon image source
        iconScale: 1,    // Size scaling factor
        iconAngle: 90.0  // Rotation offset angle, degrees
      }, */


    
  };
  
  
 
 
 
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 300; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 56; // set animation speed (32 is default value)

  setInterval(() => {
    var aleatorio=Math.round(Math.random()*300);
    console.log(aleatorio)
    case1=document.getElementById("temp-texto")
    case1.innerHTML=`${aleatorio} °C`;
    gauge.set(aleatorio); // set actual value
  }, 2000);