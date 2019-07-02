<template>

   <div>
      <div class="myaccount-out"  @click="isShowDel">退出当前账号</div>
    <setButtn :isShow="isshow" @isShows="isShows"/>
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
     isShowDel(){
      this.isshow = !this.isshow
    },
    isShows(val){
      this.isshow = val;
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