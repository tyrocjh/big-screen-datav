<template>
  <border-box2 :width="370" :height="210">
    <div class="rank">
      <swiper v-if="data.length" :options="swiperOption">
        <swiper-slide v-for="(item, idx) in data" :key="idx">
          <table>
            <thead>
              <th v-for="(title, tIdx) in item.titleList" :key="tIdx">{{ title }}</th>
            </thead>
            <tbody>
              <tr v-for="(data, dIdx) in item.dataList" :key="dIdx">
                <td>{{ dIdx + 1 }}</td>
                <td>{{ data.name || '--' }}</td>
                <td>{{ data.value }}</td>
              </tr>
            </tbody>
          </table>
        </swiper-slide>
      </swiper>
    </div>
  </border-box2>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import BorderBox2 from '@/components/border-box/BorderBox2'

export default {
  name: 'Rank',
  components: {
    Swiper,
    SwiperSlide,
    BorderBox2
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rank {
  overflow: hidden;
  table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    thead, tbody td {
      font-size: 14px;
      color: #fff;
      th {
        font-weight: normal;
      }
    }
    thead {
      height: 30px;
    }
    tbody {
      tr:nth-child(odd) {
        background-color: rgba(254,97,90,.07);
      }
      tr:nth-child(1) td {
        color: #fedb58;
      }
      tr:nth-child(2) td {
        color: #cfb096;
      }
      tr:nth-child(3) td {
        color: #eca157;
      }
      td {
        padding: 0;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
