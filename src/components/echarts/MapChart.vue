<template>
  <div ref="echartBox" class="echart-box"></div>
</template>

<script>
import merge from 'lodash/merge'
import * as echarts from 'echarts'
import chinaMap from '@/components/echarts/libs/china.js'
import mapChartOptions from './options/map-chart'
echarts.registerMap('china', chinaMap)

export default {
  name: 'MapChart',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      defaultOptions: mapChartOptions,
      chart: null
    }
  },
  watch: {
    options() {
      const newOptions = merge({}, this.defaultOptions, this.options)
      this.echart.setOption(newOptions)
    }
  },
  mounted() {
    this.initEchart()
  },
  methods: {
    initEchart() {
      const echartBox = this.$refs.echartBox
      this.echart = echarts.init(echartBox)
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
