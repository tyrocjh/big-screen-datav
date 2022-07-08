<template>
  <div class="traffic">
    <border-box5
      v-for="(item, idx) in list" :key="idx"
      :border-color-bg="boxStyleList[idx].borderColorBg"
      :border-color="boxStyleList[idx].borderColor">
      <img :src="boxStyleList[idx].icon" />
      <div class="item">
        <span class="count" :style="{color: boxStyleList[idx].color}">{{ item.count }}</span>
        <span class="title">{{ item.title }}</span>
      </div>
    </border-box5>
  </div>
</template>

<script>
import BorderBox5 from '@/components/border-box/BorderBox5'

const BOX_STYLE_LIST = [
  { borderColorBg: 'rgba(254,97,90,.2)', borderColor: 'rgba(254,97,90,.5)', color: 'rgba(254,97,90, 1)', icon: require('@/assets/images/icon-chart1.svg') },
  { borderColorBg: 'rgba(236,161,87,.2)', borderColor: 'rgba(236,161,87,.5)', color: 'rgba(236,161,87, 1)', icon: require('@/assets/images/icon-chart5.svg') },
  { borderColorBg: 'rgba(254,219,88,.2)', borderColor: 'rgba(254,219,88,.5)', color: 'rgba(254,219,88, 1)', icon: require('@/assets/images/icon-chart2.svg') },
  { borderColorBg: 'rgba(60,171,244,.2)', borderColor: 'rgba(60,171,244,.5)', color: 'rgba(60,171,244, 1)', icon: require('@/assets/images/icon-chart4.svg') },
  { borderColorBg: 'rgba(107,213,200,.2)', borderColor: 'rgba(107,213,200,.5)', color: 'rgba(107,213,200, 1)', icon: require('@/assets/images/icon-chart3.svg') },
  { borderColorBg: 'rgba(144,87,255,.2)', borderColor: 'rgba(144,87,255,.5)', color: 'rgba(144,87,255, 1)', icon: require('@/assets/images/icon-chart6.svg') }
]

export default {
  name: 'Traffic',
  components: {
    BorderBox5
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      boxStyleList: BOX_STYLE_LIST
    }
  }
}
</script>

<style lang="scss" scoped>
.traffic {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100% - 34px);
  .item {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    .count {
      margin-bottom: 8px;
      font-size: 22px;
      font-weight: 600;
      color: #fe615a;
    }
    .title {
      opacity: .6;
    }
  }
}
</style>
