<template>
                            <!-- 最近常买 -->
    <div class="orderoftenbuy">
        <div class="orderoftenbuy-top">
            <h3>最近常买</h3>
            <a href="javascript:;" @click="$router.push({name:'OrderOrderLately',params:{allorder:allorder}})">
                <p>查看<span>{{allcount}}</span>个商家</p><span class="orderoftenbuy-top-youjian"></span>
            </a>
        </div>
        <div class="orderoftenbuy-bottom">
            <ul>
                <li v-for="(item,index) in allorder">
                    <router-link to="" class="shops">
                        <img :src='item.shoppicture' alt="">
                        <p class="shopsname">{{item.shopname}}</p>
                        <p class="shopsbuynum">买过<span>{{item.buycount}}</span>次</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        allorder:Array
    },
    name:"ordeoftenbuy",
    data(){
        return{
            allcount:0,
        }
    },
    mounted(){
        this.allcount=this.allorder.length;
    },
      created(){
        console.log(this.allorder)
        // this.Observer.$on("handlat",(val)=>{
        //     console.log(val);
        //     this.lately=val;
        //     console.log(this.lately);
        // })
    },
    // methods:{
    //     postlat(allorder){
    //         this.Observer.$emit("handlat")
    //     }
    // }
}
</script>

<style>
.orderoftenbuy{
    width:100%;
    height:3.6rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    /* margin-top:0.9rem; */
}
.orderoftenbuy-top{
    width:100%;
    height:1.2rem;
    line-height:1.2rem;
    display:flex;
    justify-content:space-between;
}
.orderoftenbuy-top h3{
    font-size:0.3rem;
    color:#2f2f2f;
    font-weight:800;
    margin-left:0.2rem;
}
.orderoftenbuy-top a{
    font-size:0.26rem;
    color:#7a7a7a;
    margin-right:0.2rem;
    display:flex;
    justify-content:flex-start;
}
.orderoftenbuy-top-youjian{
    width:0.22rem;
    height:0.28rem;
    background:url("../../../../static/img/order/png.png");
    background-size:8.77rem 4.97rem;
    background-position:0.02rem 0rem;
    margin-top:0.46rem;
    margin-left:0.1rem;
}
.orderoftenbuy-bottom{
    width:100%;
    flex:1;
    overflow: hidden;
}
.orderoftenbuy-bottom ul{
    height:100%;
    display:flex;
    flex-wrap:nowrap;
    overflow-x:auto;
}
.orderoftenbuy-bottom ul::-webkit-scrollbar{
    display:none;
}
.orderoftenbuy-bottom ul li{
    flex-shrink:0;
    float:left;
    width:2.4rem;
    height:100%;
    margin-left:0.2rem;
    background:white;
}
.orderoftenbuy-bottom ul li:last-child{
    margin-right:0.4rem;
}
.orderoftenbuy-bottom ul li .shops{
    display:block;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.shops img{
    width:0.72rem;
    height:0.72rem;
    background:chartreuse;
    margin:0.2rem auto 0;
}
.shopsname{
    width:80%;
    font-size:0.24rem;
    color:#363636;
    margin:0 auto;
    overflow:hidden; 
    white-space:nowrap;
    text-overflow:ellipsis;
    text-align:center;
}
.shopsbuynum{
    margin:0 auto 0.2rem;
    font-size:0.22rem;
    color:#ecdd98;
    padding:0.04rem;
    border:0.01rem solid #f0ebef;
}
.shopsbuynum span{
    color:#ecdd98;
}
</style>


