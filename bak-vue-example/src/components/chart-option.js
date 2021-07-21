
export function   getOption (data,symbolSize=20){
    return  {
        // title: {
        //     text: 'Try Dragging these Points',
        //     left: 'center'
        // },
        tooltip: {
            triggerOn: 'none',
            formatter: function (params) {
                return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
            }
        },
        grid: {//坐标系底板
            top: '8%',
            bottom: '12%',
        },
        xAxis: {//x轴
            min: 0,
            max: 20,
            type: 'value',
            axisLine: {onZero: false}
        },
        yAxis: {//y轴
            min: -4,
            max: 4,
            type: 'value',
            axisLine: {onZero: false}
        },
        series: [
            {
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: data
            }
        ]
    };
}