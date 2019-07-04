<template>
   <div class="test" >
    <ul ref="viewBox">
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <a href>标题</a>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
       <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
       <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>ceshi666</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'recommend',
   data() {
       return {
           scrollTop:''
       }
   },
   methods:{
        showIcon() {
        this.scrollTop = document.documentElement.scrollTop
        console.log(this.scrollTop)
    //   if (
    //     document.documentElement.scrollTop &&
    //     document.documentElement.scrollTop > 200
    //    ) {            
    //        console.log(201)
    //     } else {
    //     alert(100)
    //     }
        }
    },
   mounted(){
    //    window.addEventListener("scroll",(e)=>{
    //        console.log(e)
    document.addEventListener("scroll", this.showIcon);
    //    })   
    }
}


</script>

<style scoped>

.test {
    height:1600px;
}
li{
    width: 100%;
    height: 1rem;
    border:1px solid yellowgreen;
}
</style>