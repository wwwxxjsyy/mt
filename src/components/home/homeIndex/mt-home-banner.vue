<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(item,index) in wheel" :key="index">
        <img :src="item.wheel_url">
      </div>
      <!-- <div class="swiper-slide" >
        <img src="../../../../static/imgs/banner/banner2.png">
      </div>
      <div class="swiper-slide" >
        <img src="../../../../static/imgs/banner/banner3.png">
      </div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  props: {
    wheel:Array,
  },
  created() {
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      // observer:true,
      autoplay: true,
      delay: 1000,
      //   effect:"fade",//淡入

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 1.6rem;
}
img {
  width: 100%;
  height: 100%;
}
</style>
