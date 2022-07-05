<template>
  <div id="app">
    <header>
      <h1>数据大屏</h1>
      <div class="clock-container">
        <clock />
      </div>
    </header>
    <div class="container">
      <section class="container-left">
        <card1 class="mb20" title="当日会员纳新" :items="curMember">
          <line-chart class="chart-container" :options="curMemberOptions" />
        </card1>
        <card1 class="mb20" title="移动端会员" :items="mobileMember">
          <line-chart class="chart-container" :options="mobileMemberOptions" />
        </card1>
        <card1 title="用户服务" :items="memberService">
          <line-chart class="chart-container" :options="memberServiceOptions" />
        </card1>
      </section>

      <section class="container-mid">
        <div class="mid-box-top">
          <member-count />
        </div>

        <div class="mid-box-mid">
          <h3>实时流量</h3>
        </div>

        <div class="mid-box-bottom">
          <div class="box">
            <h3>会员拉新榜</h3>
            <rank :data="memberRank" />
          </div>
          <div class="box">
            <h3>实时流量榜</h3>
            <rank :data="flowRank" />
          </div>
        </div>
      </section>

      <section class="container-right">
        <card1 class="mb20" title="实时流量">111</card1>
        <card1 class="mb20" title="官渠实时订单" :items="officalOrder">222</card1>
        <card1 title="OTA实时订单" :items="otaOrder">333</card1>
      </section>
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts'
import LineChart from '@/components/echarts/LineChart'
import Card1 from '@/components/business/Card1'
import Rank from '@/components/business/Rank'
import Clock from '@/components/Clock'
import MemberCount from '@/components/MemberCount'

export default {
  name: 'App',
  components: {
    LineChart,
    Card1,
    Rank,
    MemberCount,
    Clock
  },
  data() {
    return {
      memberRank: [],
      flowRank: [],
      curMember: [
        { name: '会员纳新总数', count: null, width: 96 },
        { name: '美团纳新数', count: null, width: 96 },
        { name: '昨日线下会员纳新数', count: null, width: 108 },
      ],
      curMemberList: [],
      curMemberOptions: {},
      mobileMember: [
        { name: '移动端新增用户数', count: null, width: 120 },
        { name: '移动端活跃用户数', count: null, width: 120 },
      ],
      mobileMemberList: [],
      mobileMemberOptions: {},
      memberService: [
        { name: '话务量', count: null, width: 96 },
        { name: '话务接通率', count: null, width: 96 },
        { name: '工单总量', count: null, width: 108 },
      ],
      memberServiceList: [],
      memberServiceOptions: {},
      officalOrder: [{ name: '官渠订单量', count: null, width: 120 }],
      otaOrder: [{ name: 'OTA订单量', count: null, width: 120 }]
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      setTimeout(() => {
        this.getCurMember()
        this.getMobileMember()
        this.getUserService()
        this.getOfficalOrder()
        this.getOtaOrder()
        this.getMemberRank()
        this.getFlowRank()
      }, 200)
    },
    getCurMember() {
      this.curMember = [
        { name: '会员纳新总数', count: 11, width: 96 },
        { name: '美团纳新数', count: 5, width: 96 },
        { name: '昨日线下会员纳新数', count: 7635, width: 108 }
      ]
      this.curMemberList = [
        { time: '09:00', memberCount: 12, mtCount: 56 },
        { time: '10:00', memberCount: 35, mtCount: 35 },
        { time: '11:00', memberCount: 56, mtCount: 12 }
      ]

      let xAxisData = [], series1 = [], series2 = []
      this.curMemberList.map(item => {
        xAxisData.push(item.time)
        series1.push(item.memberCount)
        series2.push(item.mtCount)
      })

      this.curMemberOptions = {
        legend: {
          data: ['会员纳新', '美团纳新']
        },
        xAxis: {
          data: xAxisData
        },
        yAxis: [{
          name: '单位/人'
        }],
        series: [
          {
            name: '会员纳新',
            type: 'line',
            data: series1
          },
          {
            name: '美团纳新',
            type: 'line',
            data: series2
          }
        ]
      }
    },
    getMobileMember() {
      this.mobileMember = [
        { name: '移动端新增用户数', count: 185, width: 150 },
        { name: '移动端活跃用户数', count: 96, width: 150 },
      ]
      this.mobileMemberList = [
        { time: '09:00', newCount: 12, activeCount: 33 },
        { time: '10:00', newCount: 55, activeCount: 14 },
        { time: '11:00', newCount: 30, activeCount: 50 }
      ]

      let xAxisData = [], series1 = [], series2 = []
      this.mobileMemberList.map(item => {
        xAxisData.push(item.time)
        series1.push(item.newCount)
        series2.push(item.activeCount)
      })

      this.mobileMemberOptions = {
        legend: {
          data: ['移动端新增用户', '移动端活跃用户']
        },
        xAxis: {
          data: xAxisData
        },
        yAxis: [{
          name: '单位/人'
        }],
        series: [
          {
            name: '移动端新增用户',
            type: 'line',
            data: series1
          },
          {
            name: '移动端活跃用户',
            type: 'line',
            data: series2
          }
        ]
      }
    },
    getUserService() {
      this.memberService = [
        { name: '话务量', count: 1247, width: 96 },
        { name: '话务接通率', count: '94.84%', width: 96 },
        { name: '工单总量', count: 126, width: 108 },
      ]
      this.memberServiceList = [
        { ymdHour: '2021-11-15 00', erlCnt: 35, callCompletingRate: 1 },
        { ymdHour: '2021-11-15 01', erlCnt: 27, callCompletingRate: 1 },
        { ymdHour: '2021-11-15 02', erlCnt: 19, callCompletingRate: 0.9167 },
        { ymdHour: '2021-11-15 03', erlCnt: 15, callCompletingRate: 0.7778 },
        { ymdHour: '2021-11-15 04', erlCnt: 12, callCompletingRate: 0.8889 },
        { ymdHour: '2021-11-15 05', erlCnt: 6, callCompletingRate: 0.6667 },
        { ymdHour: '2021-11-15 06', erlCnt: 7, callCompletingRate: 1 },
        { ymdHour: '2021-11-15 07', erlCnt: 15, callCompletingRate: 1 },
        { ymdHour: '2021-11-15 08', erlCnt: 39, callCompletingRate: 0.8485 },
        { ymdHour: '2021-11-15 09', erlCnt: 50, callCompletingRate: 0.9722 },
        { ymdHour: '2021-11-15 10', erlCnt: 56, callCompletingRate: 0.9318 },
        { ymdHour: '2021-11-15 11', erlCnt: 55, callCompletingRate: 1 },
        { ymdHour: '2021-11-15 12', erlCnt: 63, callCompletingRate: 1 },
        { ymdHour: '2021-11-15 13', erlCnt: 75, callCompletingRate: 0.98 },
        { ymdHour: '2021-11-15 14', erlCnt: 80, callCompletingRate: 0.8689 },
        { ymdHour: '2021-11-15 15', erlCnt: 55, callCompletingRate: 0.9167 },
        { ymdHour: '2021-11-15 16', erlCnt: 74, callCompletingRate: 0.9483 },
        { ymdHour: '2021-11-15 17', erlCnt: 69, callCompletingRate: 0.9623 },
        { ymdHour: '2021-11-15 18', erlCnt: 88, callCompletingRate: 1 },
        { ymdHour: '2021-11-15 19', erlCnt: 82, callCompletingRate: 0.9508 },
        { ymdHour: '2021-11-15 20', erlCnt: 85, callCompletingRate: 0.9615 },
        { ymdHour: '2021-11-15 21', erlCnt: 103, callCompletingRate: 0.9605 },
        { ymdHour: '2021-11-15 22', erlCnt: 88, callCompletingRate: 0.9077 },
        { ymdHour: '2021-11-15 23', erlCnt: 49, callCompletingRate: 1 }
      ]

      let xAxisData = [], series1 = [], series2 = []
      this.memberServiceList.map(item => {
        xAxisData.push(item.ymdHour.split(' ')[1] + ':00')
        series1.push(item.erlCnt)
        series2.push((item.callCompletingRate * 100).toFixed(2))
      })

      this.memberServiceOptions = {
        tooltip: {
          formatter: params => {
            let result = params[0].axisValueLabel + '<br />'
            params.map((param, idx) => {
              result += param.marker + param.seriesName + '：' + (idx === 1 ? (param.value + '%') : param.value) + '<br />'
            })
            return result
          }
        },
        legend: {
          data: ['话务量', '话务接通率']
        },
        xAxis: {
          data: xAxisData
        },
        yAxis: [{
          name: '话务量'
        }, {
          name: '接通率',
          axisLabel: {
            formatter: '{value}%'
          },
          min: 0,
          max: 100
        }],
        series: [
          {
            name: '话务量',
            type: 'line',
            data: series1
          },
          {
            name: '话务接通率',
            type: 'line',
            yAxisIndex: 1,
            data: series2
          }
        ]
      }
    },
    getOfficalOrder() {
      this.officalOrder = [{ name: '官渠订单量', count: 3, width: 120 }]
    },
    getOtaOrder() {
      this.otaOrder = [{ name: 'OTA订单量', count: 5, width: 120 }]
    },
    getMemberRank() {
      let res = {
        inRegTop5: [
          { largeareaname: '皮城大区', num: 111 },
          { largeareaname: '艾欧大区', num: 22 },
          { largeareaname: '黑玫瑰大区', num: 32 },
          { largeareaname: '祖安大区', num: 41 },
          { largeareaname: '皮尔沃特大区', num: 71 }
        ],
        inRegLast5: [
          { largeareaname: '诺克大区', num: 1 },
          { largeareaname: '艾欧尼亚大区', num: 4 },
          { largeareaname: '皮城大区', num: 6 },
          { largeareaname: '泰坦特区', num: 4 },
          { largeareaname: '祖安大区', num: 2 }
        ]
      }

      res.inRegTop5.sort((a, b) => {
        return b.num - a.num
      })
      res.inRegLast5.sort((a, b) => {
        return a.num - b.num
      })

      let regTop5 = [], regLast5 = []
      res.inRegTop5.map(item => {
        regTop5.push({
          name: item.largeareaname,
          value: item.num
        })
      })
      res.inRegLast5.map(item => {
        regLast5.push({
          name: item.largeareaname,
          value: item.num
        })
      })

      let rankData = []
      rankData.push({
        titleList: ['TOP5 排名', '区域', '拉新数'],
        dataList: regTop5
      })
      rankData.push({
        titleList: ['LAST5 排名', '区域', '拉新数'],
        dataList: regLast5
      })

      this.memberRank = rankData
    },
    getFlowRank() {
      let res = {
        inRegTop5: [
          { largeareaname: '苏皖大区', num: 0.8918918918918919 },
          { largeareaname: '华北大区', num: 0.7653061224489796 },
          { largeareaname: '直属特区', num: 0.7241379310344828 },
          { largeareaname: '华北大区', num: 0.717948717948718 },
          { largeareaname: '广西大区', num: 0.6086956521739131 }
        ],
        inRegLast5: [
          { largeareaname: '西南大区', num: 0.4523809523809524 },
          { largeareaname: '湖北大区', num: 0.5555555555555556 },
          { largeareaname: '广西大区', num: 0.6086956521739131 },
          { largeareaname: '华北大区', num: 0.717948717948718 },
          { largeareaname: '直属特区', num: 0.7241379310344828 }
        ]
      }

      res.inRegTop5.sort((a, b) => {
        return b.num - a.num
      })
      res.inRegLast5.sort((a, b) => {
        return a.num - b.num
      })

      let regTop5 = [], regLast5 = []
      res.inRegTop5.map(item => {
        regTop5.push({
          name: item.largeareaname,
          value: (item.num * 100).toFixed(2) + '%'
        })
      })
      res.inRegLast5.map(item => {
        regLast5.push({
          name: item.largeareaname,
          value: (item.num * 100).toFixed(2) + '%'
        })
      })

      let rankData = []
      rankData.push({
        titleList: ['TOP5 排名', '区域', '实时流量'],
        dataList: regTop5
      })
      rankData.push({
        titleList: ['LAST5 排名', '区域', '实时流量'],
        dataList: regLast5
      })

      this.flowRank = rankData
    }
  }
}
</script>

<style lang="scss" scoped>
.mb20 {
  margin-bottom: 20px;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  background: url('./assets/images/background.svg') no-repeat;
  header {
    position: relative;
    h1 {
      text-align: center;
      margin: 0;
      line-height: 75px;
      font-size: 38px;
      font-weight: normal;
    }
    .clock-container {
      position: absolute;
      right: 48px;
      top: 30px;
    }
  }
  .container {
    overflow: hidden;
    display: flex;
    padding: 34px 48px 30px;
    .chart-container {
      margin-top: 20px;
      width: 100%;
      height: 178px;
    }
    .container-left,
    .container-right {
      width: 500px;
    }
    .container-mid {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 35px;
      h3 {
        margin: 0 0 20px 0;
        font-size: 24px;
        font-weight: 600;
        opacity: 0.72;
      }
      .mid-box-top {
        height: 210px;
      }
      .mid-box-mid {
        position: relative;
        height: 458px;
      }
      .mid-box-bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
