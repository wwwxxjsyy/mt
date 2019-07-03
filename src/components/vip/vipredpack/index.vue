<template>
    <div class="vipRedpack">
        <div class="vipRedpack-header">
            <!-- 返回 -->
            <i class="iconfont icon-fanhui-copy" @click="handleBack"></i>
            <!-- 返回 -->
            <h1>会员红包</h1>
        </div>
        <div class="vipRedpack-remain">
            <div class="remain">
                剩余<span>6<i>/6张</i></span>
            </div>
            <ul class="redList">
                <li v-for="(item ,index) in redList" :key="index">
                    <div class="red">
                        <div class="red-top">{{item.exclusive}}</div>
                        <div class="red-center">
                            ￥<span>5</span> <i>无门槛</i>
                        </div>
                    </div>
                    <div class="red-bottom">会员红包</div>
                </li>   
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'RedPack',
    data() {
        return {
            redList:[
                {
                    exclusive:'专享',

                },
                 {
                    exclusive:'专享',

                },
                 {
                    exclusive:'专享',

                },
                 {
                    exclusive:'专享',

                },
                 {
                    exclusive:'专享',

                },
            ]
        }
    },
    methods: {
        handleBack(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>
.vipRedpack{
   background: #f7f7f7; 
   height: 100%;
}
.vipRedpack-header{
     height: 1rem;
    background: #f7f7f7;
    /* margin-left: .2rem; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: .01rem solid #ececec;
}
.icon-fanhui-copy{
    margin-left: .2rem;
    font-size: .4rem
}
.vipRedpack-header h1{
    font-size: .34rem;
    padding-left: 2.5rem;
}
.remain{
    height: .9rem;
    background: #fff5df;
    text-align: center;
    line-height: .9rem;
    font-size: .28rem;
    margin-bottom: 0.2rem;
}
.remain span{
    font-size: .38rem;
    color: #30332a;
    margin-left: .02rem;
}
.remain span i{
    font-size: .28rem;
    color:#827c70 ;
}
.redList{
    display:flex;
    /* justify-content:left; */
    justify-content:space-between;
    padding: 0 .2rem;
    flex-wrap: wrap;
}
.redList li{
    display: block;
    width: 3.45rem;
    height: 2rem;
    background: #ffffff;
    border-top-left-radius: 0.1rem;
     position: relative;
     margin-top: 0.1rem;
    /* margin-left:.2rem; */
}
.red-top{
    width: 0.8rem;
    height: 0.4rem;
    background: #f0dec8;
    text-align: center;
    line-height: 0.4rem;
    border-bottom-right-radius: 0.1rem;
    border-top-left-radius: 0.1rem;
}
.red-center{
    text-align: center;
    font-size: 0.24rem;
    color: #e3473b;
}
.red-center span{
    font-size: 0.36rem;
}
.red-center i{
    color: #949494;
}

.redList>li::before{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 52%;
    left: -2%;
    background: #efefef;
}
.redList>li::after{
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 52%;
    right: -2%;
    background: #efefef;
}
.red{
    position: relative;
}
.red-center::after{
    content: "";
    width: 3.1rem;
    height: 1px;
    position: absolute;
    bottom: -39%;
    left: 5%;
    border-top: 1px dashed #f7f7f7;
    
}
.red-bottom{
    padding-top: 0.55rem;
    text-align: center;
    font-size: 0.26rem;
}
</style>
