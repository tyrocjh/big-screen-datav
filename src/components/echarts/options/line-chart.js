export default {
  grid: {
    top: 35,
    right: 30,
    bottom: 20,
    left: 25
  },
  textStyle: {
    fontSize: 8,
    color: 'rgba(255, 255, 255, .7)'
  },
  color: ['#fe615a', '#fedb58'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        type: [5, 5]
      }
    },
    textStyle: {
      color: 'rgba(255, 255, 255, .7)'
    },
    borderColor: 'rgba(254, 97, 90, 0.7)',
    backgroundColor: 'rgba(0, 0, 0, .6)',
    extraCssText: 'border-radius: 8px;',
    formatter: params => {
      let result = params[0].axisValueLabel + '<br />'
      params.map(param => {
        result += param.marker + param.seriesName + '：' + param.value + '<br />'
      })
      return result
    }
  },
  legend: {
    icon: 'rect',
    top: 0,
    right: 12,
    itemWidth: 8,
    itemHeight: 2,
    textStyle: {
      fontSize: 8,
      color: 'rgba(255, 255, 255, .7)'
    }
  },
  xAxis: {
    boundaryGap: false,
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      fontSize: 8,
      color: 'rgba(255, 255, 255, .7)'
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(254, 97, 90, .4)'
      }
    }
  },
  yAxis: [{
    type: 'value',
    axisTick: {
      show: true
    },
    axisLabel: {
      fontSize: 8,
      color: 'rgba(255, 255, 255, .7)'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(254, 97, 90, .4)'
      }
    },
    splitLine: {
      show: false
    },
    nameGap: 8
  }, {
    type: 'value',
    axisTick: {
      show: true
    },
    axisLabel: {
      fontSize: 8,
      color: 'rgba(255, 255, 255, .7)'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(254, 97, 90, .4)'
      }
    },
    splitLine: {
      show: false
    },
    nameGap: 8
  }]
}
