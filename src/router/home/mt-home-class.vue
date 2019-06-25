<template>
    <div class="class">
        <ul>
            <li v-for="(item,index) in classifys">
                <span><img :src="item.pic"></span>
                <b>{{item.title}}</b>
            </li>
          
        </ul>
          <ul>
            <li v-for="(item,index) in sclassifys">
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
                    pic:require('../../../static/imgs/class/deliciousfood.png'),
                    title:'美食'
                },
                {
                    pic:require('../../../static/imgs/class/dessert.png'),
                    title:'甜点饮品'
                },
                {
                    pic:require('../../../static/imgs/class/supermarket.png'),
                    title:'超市便利'
                },
                {
                    pic:require('../../../static/imgs/class/fresh.png'),
                    title:'蔬菜水果'
                },
                {
                    pic:require('../../../static/imgs/class/drugs.png'),
                    title:'送药上门'
                }
            ],
            sclassifys:[
                {
                    pic:require('../../../static/imgs/class/deliciousfood.png'),
                    title:'美食'
                },
                {
                    pic:require('../../../static/imgs/class/dessert.png'),
                    title:'甜点饮品'
                },
                {
                    pic:require('../../../static/imgs/class/supermarket.png'),
                    title:'超市便利'
                },
                {
                    pic:require('../../../static/imgs/class/fresh.png'),
                    title:'蔬菜水果'
                },
                {
                    pic:require('../../../static/imgs/class/drugs.png'),
                    title:'送药上门'
                }
            ]
        }
    }
}
</script>

<style>
.class{
    margin-top: .2rem;
    width:100%;
    height:1.5rem;
    /* background: yellowgreen; */
}
.class ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.class ul li{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    
    /* background: yellow; */
}
.class ul li span{
    width: 100%;
    height: 80%;
    /* background: red;   */
    display: flex;
    justify-content:center;    
}
.class ul li span img{
    width: 80%;
}
</style>
