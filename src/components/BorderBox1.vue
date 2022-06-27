<template>
  <div class="border-box1" :style="{ width: width + 'px', height: height + 'px'}">
    <span class="corner corner-1"></span>
    <span class="corner corner-2"></span>
    <span class="corner corner-3"></span>
    <span class="corner corner-4"></span>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'BorderBox1',
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 300,
    },
  },
}
</script>

<style lang="scss" scoped>
.border-box1 {
  position: relative;
  padding: 15px;
  background: rgba(25, 4, 4, .25);
  border: 2px solid rgba(254, 97, 90, .3);
  box-sizing: border-box;
  .corner {
    position: absolute;
    padding: 4px;
    border-style: solid;
    border-color: rgba(254, 97, 90, .44);
    &.corner-1 {
      top: -2px;
      left: -2px;
      border-width: 2px 0 0 2px;
    }
    &.corner-2 {
      top: -2px;
      right: -2px;
      border-width: 2px 2px 0 0;
    }
    &.corner-3 {
      bottom: -2px;
      right: -2px;
      border-width: 0 2px 2px 0;
    }
    &.corner-4 {
      bottom: -2px;
      left: -2px;
      border-width: 0 0 2px 2px;
    }
  }
}
</style>
