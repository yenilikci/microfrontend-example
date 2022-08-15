import * as echarts from "echarts";

function init() {
    // Initialize the echarts instance based on the prepared dom
    var myChart = echarts.init(document.getElementById('linechart-dev'));

    // Display the chart using the configuration items and data just specified.
    myChart.setOption({
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150],
                type: 'line'
            }
        ]
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});