<template>
  <div class="number-scroll">
    <div class="transform-box" :style="styleVars">
      <span>0</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberScroll',
  props: {
    value: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 56
    },
    during: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      top: 0
    }
  },
  computed: {
    styleVars() {
      return {
        top: this.top,
        '--during': this.during + 's'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.top = -this.value * this.height + 'px'
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
.number-scroll {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  .transform-box {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: top var(--during);
  }
}
</style>
