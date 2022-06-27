<template>
  <div class="border-box4" :style="{ width: width + 'px', height: height + 'px'}">
    <span class="corner corner-1"></span>
    <span class="corner corner-2"></span>
    <span class="corner corner-3"></span>
    <span class="corner corner-4"></span>

    <div class="title">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorderBox4',
  props: {
    width: {
      type: Number,
      default: 124,
    },
    height: {
      type: Number,
      default: 34,
    },
  },
}
</script>

<style lang="scss" scoped>
.border-box4 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 4px 6px;
  .corner {
    position: absolute;
    padding: 5px;
    border-style: solid;
    border-color: rgba(254, 97, 90, .44);
    &.corner-1 {
      top: -2px;
      left: -2px;
      border-width: 1px 0 0 1px;
    }
    &.corner-2 {
      top: -2px;
      right: -2px;
      border-width: 1px 1px 0 0;
    }
    &.corner-3 {
      bottom: -2px;
      right: -2px;
      border-width: 0 1px 1px 0;
    }
    &.corner-4 {
      bottom: -2px;
      left: -2px;
      border-width: 0 0 1px 1px;
    }
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(254, 97, 90, .4);
  }
}
</style>
