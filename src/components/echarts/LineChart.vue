<template>
  <div ref="echartBox" class="echart-box"></div>
</template>

<script>
import * as echarts from 'echarts'
import merge from 'lodash/merge'
import lineChartOptions from './options/line-chart'

export default {
  name: 'LineChart',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      defaultOptions: lineChartOptions,
      chart: null
    }
  },
  watch: {
    options() {
      const newOptions = merge({}, this.defaultOptions, this.options)
      this.echart.setOption(newOptions)
      this.showTip()
    }
  },
  mounted() {
    this.initEchart()
  },
  methods: {
    initEchart() {
      const echartBox = this.$refs.echartBox
      this.echart = echarts.init(echartBox)
    },
    showTip() {
      let curIdx = 0, maxCount = this.options.xAxis.data.length
      setInterval(() => {
        this.echart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: curIdx
        })
        curIdx = (curIdx >= maxCount - 1) ? 0 : curIdx + 1
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.echart-box {
  width: 100%;
  height: 100%;
}
</style>
