<template>
    <div class="vip-history">
        <div class="history-header">
            <!-- 返回 -->
            <i class="iconfont icon-fanhui-copy" @click="handleBack"></i>
            <!-- 返回 -->
            <h1>购买记录</h1>
        </div>
        <ul class="oList">
            
            <li v-for="(item,index) in dateList" :key="index">
                <div class="left">
                    <h1>{{item.name}}</h1>
                    <span>{{item.date}}</span>
                </div>
                <div class="right">
                    <span>{{item.vipPrice}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'History',
    data() {
        return {
            dateList:[
                {
                   name:'续费会员：月卡',
                   date: '购买日期：2019.06.17',
                   vipPrice:'￥15'
                },
                {
                   name:'开通会员',
                   date: '购买日期：2019.02.12',
                   vipPrice:'￥30'
                },
                {
                   name:'开通会员',
                   date: '购买日期：2018.12.17',
                   vipPrice:'￥30'
                }
            ]
        }
    },
    methods: {
        handleBack(){
            this.$router.back();
        }
    },
}
</script>

<style scoped>
/* .vip-history{
    margin-left: 0.2rem;
} */
.history-header{
    height: 1rem;
    background: #f7f7f7;
    /* margin-left: .2rem; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: .02rem solid #ececec;
}
.icon-fanhui-copy{
    margin-left: .2rem;
    font-size: .4rem
}
.history-header h1{
    font-size: .34rem;
    padding-left: 2.4rem;
}
.oList li{
    display: flex;
    justify-content: space-between;
    margin: 0 .2rem;
    height: 1.4rem;
    align-items: center;
    border-bottom: .03rem solid #e5e5e5;
}
.left h1{
    font-size: .32rem;
    color: #000000;
}
.left span{
    font-size: .24rem;
    color: #999999;
}
.right span{
    font-size: .36rem;
    color: #f95137;
}
</style>
