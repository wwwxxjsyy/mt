<template>
  <div class="recommend">
    <div class="recomend-everyday">
      <b>今日套餐推荐</b>
      <i class="iconfont">60个&#xe60a;</i>
    </div>
    
      <div class="recomend-menu">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(items,index) in goods" :key="index">
              <img :src="items.foodpic">
              <span class="recomend-info">
                <p class="recomend-foodname">{{items.foodname}}</p>
                <p class="recomend-shopname iconfont">&#xe614; {{items.shopname}}</p>
                <p class="recomend-shopinfo">
                  <a>
                    <b>实付</b>
                    <i class="recomend-price">¥{{items.price}}</i>
                    <del>{{items.del}}</del>
                  </a>
                  <span class="recomend-order">下单</span>
                </p>
              </span>
            </div>

          </div>
        </div>
      </div>
    
  </div>
</template>


<script>
import Swiper from "swiper";
export default {
  name: "Recommend",
  data(){
      return{
          goods:[
              {
                  foodpic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561644900650&di=05c0a3fd7ff871b895e6861a168ed873&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181010%2F05729196e3a64133bcbdd397d5ba24ee.jpeg',
                  foodname:'农家炒面 (细面) +紫菜蛋包饭',
                  shopname:'川湘食族(高新店)',
                  price:'15.1',
                  del:'￥32.5'
              },
              {
                  foodpic:'https://imgcache.iyiou.com/Cover/2017-10-26/qita-lanzhoulamian.jpg',
                  foodname:'农家炒面 (细面) +紫菜蛋包饭',
                  shopname:'川湘食族(高新店)',
                  price:'25.1',
              },
              {
                  foodpic:'http://m.360buyimg.com/pop/jfs/t22741/141/1766009911/85903/7965f9f0/5b69692eNf953324d.jpg',
                  foodname:'农家炒面 (细面) +紫菜蛋包饭',
                  shopname:'川湘食族(高新店)',
                  price:'24',
                  del:'￥32.5'
              },
              {
                  foodpic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3934206272,3333529408&fm=26&gp=0.jpg',
                  foodname:'农家炒面 (细面) +紫菜蛋包饭',
                  shopname:'川湘食族(高新店)',
                  price:'17',
                  del:'￥32.5'
              },
              {
                  foodpic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562246617&di=07e08ba1961087100170203cb6d5a93f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.91jm.com%2F2016%2F12%2F158D8F87DD8.jpg',
                  foodname:'农家炒面 (细面) +紫菜蛋包饭',
                  shopname:'川湘食族(高新店)',
                  price:'15.1',
              },
              {
                  foodpic:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3303301729,1627834852&fm=26&gp=0.jpg',
                  foodname:'农家炒面 (细面) +紫菜蛋包饭',
                  shopname:'川湘食族(高新店)',
                  price:'15.1',
                  del:'￥32.5'
              },
              {
                  foodpic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562246659&di=ced3d4b2017077290a62cbb70a8008f6&imgtype=jpg&er=1&src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2Fa4a0a8bd09f6cc5aff184f6304d4b284292643.jpg',
                  foodname:'农家炒面 (细面) +紫菜蛋包饭',
                  shopname:'川湘食族(高新店)',
                  price:'15.1',
                  del:'￥32.5'
              }
          ]
      }
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      slidesPerView: 2,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 24,
        depth: 50,
        modifier: -2,
        slideShadows: false
      }
    });
  }
};
</script>

<style>
.recommend {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  margin-top: 0.8rem;
}
.recomend-everyday {
  width: 100%;
  height: 0.8rem;
  line-height: 0.9rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
}
.recomend-everyday b {
  font-size: 0.28rem;
  font-weight: bold;
}
.recomend-everyday i {
  font-size: 0.2rem;
}
.swiper-wrapper .swiper-slide {
  background: #fff;
  width: 3.6rem !important;
  height: 3.6rem;
  position: relative;
  left: -1.7rem;
  border-radius: .2rem;
}
.recomend-info {
  width: 100%;
  height: 100%;
  background: yellow;
}
.swiper-slide img {
  width: 100%;
  height: 60%;
  border-radius: 0.2rem;
}
.swiper-slide span .recomend-foodname {
  font-weight: bold;
  font-size: 0.24rem;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.1rem 0 0.05rem 0.2rem;
}
.swiper-slide span .recomend-shopname {
  font-size: 0.2rem;
  padding: 0.1rem 0 0.05rem 0.2rem;
  color: #bbbbbb;
}
.recomend-info p b {
  font-size: 0.22rem;
  padding-left: 0.2rem;
}
.recomend-info p i {
  font-size: 0.38rem;
  color: rgb(233, 55, 55);
  padding-left: 0.1rem;
  line-height: 0.4rem;
}
.recomend-shopinfo {
  padding-top: 0.1rem;
  display: flex;
  justify-content: space-between;
 
}
.recomend-order {
  background: #feca50;
  border-radius: .05rem;
  text-align: center;
  margin-right: .15rem;
  line-height: .36rem;
  padding: .05rem;
  width: .6rem;
  height: .38rem;
}
.recomend-shopinfo a{
    display: inline-block;
    width: 72%;
     white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
