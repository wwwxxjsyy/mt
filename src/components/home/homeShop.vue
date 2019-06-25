<template>
    <div class="content">
        <div class="homeshop_header">
            <div class="homeshop_header_top">
                <div>
                <a href="#"><span class="iconfont icon-fanhui-copy"></span></a>
                </div>
                <div>
                    <a href="#"><span class="iconfont icon-sousuo"></span></a>
                    <a href="#"><span class="iconfont icon-star"></span></a>
                    <a href="#"><span class="iconfont icon-gengduo"></span></a>
                </div>
            </div>
        </div>
        <div class="homeshop_content">
            <div class="homeshop_content_top"></div>
            <div class="homeshop_content_surplus">
                <div class="homeshop_content_name">
                    <h3>魏家凉皮（科技三路店）</h3>
                    <div class="homeshop_content_time">
                        <span class="iconfont icon-history"></span>&nbsp;
                        <span>配送约30分钟</span>&nbsp;&nbsp;|&nbsp;
                        <span class="iconfont icon-liubianxing"></span>&nbsp;
                        <span>点评高分店铺</span>
                    </div>
                    <p class="homeshop_content_name_p">公告 ： 本店不支持网络外卖发票，谢谢合作。</p>
                    <div class="homeshop_content_pull">
                        <span>收单减15</span>
                        <span class="iconfont icon-xiangxia"></span>
                    </div>
                    <div class="homeshop_content_headportrait"></div>
                </div>
                <div class="homeshop_content_tabbar">
                    <div class="homeshop_content_tabbar_as">
                    <a @click="totolist(0)">点菜</a>
                    <a @click="totolist(1)">评价</a>
                    <a @click="totolist(2)">商家</a>
                    </div>
                    <span class="homeshop_content_tabbar_span">好友拼单</span>
                </div>
                <keep-alive>
                    <component :is="page"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import homeShoporderDishes from './homeShoporderDishes'
import homeShopEvaluate from './homeShopEvaluate'
import homeShopMerchant from './homeShopMerchant'
import homeShopPulldownMenu from './homeShopPulldownMenu'
export default {
    name:"homeShop",
    components:{
        homeShoporderDishes,
        homeShopEvaluate,
        homeShopMerchant
    },
    data(){
        return {
            page:homeShoporderDishes
        }
    },
    methods: {
        totolist(index){
            switch(index){
                case 0:
                    this.page = "homeShoporderDishes";
                    break;
                case 1:
                this.page = "homeShopEvaluate";
                break;
                case 2:
                this.page = "homeShopMerchant";
                break;
            }
        }
    },
}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .content>.homeshop_header{
        width: 100%;
        height: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .content>.homeshop_header>.homeshop_header_top{
        width: 100%;
        height: 100%;
        padding: 0 .3rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        line-height: 1rem;
    }
    .iconfont{
        font-size: .5rem;
        color: #fff;
    }
    .icon-star{
        margin: 0 .4rem;
    }
    .content>.homeshop_content{
        width: 100%;
        height: 100%;
    }
    .homeshop_content>.homeshop_content_top{
        width: 100%;
        height: 3rem;
        background: #4d4946;
    }
    .homeshop_content>.homeshop_content_surplus{
        background: #ffffff;
        padding-top: 1.7rem;
        position: relative;
    }
    .homeshop_content_surplus>.homeshop_content_name{
        width: 95%;
        height: 2.8rem;
        background: #fff;
        position: absolute;
        top: -1.2rem;
        left: 2.5%;
        border-radius: .2rem;
        text-align: left;
        padding: .2rem;
        box-shadow: 0px 10px 0px 0px #f3f3f3;
        -moz-box-shadow: 0px 10px 0px 0px #f3f3f3;
        -webkit-box-shadow: 0px 10px 0px 0px #f3f3f3;
        /* box-shadow: 0px -10px 0px 0px #ff0000,   上边阴影  红色
        box-shadow: -10px 0px 0px 0px #3bee17,   左边阴影  绿色
        box-shadow:10px 0px 0px 0px #2279ee,    右边阴影  蓝色
        box-shadow:0px 10px 0px 0px #eede15;    下边阴影  黄色 */
    }
    .homeshop_content_name>.homeshop_content_headportrait{
        width: 1.3rem;
        height: 1.3rem;
        background: greenyellow;
        position: absolute;
        right: 4%;
        top: -20%;
        border-radius: .1rem;
        overflow: hidden;
    }
    .icon-history{
        color: #f4a129;
    }
    .icon-liubianxing{
        color: #f4a129;
    }
    .homeshop_content_name>h3{
        height: .5rem;
        width: 100%;
        line-height: .5rem;
        font-size: .4rem;
    }
    .homeshop_content_time{
        width: 100%;
        height: .6rem;
        display: flex;
        align-items: center;
    }
    .homeshop_content_time>.iconfont{
        font-size: .3rem;
    }
    .homeshop_content_name_p{
        color: #8c8c8c;
    }
    .homeshop_content_pull{
        margin-top: .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .homeshop_content_pull span:first-child{
        color: #f66979;
        display: inline-block;
        padding: .1rem .2rem;
        border: 1px solid #f7c9cb;
    }
    .homeshop_content_pull span:last-child{
        color: #989c9f;
    }
    .homeshop_content_tabbar{
        width: 100%;
        height: 1.3rem;
        font-size: .3rem;
        padding: 0 .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #e5e5e5;
    }
    .homeshop_content_tabbar_as{
       display: flex;
    }
    .homeshop_content_tabbar_as>a{
        color: #4c4c4c;
        margin: 0 .3rem;
        width: 100%;
        height: 100%;
        line-height: 1.3rem;
    }
    .homeshop_content_tabbar_as>a:hover{
        border-bottom: 4px solid #ffac00;
    }
    .homeshop_content_tabbar_span{
        color: #fcd21e;
        border: 2px solid #fcf1df;
        border-radius: .1rem;
        padding: .07rem .4rem;
        border-radius: .3rem;
    }
</style>
