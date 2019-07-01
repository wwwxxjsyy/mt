<template>
  <div>
    <div class="title">当前定位</div>
    <div class="des" @click="$emit('click')">
      <i class="iconfont">&#xe627;</i>
      <span>{{address}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"Location",
    components:{
        
    },
    props:{
        address:String
    }
    
}
</script>

<style scoped>
 .iconfont{
     font-size: .3rem;
 }
.title {
  margin: .1rem 0;
  font-size: .2rem;
}
.des i {
  color: #009eef;
}
.des{
    display: flex;
    align-items: center;
}
.des span {
  color: #333;
  font-weight: bold;
  margin-left: .1rem;
  display: inline-block;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>