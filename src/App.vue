<template>
  <div id="app">
    <header>
      <h1>标题</h1>
      <div class="clock-container">
        <clock />
      </div>
    </header>
    <div class="container">
      <section class="container-left">
        <card1 class="mb20" title="当日会员纳新" :items="curMember">111</card1>
        <card1 class="mb20" title="移动端会员" :items="mobileMember">222</card1>
        <card1 class="mb20" title="用户服务" :items="userService">333</card1>
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
            <border-box2 :width="370" :height="210">3</border-box2>
          </div>
          <div class="box">
            <h3>实时流量榜</h3>
            <border-box2 :width="370" :height="210">4</border-box2>
          </div>
        </div>
      </section>
      <section class="container-right">
        <border-box1 class="mb20">111</border-box1>
        <border-box1 class="mb20">222</border-box1>
        <border-box1>333</border-box1>
      </section>
    </div>
  </div>
</template>

<script>
import Card1 from '@/components/business/Card1'
import BorderBox1 from '@/components/BorderBox1'
import BorderBox2 from '@/components/BorderBox2'
import Clock from '@/components/Clock'
import MemberCount from '@/components/MemberCount'

export default {
  name: 'App',
  components: {
    MemberCount,
    Clock,
    Card1,
    BorderBox1,
    BorderBox2,
  },
  data() {
    return {
      curMember: [
        { name: '会员纳新总数', count: null, width: 96 },
        { name: '美团纳新数', count: null, width: 96 },
        { name: '昨日线下会员纳新数', count: null, width: 108 }
      ],
      mobileMember: [
        { name: '移动端新增用户数', count: null, width: 120 },
        { name: '移动端活跃用户数', count: null, width: 120 }
      ],
      userService: [
        { name: '话务量', count: null, width: 96 },
        { name: '话务接通率', count: null, width: 96 },
        { name: '工单总量', count: null, width: 108 }
      ]
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      setTimeout(() => {
        this.getCurMemberData()
        this.getMobileMember()
        this.getUserService()
      }, 200)
    },
    getCurMemberData() {
      this.curMember = [
        { name: '会员纳新总数', count: 11, width: 96 },
        { name: '美团纳新数', count: 5, width: 96 },
        { name: '昨日线下会员纳新数', count: 7635, width: 108 }
      ]
    },
    getMobileMember() {
      this.mobileMember = [
        { name: '移动端新增用户数', count: 185, width: 150 },
        { name: '移动端活跃用户数', count: 96, width: 150 }
      ]
    },
    getUserService() {
      this.userService = [
        { name: '话务量', count: 1247, width: 96 },
        { name: '话务接通率', count: '94.84%', width: 96 },
        { name: '工单总量', count: 126, width: 108 }
      ]
    }
  }
};
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
        opacity: .72;
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
