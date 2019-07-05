<template>
    <div class="footer">
        <ul>
            <router-link 
                active-class="active" 
                v-for="(item,index) in tabbar" 
                @click="handleTogglePage(index)"
                :to="item.path || '/viplogin'"
                tag="li"
                :key="index"
                exact
                >
                <img :src="$route.path==item.path?item.pic1:item.pic" class="tabbar-pic">
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Tabbar",
    data(){
        return {
            tabbar:[
                {
                   pic:require("../../assets/tabbarPic/bpc_wps.png"),
                   pic1:require("../../assets/tabbarPic/bpd_wps.png"),
                   title:"首页",
                   path:"/home"
                },
                { 
                   pic:require("../../assets/tabbarPic/bph_wps.png"),
                   pic1:require("../../assets/tabbarPic/bpi_wps.png"),
                   title:"会员",
                   path:"/vip"
                },
                {
                   pic:require("../../assets/tabbarPic/bpa_wps.png"),
                   pic1:require("../../assets/tabbarPic/bpb_wps.png"),
                   title:"订单",
                   path:"/order"
                },
                {
                   pic:require("../../assets/tabbarPic/bpf_wps.png"),
                   pic1:require("../../assets/tabbarPic/bpg_wps.png"),
                   title:"我的",
                   path:"/mine"
                }
            ],
        }
    },
    methods:{
        handleTogglePage(index){
            this.$emit("handleToggle",index)
        }
    },
}
</script>


<style scoped>
.footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    border:1px solid #ccc;
    z-index: 999999;
    background:#fafafa;
    color: #ccc;
}
.footer>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer>ul>li{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.tabbar-pic{
    width:.5rem;
    height:.5rem;
}
.footer>ul>li>i{
    font-size:.5rem;
}
.footer>ul>li.active{
    color:rgb(247, 187, 37);
}
.footer>ul>li.active>.tabbar-pic{
    position: relative;
    display: inline-block!important;
    animation: rotate 0.5s ;
}
@-webkit-keyframes rotate {
  0% { transform: scale(1); }
  50% { transform: scale(0.5); }
  100% { transform: scale(1); }
}
#footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    border:1px solid #ccc;
    background: #fff;
}
#footer>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#footer>ul>li{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
#footer>ul>li>i{
    font-size:.5rem;
}
#footer>ul>.active{
    color:rgb(255,209,97);
}
</style>