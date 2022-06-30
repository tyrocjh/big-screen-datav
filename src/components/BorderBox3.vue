<template>
  <div class="border-box3" :style="cssVars">
    <span class="corner corner-1"></span>
    <span class="corner corner-2"></span>
    <span class="corner corner-3"></span>
    <span class="corner corner-4"></span>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'BorderBox3',
  props: {
    width: {
      type: Number,
      default: 140
    },
    height: {
      type: Number,
      default: 36
    },
    sideHeight: {
      type: Number,
      default: 12
    },
    borderColor: {
      type: String,
      default: 'rgba(254, 97, 90, .3)'
    }
  },
  computed: {
    cssVars() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        '--side-height': this.sideHeight + 'px',
        '--border-color': this.borderColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.border-box3 {
  position: relative;
  border: 1px solid var(--border-color);
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  .corner {
    position: absolute;
    width: 2px;
    height: var(--side-height);
    background-color: var(--border-color);
    &::before {
      content: '';
      position: absolute;
      left: -1px;
      width: 3px;
      height: 3px;
      background-color: var(--border-color);
      border-radius: 50%;
    }
    &.corner-1 {
      left: 0;
      top: 0;
      &::before {
        bottom: 0;
      }
    }
    &.corner-2 {
      top: 0;
      right: 0;
      &::before {
        bottom: 0;
      }
    }
    &.corner-3 {
      right: 0;
      bottom: 0;
      &::before {
        top: 0;
      }
    }
    &.corner-4 {
      left: 0;
      bottom: 0;
      &::before {
        top: 0;
      }
    }
  }
}
</style>
