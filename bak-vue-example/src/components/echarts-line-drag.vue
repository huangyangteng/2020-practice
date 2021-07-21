<template>
    <section>
        <section id="chart" style="height:500px" ref="chart"></section>
        <button @click="reverse">变速</button>
        <button @click="setMyChart">设置图表</button>
        <video
            @timeupdate="onTimeUpdate"
            ref="v"
            controls
            style="width:300px"
            :src="src"
        ></video>
    </section>
</template>

<script>
import * as echarts from 'echarts/core'
import { getOption } from './chart-option'
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DataZoomComponent,
    GraphicComponent
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DataZoomComponent,
    GraphicComponent,
    LineChart,
    CanvasRenderer
])

export default {
    name: 'echarts-line-drag',
    data() {
        return {
            src: require('../media/a.mp4'),
            rule: [
                { from: 0, to: 5, speed: 8 },
                { from: 5, to: 8, speed: 0.5 }
            ]
        }
    },
    computed: {
        video() {
            return this.$refs.v
        },
        chartDom() {
            return this.$refs.chart
        }
    },
    methods: {
        reverse() {
            this.video.playbackRate = -1.0
        },
        onTimeUpdate() {
            let cur = this.video.currentTime
            let item = this.rule.find((item) => {
                return item.from <= cur && cur <= item.to
            })
            if (item) {
                if (this.video.playbackRate == item.speed) return
                this.video.playbackRate = item.speed
            } else {
                if (this.video.playbackRate == 1) return
                this.video.playbackRate = 1
            }
        },
        setMyChart() {
            const chartDom = document.getElementById('chart')
            const myChart = echarts.init(chartDom)
            const symbolSize = 20
            const data = [
                [0, 0],
                [5, 0],
                [10, 0],
                [15, 0],
                [20, 0]
            ]
            const option = getOption(data, symbolSize)
            myChart.setOption(option)
            function setDrag() {
                const dragsCicle = data.map(function(item, dataIndex) {
                    return {
                        type: 'circle',
                        position: myChart.convertToPixel('grid', item),
                        shape: {
                            cx: 0,
                            cy: 0,
                            r: symbolSize / 2
                        },
                        invisible: false,
                        draggable: true,
                        bouding: 'raw',
                        ondrag: function(dx, dy) {
                            onPointDragging(dataIndex, [this.x, this.y])
                        },
                        ondragend() {
                            console.log(data)
                            setDrag()
                        },
                        z: 100
                    }
                })
                myChart.setOption({
                    graphic: [
                        ...dragsCicle,
                        {
                            type: 'line',
                            id: 'line',
                             bouding: 'all',
                            position: myChart.convertToPixel('grid', [0,0]),
                            // right: 0,
                            draggable: true,
                            // top: 0,
                            // origin: [75, 75],
                            shape: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 100
                            },
                            style: {
                                fill: '#fff',
                                stroke: 'red'
                            },
                            z:100
                        }
                    ]
                })
            }
            setTimeout(function() {
                setDrag()
            }, 0)
            function onPointDragging(dataIndex, pos) {
                // 第一个点和最后一个点，只有y轴可以动
                let [x, y] = myChart.convertFromPixel('grid', pos)
                if (y < -4) {
                    y = -4
                }
                if (y > 4) {
                    y = 4
                }
                if (x < 0) {
                    x = 0
                }
                if (dataIndex == 0 || dataIndex == data.length - 1) {
                    data[dataIndex][1] = y
                } else {
                    data[dataIndex] = [x, y]
                }
                // Update data
                myChart.setOption({
                    series: [
                        {
                            id: 'a',
                            data: data
                        }
                    ]
                })
            }
            function updatePosition() {
                myChart.setOption({
                    graphic: data.map(function(item, dataIndex) {
                        return {
                            position: myChart.convertToPixel('grid', item)
                        }
                    })
                })
            }

            function showTooltip(dataIndex) {
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: dataIndex
                })
            }

            function hideTooltip(dataIndex) {
                myChart.dispatchAction({
                    type: 'hideTip'
                })
            }
        }
    },
    mounted() {
        this.setMyChart()
    }
}
</script>

<style></style>
