<template>
<div class="slider">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "swiperitem",

  }

</script>

<style scoped>
.slider{
  flex-shrink: 0;
  width: 100%;
  position: absolute;
  left: 0;
  top:0;
  opacity: 0;
  transition-duration:  0.8s;
}
.slider img{
  width: 100%;
}
</style>