<template>
<div class='mine-list'>
    <ul>
        <li v-for="(item,index) in list"  :key="index">
           <router-link :to="item.path" tag="a">
               <img :src="item.url" alt=""> 
               <span class="listTitle">{{item.desc1}}</span>
              <span class="listCare">{{item.desc2}}</span>
           </router-link>
          
        </li>
    </ul>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
    list:[
        {
            url:'http://p0.meituan.net/81.81.100/aichequan/16a47c2348278098b6a37005294cad524891.png.webp',
            desc1:'红包',
            desc2:'4个未使用',
            path:'/RedMoney'
        },
        {
            url:'http://p1.meituan.net/81.81.100/aichequan/20642cf247e22e4ad793de9c14482cf44239.png.webp',
            desc1:'代金券',
            desc2:'0张未使用',
            path:'/'
        },
        {
            url:'http://p1.meituan.net/81.81.100/aichequan/774ce13f88576ec6742205fdada5dd1f4555.png.webp',
            desc1:'津贴',
            desc2:'余额20元',
            path:'/'
        },
        {
            url:'http://p0.meituan.net/81.81.100/walletopenplatform/f2b3c5f323794c6489b729cab05cdc284299.png.webp',
            desc1:'我的钱包',
            desc2:'签到赢现金',
            path:'/Mywallet'
        },
        {
            url:'http://p0.meituan.net/81.81.100/walletopenplatform/6c25f3c96d2810f3a0ef5d453622d1354240.png.webp',
            desc1:'借钱',
            desc2:'最高10万',
            path:'/'
        },
    ]
};

},
}
</script>
<style  scoped>
.mine-list{
    width: 100%;
    height: 100%;
    padding:.53rem .4rem .53rem .48rem;
    background: #fff;
    border-radius:.18rem;
    overflow: hidden;
    margin-bottom:.38rem;
}
.mine-list ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-right: .98rem;
    /* float: left; */
}
.mine-list ul>li{
    /* float: left; */
    width: 25%;
    margin-bottom:.5rem;
    text-align: center;
}
.mine-list ul>li:last-child{
    margin-bottom:0;
}
.mine-list ul>li a{
    width: 1.6rem;
}
.mine-list>ul>li>a>img{
    width:.6rem;
    height: .7rem;
    margin: 0 auto;
    margin-bottom: .15rem;
}
.mine-list ul>li>a>span{
    display: block;
}
.mine-list ul>li .listTitle{
    color:#303030;
    font-weight: bold;
    font-size: .28rem;
    text-align: center;
    margin-bottom: .1rem;
}
.mine-list ul>li .listCare{
    color: #aaaaa8;
    font-size:.27rem;
     text-align: center;
}
</style>