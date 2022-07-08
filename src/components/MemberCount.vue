<template>
  <div class="member-count-box">
    <div class="member-count">
      <h3>会员总数</h3>
      <div class="count-box">
        <div class="count-item"><number-scroll :value="+numberArr[0]" /></div>
        <div class="count-item"><number-scroll :value="+numberArr[1]" /></div>
        <div class="count-item"><number-scroll :value="+numberArr[2]" /></div>
        <div class="comma">,</div>
        <div class="count-item"><number-scroll :value="+numberArr[3]" /></div>
        <div class="count-item"><number-scroll :value="+numberArr[4]" /></div>
        <div class="count-item"><number-scroll :value="+numberArr[5]" /></div>
        <div class="comma">,</div>
        <div class="count-item"><number-scroll :value="+numberArr[6]" /></div>
        <div class="count-item"><number-scroll :value="+numberArr[7]" /></div>
        <div class="count-item"><number-scroll :value="+numberArr[8]" /></div>
      </div>
    </div>
    <div class="other-count">
      <border-box3 class="count">
        <p>APP用户数</p>
      </border-box3>
      <border-box3 class="count">
        <p>微信关注数</p>
      </border-box3>
      <border-box3 class="count">
        <p>小程序用户数</p>
      </border-box3>
      <border-box3 class="count">
        <p>{{ member.appCount }}</p>
      </border-box3>
      <border-box3 class="count">
        <p>{{ member.wechatCount }}</p>
      </border-box3>
      <border-box3 class="count">
        <p>{{ member.miniCount }}</p>
      </border-box3>
    </div>
  </div>
</template>

<script>
import NumberScroll from '@/components/NumberScroll'
import BorderBox3 from '@/components/border-box/BorderBox3'

export default {
  name: 'MemberCount',
  components: {
    NumberScroll,
    BorderBox3
  },
  props: {
    member: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    numberArr() {
      return (this.member.total + '').split('')
    }
  }
}
</script>

<style lang="scss" scoped>
.member-count-box {
  .member-count {
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;
    padding: 10px 40px 0;
    width: 452px;
    height: 124px;
    background: linear-gradient(90deg, #fe615a, #eb285e);
    h3 {
      margin: 0;
      font-size: 25px;
      font-weight: 600;
    }
    .count-box {
      display: flex;
      margin-top: 10px;
      font-family: DINCondensedBold;
      .count-item {
        text-align: center;
        margin-right: 4px;
        width: 34px;
        height: 56px;
        line-height: 56px;
        font-size: 46px;
        background: url('../assets/images/num-bg.svg');
      }
      .comma {
        display: flex;
        flex: 1;
        align-items: flex-end;
        font-size: 40px;
      }
    }
  }
  .other-count {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px auto 0;
    width: 452px;
    .count {
      margin-top: 5px;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 100%;
        font-size: 16px;
        font-weight: 400;
      }
      &:nth-child(n + 4) p {
        font-size: 24px;
        font-weight: 600;
        color: #fedb58;
      }
    }
  }
}
</style>
