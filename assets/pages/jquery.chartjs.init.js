/**
Template Name: Ubold Dashboard
Author: CoderThemes
Email: coderthemes@gmail.com
File: Chartjs
*/


!function($) {
    "use strict";

    var ChartJs = function() {};

    ChartJs.prototype.respChart = function(selector,type,data, options) {
        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // enable resizing matter
        $(window).resize( generateChart );

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );
            switch(type){
                 case 'Radar':
                    new Chart(ctx, {type: 'radar', data: data, options: options});
                    break;
                
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    },
    //init
    ChartJs.prototype.init = function() {
        //creating lineChart
         //radar chart
        var radarChart = {
            labels: ["Politici", "Cadrul de organizare a securității", "Securitatea resurselor umane", "Managementul resurselor", "Controlul accesului", 
            "Controlul utilizării instrumentelor criptografice", "Securitatea fizică și de mediu de lucru","Securitatea de operare", "  Securitatea comunicațiilor", 
            "Achiziția, dezvoltarea și mentenanța sistemelor", "Relația cu furnizorii", "Managementul incidentelor de securitate a informației",
             "Aspecte de securitate a informației a managementului continuității afacerii", "Conformitate"],
            datasets: [
                {
                    label: "Domenii",
                    fill:true,
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data:[3.00,1.70,2.60,1.50,2.20,1.00,2.70,2.10,1.90,1.50,1.60,1.40,1.20,1.50]
                }                
            ]
        };
        this.respChart($("#radar"),'Radar',radarChart);

      
    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);

