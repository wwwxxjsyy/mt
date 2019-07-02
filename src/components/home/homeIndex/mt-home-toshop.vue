<template>
    <div class="toshop">
        <div class="home-toshop-title">
            <h2>到店自取<span>极速取餐 同享优惠</span></h2>
        </div>
        <div class="home-toshop-list">
            <ul>
                <li v-for="(items,index) in shoplists" :key="index">
                    <img :src="items.shoppic" alt="">
                    <div class="home-toshop-foodinfo">
                        <b>{{items.shopname}}</b>
                        <p><a>{{items.distance}}</a><i>{{items.discount}}</i></p>
                        <div class="home-toshop-discount">
                            <span v-for="(items,index) in items.activity" :key="index" :style="{ background :items.color }">
                                    {{items.title}}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Toshop",
    data(){
        return{
            shoplists:[
                {
                    shoppic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562551781&di=e8f3c0d90f4327642d6beee52764b50d&imgtype=jpg&er=1&src=http%3A%2F%2F00.imgmini.eastday.com%2Fmobile%2F20180327%2F20180327214538_977ab957fdbe50951691e25e10044fd3_2.jpeg',
                    shopname:'渭南时辰包子(团结南路店)',
                    distance:'1070米',
                    discount:'省2元配送费',
                    activity:[
                        {
                            title:'减',
                            color:'#e75854'
                        },
                        {
                            title:'折',
                            color:'#ac5cf3'
                        },
                        {
                            title:'返',
                            color:'#fd464b'
                        }
                    ]
                },
                {
                    shoppic:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1103479575,2951119916&fm=26&gp=0.jpg',
                    shopname:'湘秦快餐(精选午餐)',
                    distance:'729米',
                    discount:'省2.5元配送费',
                    activity:[
                        {
                            title:'赠',
                            color:'#fd464b'
                        },
                        {
                            title:'减',
                            color:'#e75854'
                        },
                        {
                            title:'折',
                            color:'#ac5cf3'
                        },
                        {
                            title:'返',
                            color:'#fd464b'
                        }     
                    ]
                },
                {
                    shoppic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562551975&di=0c3a000b82ab30869b843a9a0c67e148&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F76%2F91%2F5966289bd8c83_610.jpg',
                    shopname:'催记米线(好面配好汤)',
                    distance:'729米',
                    discount:'省2.5元配送费',
                    activity:[
                        {
                            title:'赠',
                            color:'#fd464b'
                        },
                        {
                            title:'减',
                            color:'#e75854'
                        },
                        {
                            title:'折',
                            color:'#ac5cf3'
                        },
                        {
                            title:'返',
                            color:'#fd464b'
                        }     
                    ]
                },
                {
                    shoppic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561957556765&di=c083bc210fc6ff3f57100f83b6bd4743&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fpeople%2F201207%2F12%2F20120712164512_uEfza.jpeg',
                    shopname:'食客来 (科技三路店)',
                    distance:'729米',
                    discount:'省2.5元配送费',
                    activity:[
                        {
                            title:'赠',
                            color:'#fd464b'
                        },
                        {
                            title:'减',
                            color:'#e75854'
                        },
                        {
                            title:'折',
                            color:'#ac5cf3'
                        },
                        {
                            title:'返',
                            color:'#fd464b'
                        }     
                    ]
                },
                {
                    shoppic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1106386385,1319488627&fm=26&gp=0.jpg',
                    shopname:'食器时代 (面食专家)',
                    distance:'729米',
                    discount:'省2.5元配送费',
                    activity:[
                        {
                            title:'赠',
                            color:'#fd464b'
                        },
                        {
                            title:'减',
                            color:'#e75854'
                        },
                        {
                            title:'折',
                            color:'#ac5cf3'
                        },
                        {
                            title:'返',
                            color:'#fd464b'
                        }     
                    ]
                },
                {
                    shoppic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562552415&di=13241d649fcc160db65f1bf47f07a033&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zhengjicn.com%2FUploadFiles%2Fjx1_UploadFiles_4309%2F201311%2F20131113155752583.jpg',
                    shopname:'一品轩 (川菜辣专家)',
                    distance:'729米',
                    discount:'省2.5元配送费',
                    activity:[
                        {
                            title:'赠',
                            color:'#fd464b'
                        },
                        {
                            title:'减',
                            color:'#e75854'
                        },
                        {
                            title:'折',
                            color:'#ac5cf3'
                        },
                        {
                            title:'返',
                            color:'#fd464b'
                        }     
                    ]
                },
                {
                    shoppic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562552461&di=c5962e49fd3b6904c750c6bda8b80e26&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.redocn.com%2F20100111%2F20100111_eb67165017d3721646a9O4ZcNMDSHaEY.jpg',
                    shopname:'黑糖咖啡 (休闲娱乐好去处)',
                    distance:'729米',
                    discount:'省2.5元配送费',
                    activity:[
                        {
                            title:'赠',
                            color:'#fd464b'
                        },
                        {
                            title:'减',
                            color:'#e75854'
                        },
                        {
                            title:'折',
                            color:'#ac5cf3'
                        },
                        {
                            title:'返',
                            color:'#fd464b'
                        }     
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.toshop{
    width: 100%;
    /* height: 5rem; */
    /* background: red; */
    margin-top: .5rem;
}
.home-toshop-title {
    width: 100%;
    height: .8rem;
    line-height: .8rem;
}
.home-toshop-title h2{
    font-weight: 900;
    font-size: .3rem;
}
.home-toshop-title h2 span{
    font-size: .2rem;
    padding-left: .2rem;
}
.home-toshop-list{
    height: 2.5rem;
}
.home-toshop-list ul{
    width: 100%;
    height: 1.8rem;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
.home-toshop-list ul li{
    width: 4.5rem;
    height: 1.8rem;
    /* background: #fff;; */
    flex-shrink: 0;
    display: flex;
}
.home-toshop-list ul li img{
    width: 1.5rem;
    height: 1.5rem; 
    margin:  auto 0;
    background: #f3f3f3;
}
.home-toshop-foodinfo{
    margin-left: .15rem;
    width: 2.6rem;
    height: 1.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:.1rem 0 ;
}
.home-toshop-foodinfo b{
    width: 100%;
    font-size: .26rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.home-toshop-foodinfo p{
    font-size: .2rem;
}
.home-toshop-foodinfo p a{
    background: rgb(255, 232, 116);
    border-radius: .05rem;
    padding: 0 .1rem;

}
.home-toshop-foodinfo p i{
    margin-left: .1rem;
    background: rgb(253, 203, 111);
    border-radius: .05rem;
    color: #ff8c00;
    padding: 0 .1rem;
}
.home-toshop-discount{
    width: 100%;
}
.home-toshop-discount span{
    display: inline-block;
    text-align: center;
    width: .4rem;
    height: .4rem;
    background: red;
    border-radius: .05rem;
    padding: .02rem;
    margin-right: .1rem;
    color: #fff;
}
</style>
