<template>
  <border-box1>
    <div class="card1">
      <div class="header">
        <border-box4>{{ title }}</border-box4>
        <div class="items" :class="items.length === 1 ? 'single' : ''">
          <template v-if="items.length > 1">
            <div class="item" v-for="(item, idx) in items" :key="idx">
              <border-box3 :width="item.width" :height="27" :side-height="8" :borderColor="rgba[idx]">
                <span class="name">{{ item.name }}</span>
              </border-box3>
              <border-box3 :width="item.width" :height="37" :borderColor="rgba[idx]" style="margin-top: 4px;">
                <span class="count">{{ item.count || '--' }}</span>
              </border-box3>
            </div>
          </template>
          <template v-else-if="items.length === 1">
            <div class="item">
              <border-box3 :width="items[0].width" :height="37" :borderColor="rgba[0]">
                <span class="name">{{ items[0].name }}</span>
              </border-box3>
            </div>
            <div class="item" style="margin-left: 12px;">
              <border-box3 :width="items[0].width" :height="37" :borderColor="rgba[0]">
                <span class="count">{{ items[0].count || '--' }}</span>
              </border-box3>
            </div>
          </template>
        </div>
      </div>

      <slot />
    </div>
  </border-box1>
</template>

<script>
import { colorTransform } from '@/utils'
import BorderBox1 from '@/components/border-box/BorderBox1'
import BorderBox3 from '@/components/border-box/BorderBox3'
import BorderBox4 from '@/components/border-box/BorderBox4'

const BORDER_COLORS = ['#fe615a', '#61b8ab', '#fedb58']

export default {
  name: 'Card1',
  components: {
    BorderBox1,
    BorderBox3,
    BorderBox4
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    rgba() {
      return this.borderColors.map(item => {
        return colorTransform(item, 0.3)
      })
    }
  },
  data() {
    return {
      borderColors: BORDER_COLORS
    }
  }
}
</script>

<style lang="scss" scoped>
.card1 {
  position: relative;
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    .items {
      margin-left: 20px;
      flex: 1;
      display: flex;
      justify-content: space-between;
      &.single {
        justify-content: flex-start;
      }
      .item {
        display: flex;
        flex-direction: column;
        &:nth-child(1) {
          .count {
            color: #fe615a;
          }
        }
        &:nth-child(2) {
          .count {
            color: #61b8ab;
          }
        }
        &:nth-child(3) {
          .count {
            color: #fedb58;
          }
        }
        .name,
        .count {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .name {
          font-size: 12px;
          opacity: 0.7;
        }
        .count {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
