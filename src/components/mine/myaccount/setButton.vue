<template>
<div class="dialog">
      <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
      <div class="dialog-cover back"  v-if="isShow">
        <div class="dialog-content">
          <p>退出后将无法查看订单,重新登录即可查看</p>
          <div class="choice">
            <a href="#" @click="cancel">取消</a>
            <a href="#" @click="determine">确定</a>
          </div>
        </div>
      </div>

  </div>


</template>

<script>

export default {
  props: ["isShow"],
  created () {
    console.log()
  },
  methods: {
    cancel(){
      this.$emit("isShows",false)
    },
    determine(){
      window.location.hash="/Mine"
  },
}
}

</script>
<style  scoped>
.dialog {
    position: relative;
    color: #2e2c2d;

  }
   /* 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩 */
  .dialog-cover {
    background: rgba(0,0,0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 .6rem;
  }
  .dialog-content{
    position: absolute;
    top: 40%;
    left: .67rem;
    height: 3rem;
    background: #fff;
    margin: auto;
    width: 82%;
    border-radius: .05rem;
 }
  .dialog-content p{
    font-size:.38rem;
    color: black;
    margin-top: .4rem;
    padding: 0 .7rem;
    text-align: center;
  }
   .dialog-content .choice{
     display: flex;
    width: 100%;
    height: 1rem;
    margin-top: .6rem;
    border-top: 1px solid #b8b8b8;
    line-height: 1rem;
   }
     .dialog-content .choice a{
       display: block;
       width:50%;
       height:.5rem ;
       font-size: .4rem;
       text-align: center;
       color: #f6d699;
       height: 1rem;
     }
     .dialog-content .choice a:first-child{
       border-right: 1px solid #b8b8b8;
       color:black;
     }

</style>