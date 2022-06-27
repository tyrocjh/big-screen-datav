<template>
  <div class="border-box1" :style="{ width: width + 'px', height: height + 'px'}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BorderBox2',
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
}
</style>
