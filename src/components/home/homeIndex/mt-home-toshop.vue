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
                    shoppic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639842308,901717750&fm=11&gp=0.jpg',
                    shopname:'喜唐精致水饺(好吃的水饺)',
                    distance:'729米',
                    discount:'省2.5元配送费',
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
                    shoppic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639842308,901717750&fm=11&gp=0.jpg',
                    shopname:'喜唐精致水饺(好吃的水饺)',
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
                    shoppic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639842308,901717750&fm=11&gp=0.jpg',
                    shopname:'喜唐精致水饺(好吃的水饺)',
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
                    shoppic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639842308,901717750&fm=11&gp=0.jpg',
                    shopname:'喜唐精致水饺(好吃的水饺)',
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
                    shoppic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639842308,901717750&fm=11&gp=0.jpg',
                    shopname:'喜唐精致水饺(好吃的水饺)',
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
                    shoppic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639842308,901717750&fm=11&gp=0.jpg',
                    shopname:'喜唐精致水饺(好吃的水饺)',
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
                    shoppic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2639842308,901717750&fm=11&gp=0.jpg',
                    shopname:'喜唐精致水饺(好吃的水饺)',
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
