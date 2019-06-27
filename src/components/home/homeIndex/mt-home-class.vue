<template>
    <div class="class">
        <ul>
            <li v-for="(item,index) in classifys" :key="index" class="home-class-blist">
                <span><img :src="item.pic"></span>
                <b>{{item.title}}</b>
            </li>
          
        </ul>
          <ul>
            <li v-for="(item,index) in sclassifys" :key="index" class="home-class-slist"> 
                <span><img :src="item.pic"></span>
                <b>{{item.title}}</b>
            </li>
          
        </ul>
    </div>
</template>

<script>
export default {
    name:"Class",
    data(){
        return{
            classifys:[
                {
                    pic:require('../../../../static/imgs/class/deliciousfood.png'),
                    title:'美食'
                },
                {
                    pic:require('../../../../static/imgs/class/dessert.png'),
                    title:'甜点饮品'
                },
                {
                    pic:require('../../../../static/imgs/class/supermarket.png'),
                    title:'超市便利'
                },
                {
                    pic:require('../../../../static/imgs/class/deliciousfood.png'),
                    title:'蔬菜水果'
                },
                {
                    pic:require('../../../../static/imgs/class/drugs.png'),
                    title:'送药上门'
                }
            ],
            sclassifys:[
                {
                    pic:require('../../../../static/imgs/class/lunch.png'),
                    title:'下午茶'
                },
                {
                    pic:require('../../../../static/imgs/class/porridge.png'),
                    title:'包子粥铺'
                },
                {
                    pic:require('../../../../static/imgs/class/fastfood.png'),
                    title:'面包蛋糕'
                },
                {
                    pic:require('../../../../static/imgs/class/porridge.png'),
                    title:'汉堡披萨'
                },
                {
                    pic:require('../../../../static/imgs/class/delivery.png'),
                    title:'减免配送费'
                },
                {
                    pic:require('../../../../static/imgs/class/allowance.png'),
                    title:'津贴联盟'
                },
                {
                    pic:require('../../../../static/imgs/class/specialdelivery.png'),
                    title:'美团专送'
                },
                {
                    pic:require('../../../../static/imgs/class/shop.png'),
                    title:'到店自取'
                },
                {
                    pic:require('../../../../static/imgs/class/errands.png'),
                    title:'跑腿代购'
                },
                {
                    pic:require('../../../../static/imgs/class/class.png'),
                    title:'全部分类'
                }
            ]
        }
    }
}
</script>

<style scoped>
.class{
    margin-top: .2rem;
    width:100%;
}
.class ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: .1rem;
}
.class ul .home-class-blist{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.class ul .home-class-blist span{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content:center;    
}
.class ul .home-class-blist span img{
    width: 1.2rem;
    height: 1.2rem;
}
.class ul .home-class-slist{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: .4rem;
}
.class ul .home-class-slist span{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content:center;    
}
.class ul .home-class-slist span img{
    width: .6rem;
    height: .6rem;
}
</style>
