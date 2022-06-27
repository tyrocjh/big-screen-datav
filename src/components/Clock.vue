<template>
  <div class="clock">
    <span>{{ year }}</span>年
    <span>{{ month }}</span>月
    <span>{{ day }}</span>日
    <span class="week">星期</span><span>{{ weekDay }}</span>
    <span class="time">{{ formatTime }}</span>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Clock',
  data() {
    return {
      currentTime: null,
      clockInterval: null,
    }
  },
  computed: {
    formatDate() {
      return dayjs(this.currentTime).format('YYYY-M-D')
    },
    formatTime() {
      return dayjs(this.currentTime).format('HH : mm')
    },
    weekDay() {
      return dayjs(this.currentTime).locale('zh-cn').format('dd')
    },
    year() {
      return this.formatDate.split('-')[0]
    },
    month() {
      return this.formatDate.split('-')[1]
    },
    day() {
      return this.formatDate.split('-')[2]
    },
  },
  created() {
    this.setClockInterval()
  },
  beforeDestroy() {
    clearInterval(this.clockInterval)
    this.clockInterval = null
  },
  methods: {
    setClockInterval() {
      this.currentTime = new Date()
      this.clockInterval = setInterval(() => {
        this.currentTime = new Date()
      }, 1000);
    },
  },
}
</script>

<style lang="scss" scoped>
.clock {
  font-size: 18px;
  span {
    padding: 0 5px;
    font-family: UnidreamLED;
    color: #fe615a;
    &.week {
      padding-left: 15px;
      color: #fff;
    }
    &.time {
      margin-left: 15px;
    }
  }
}
</style>
