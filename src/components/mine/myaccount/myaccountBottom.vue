<template>

   <div>
      <div class="myaccount-out" @click="isShow">退出当前账号</div>
    <setButtn :isShow="isshow"/>
   </div>
</template>

<script>
import setButtn from './setButton'
export default {
  components: {
    setButtn
  },
  data() {
    return {
      isshow:false
    };
  },
  computed: {},
  watch: {},
  methods: {
    isShow(){
      this.isshow = true
    }
  }
};
</script>
<style  scoped>
.myaccount-out {
  width: 100%;
  height: 1.1rem;
  color: #ff6c7a;
  font-size: 0.35rem;
  text-align: center;
  line-height: 1.1rem;
  background: #fafafa;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>