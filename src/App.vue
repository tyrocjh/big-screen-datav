<template>
  <div id="app">
    <full-screen-container>
      <div class="big-screen">
        <header>
          <h1>数据大屏</h1>
          <div class="clock-container">
            <clock />
          </div>
        </header>
        <div class="container">
          <section class="container-left">
            <card class="mb20" title="当日会员纳新" :items="curMember">
              <line-chart class="chart-container" :options="curMemberOptions" />
            </card>
            <card class="mb20" title="移动端会员" :items="mobileMember">
              <line-chart class="chart-container" :options="mobileMemberOptions" />
            </card>
            <card title="用户服务" :items="memberService">
              <line-chart class="chart-container" :options="memberServiceOptions" />
            </card>
          </section>

          <section class="container-mid">
            <div class="mid-box-top">
              <member-count :member="member" />
            </div>

            <div class="mid-box-mid">
              <h3>实时流量</h3>
              <map-chart class="map-chart-container" :options="mapOptions" />
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
            <card class="mb20" title="实时流量">
              <traffic :list="trafficList" />
            </card>
            <card class="mb20" title="官渠实时订单" :items="officalOrder">
              <line-chart class="chart-container" :options="officalOrderOptions" style="margin-top: 55px;" />
            </card>
            <card title="OTA实时订单" :items="otaOrder">
              <line-chart class="chart-container" :options="otaOrderOptions" style="margin-top: 55px;" />
            </card>
          </section>
        </div>
      </div>
    </full-screen-container>
  </div>
</template>

<script>
import FullScreenContainer from '@/components/FullScreenContainer'
import Clock from '@/components/Clock'
import MapChart from '@/components/echarts/MapChart'
import LineChart from '@/components/echarts/LineChart'
import Card from '@/components/business/Card'
import Rank from '@/components/business/Rank'
import Traffic from '@/components/business/Traffic'
import MemberCount from '@/components/business/MemberCount'

export default {
  name: 'App',
  components: {
    FullScreenContainer,
    Clock,
    MapChart,
    LineChart,
    Card,
    Rank,
    Traffic,
    MemberCount
  },
  data() {
    return {
      member: {},
      mapOptions: {},
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
      trafficList: [],
      officalOrder: [{ name: '官渠订单量', count: null, width: 120 }],
      officalOrderList: [],
      officalOrderOptions: {},
      otaOrder: [{ name: 'OTA订单量', count: null, width: 120 }],
      otaOrderList: [],
      otaOrderOptions: {}
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      setTimeout(() => {
        this.getMember()
        this.getCurFlow()
        this.getCurMember()
        this.getMobileMember()
        this.getUserService()
        this.getOfficalOrder()
        this.getRrafficList()
        this.getOtaOrder()
        this.getMemberRank()
        this.getFlowRank()
      }, 200)
    },
    getMember() {
      this.member = {
        total: 123456789,
        appCount: 987,
        wechatCount: 654,
        miniCount: 321
      }
    },
    getCurFlow() {
      this.mapOptions = {
        tooltip: {
          formatter: param => {
            let value = '--'
            if (param.value) {
              value = (param.value * 100).toFixed(2) + '%'
            }
            return param.name + '<br />实时流量 ' + value
          }
        },
        visualMap: {
          pieces: [
            { min: 0, max: 0.2, label: '0% ~ 20%' },
            { min: 0.2, max: 0.4, label: '20% ~ 40%' },
            { min: 0.4, max: 0.6, label: '40% ~ 60%' },
            { min: 0.6, max: 0.8, label: '60% ~ 80%' },
            { min: 0.8, max: 1, label: '80% ~ 100%' }
          ]
        },
        series: [{
          data: [
            { name: '安徽省', value: 0.8918918918918919 },
            { name: '湖北省', value: 0.5555555555555556 },
            { name: '贵州省', value: 0.4523809523809524 },
            { name: '广西壮族自治区', value: 0.6086956521739131 },
            { name: '广东省', value: 0.7241379310344828 },
            { name: '吉林省', value: 0.717948717948718 },
            { name: '北京市', value: 0.7653061224489796 },
          ]
        }]
      }
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
          { name: '会员纳新', type: 'line', data: series1 },
          { name: '美团纳新', type: 'line', data: series2 }
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
          { name: '移动端新增用户', type: 'line', data: series1 },
          { name: '移动端活跃用户', type: 'line', data: series2 }
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
          axisLabel: { formatter: '{value}%' },
          min: 0,
          max: 100
        }],
        series: [
          { name: '话务量', type: 'line', data: series1 },
          { name: '话务接通率', type: 'line', yAxisIndex: 1, data: series2 }
        ]
      }
    },
    getOfficalOrder() {
      this.officalOrder = [{ name: '官渠订单量', count: 3, width: 120 }]
      this.officalOrderList = [
        { time: '09:00', count1: 100, count2: 100, count3: 100, count4: 100 },
        { time: '10:00', count1: 100, count2: 75, count3: 50, count4: 0 },
        { time: '11:00', count1: 0, count2: 50, count3: 75, count4: 100 },
        { time: '12:00', count1: 0, count2: 0, count3: 0, count4: 0 }
      ]

      let xAxisData = [], series1 = [], series2 = [], series3 = [], series4 = []
      this.officalOrderList.map(item => {
        xAxisData.push(item.time)
        series1.push(item.count1)
        series2.push(item.count2)
        series3.push(item.count3)
        series4.push(item.count4)
      })

      this.officalOrderOptions = {
        legend: {
          data: ['官渠订单量', 'APP订单量', '微信订单量', '小程序订单量']
        },
        xAxis: {
          data: xAxisData
        },
        series: [
          { name: '官渠订单量', type: 'line', data: series1 },
          { name: 'APP订单量', type: 'line', data: series2 },
          { name: '微信订单量', type: 'line', data: series3 },
          { name: '小程序订单量', type: 'line', data: series4 }
        ]
      }
    },
    getRrafficList() {
      this.trafficList = [
        { title: '在营门店数', count: 356 },
        { title: '在售间夜', count: 1685 },
        { title: '已售间夜', count: 999 },
        { title: '当前上线官网数', count: 523 },
        { title: '在售间夜', count: 8512 },
        { title: '已售间夜', count: 5547 }
      ]
    },
    getOtaOrder() {
      this.otaOrder = [{ name: 'OTA订单量', count: 5, width: 120 }]

      this.otaOrderList = [
        { time: '09:00', count1: 88, count2: 66, count3: 44, count4: 22 },
        { time: '10:00', count1: 66, count2: 44, count3: 22, count4: 0 },
        { time: '11:00', count1: 0, count2: 22, count3: 44, count4: 66 },
        { time: '12:00', count1: 22, count2: 44, count3: 66, count4: 88 }
      ]

      let xAxisData = [], series1 = [], series2 = [], series3 = [], series4 = []
      this.otaOrderList.map(item => {
        xAxisData.push(item.time)
        series1.push(item.count1)
        series2.push(item.count2)
        series3.push(item.count3)
        series4.push(item.count4)
      })

      this.otaOrderOptions = {
        legend: {
          data: ['OTA订单量', '携程订单量', '美团订单量', '其他订单量']
        },
        xAxis: {
          data: xAxisData
        },
        series: [
          { name: 'OTA订单量', type: 'line', data: series1 },
          { name: '携程订单量', type: 'line', data: series2 },
          { name: '美团订单量', type: 'line', data: series3 },
          { name: '其他订单量', type: 'line', data: series4 }
        ]
      }
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

.big-screen {
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
    .map-chart-container {
      margin: 0 auto;
      width: 600px;
      height: 430px;
    }
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
        margin: 20px 0;
        height: 430px;
        h3 {
          position: absolute;
        }
      }
      .mid-box-bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
