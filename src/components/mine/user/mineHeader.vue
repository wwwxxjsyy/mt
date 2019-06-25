<template>
  <div class="mine-header">
    <router-link to="/MyAccount" class="MineHeaderLogo">
      <img :src="imgUrl" alt>
    </router-link>

    <a href="#" class="MineName">T552225532</a>
    <div class="mine-icon">
      <a href="#" class="iconfont" v-for="item in headerIcon" v-html="item" :key="item"></a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgUrl: "../../../assets/minePic/logo.gif",
      headerIcon: ["&#xe603;", "&#xe62e;"]
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.mine-header {
  width: 100%;
  height: 1.5rem;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  top: 0;
  position: sticky;
}
.MineHeaderLogo {
  display: flex;
  width: 1rem;
  height: 1rem;
  margin-right: 0.3rem;
}
.MineHeaderLogo img {
  width: 100%;
  height: 100%;
}
.MineName {
  font-size: 0.25rem;
  color: #303030;
  font-weight: bold;
}
.mine-icon a {
  display: inline-block;
  font-size: 50px;
}
</style>