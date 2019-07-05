<template>
    <header class="vipHeader">
        <div class="header" :class="{Activer:isScrollTop}" >
            <span class="tit">{{title}}</span>
        </div> 
    </header>
</template>

<script>
export default {
    name:"VipHeader",
   
    props:{
        title:{
            type : String,
            default : '会员'
        },
        isScrollTop:{
            type:Boolean,
            default : false
        }
     
    },
    data() {
        return {
          scrollTop:''
        }
    },
      
    mounted() {
        // var toolbar=document.getElementsByClassName("vipHeader")[0];

        //  document.addEventListener('scroll',()=>{
        // this.scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        // console.log(this.scrollTop);
        // if (this.offsetTop>130) {
        //     toolbar.style.background="#ffffff"
        // }else{
        //     toolbar.setAttribute("style","background:linear-gradient(to right, rgba(248,243,236,1), rgba(204, 157, 126, 0.5))");
        // }
        // },true);
    }
    }  
</script>

<style scoped>

.vipHeader{
     height: 1.3rem;
     position: relative;
     z-index: 999999;
}
.header{
        position: fixed;
        top: 0;
        width: 100%;
        background: linear-gradient(to right, rgba(248,243,236,1), rgba(204, 157, 126, 0.5));
        /* background: #ffffff; */
}
.tit{
    font-size: 0.4rem;
    color: #333333;
    /* font-weight: 600; */
    height: 1.3rem;
    display: block;
    line-height: 1.3rem;
    /* text-align: center; */
    display: flex;
    justify-content: center;
}
.vipHeader{
    position:sticky; 
    top: 0;  
}
.Activer{
    background: white;
}
</style>
