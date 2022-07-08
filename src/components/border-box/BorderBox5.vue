<template>
  <div class="border-box5" :style="cssVars">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BorderBox5',
  props: {
    width: {
      type: Number,
      default: 144,
    },
    height: {
      type: Number,
      default: 80,
    },
    borderColorBg: {
      type: String,
      default: 'rgba(254, 97, 90, .2)'
    },
    borderColor: {
      type: String,
      default: 'rgba(254, 97, 90, .5)'
    }
  },
  computed: {
    cssVars() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        '--border-color-bg': this.borderColorBg,
        '--border-color': this.borderColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.border-box5 {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--border-color-bg);
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    height: 1px;
    background-color: var(--border-color);
  }
  &::before {
    top: -1px;
    width: 33.33%;
  }
  &::after {
    bottom: -1px;
    width: 66.66%;
  }
}
</style>
