<template>
  <div class="mywallet-header">
    <ul>
      <li class="iconfont" @click="returnOut">{{"&#xe607;"}}</li>
      <li class="iconfont">{{"&#xe635;"}}</li>
      <li class="iconfont">{{"&#xe786;"}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
     
    };
  },
  computed: {},
  watch: {},
  methods: {
    returnOut(){
      window.history.back()
    }
  }
};
</script>
<style  scoped>
.mywallet-header {
  width: 100%;
  height: 0.54rem;
  position: sticky;
  left: 0;
  top: .59rem;
  z-index: 2000;
}
.mywallet-header > ul {
  display: flex;
  justify-content: flex-start;
}
.mywallet-header > ul > li {
  font-size: 0.54rem;
  color: black;
}
.mywallet-header > ul > li:nth-child(2){
  margin:0 .4rem 0 5rem;
}
</style>