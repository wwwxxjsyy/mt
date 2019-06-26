<template>
  <div class="optimization">
    <div class="home-optimization-title">
      <h2>午餐优选</h2>
      <span class="home-optimization-more iconfont">更多&#xe60a;</span>
    </div>
    <div class="home-optimization-food">
      <ul>
        <!-- foodlist 不同时间推荐不同商品 优选 -->
        <li v-for="(items,index) in foodlist" :key="index">
          <div>
            <img :src="items.foodpic">
          </div>
          <div class="home-optimization-foodname">
            <div class="home-optimization-foodname-left">
              <h3>{{items.shopname}}</h3>
              <p>{{items.recommend}}</p>
            </div>
            <div class="home-optimization-foodname-right">
              <img :src="items.shoppic" class="home-optimization-shopname">
              <i>x</i>
            </div>
          </div>
        </li>
        <!-- 菜品推荐  精选 -->
        <li
          class="home-optimization-selected"
          v-for="(items,index) in goodfood"
          :key="index+888"
          :style=" 'background-image :  url( ' + items.backgroundimg+' ) ' "
        >
          <h3>{{items.foodmenu}}</h3>
          <div class="home-optimization-selected-btm">
            <div class="home-optimization-selectedmenu">
              <div class="home-optimization-selectedmen-left">
                <b>{{items.foodname}}</b>
                <span>{{items.foodprice}}</span>
              </div>
              <div class="home-optimization-selectedmen-right">
                <img :src="items.foodpic" alt>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Optimization",
  data() {
    return {
      foodlist: [
        {
          foodpic:
            "http://p1.meituan.net/waimaipoi/53aa85e899e2dc4ab7f59a12fcb75aad7947.jpeg",
          shopname: "三米粥铺  (科学营养的好粥)",
          recommend: "根据您看过的店推荐",
          shoppic:
            "http://userimages15.51sole.com/20170912/b_4056735_201709121533535225.jpg"
        },
        {
          foodpic:
            "http://p1.meituan.net/waimaipoi/53aa85e899e2dc4ab7f59a12fcb75aad7947.jpeg",
          shopname: "三米粥铺  (科学营养的好粥)",
          recommend: "根据您看过的店推荐",
          shoppic:
            "http://userimages15.51sole.com/20170912/b_4056735_201709121533535225.jpg"
        },
        {
          foodpic:
            "http://p1.meituan.net/waimaipoi/53aa85e899e2dc4ab7f59a12fcb75aad7947.jpeg",
          shopname: "三米粥铺  (科学营养的好粥)",
          recommend: "根据您看过的店推荐",
          shoppic:
            "http://userimages15.51sole.com/20170912/b_4056735_201709121533535225.jpg"
        },
        {
          foodpic:
            "http://p1.meituan.net/waimaipoi/53aa85e899e2dc4ab7f59a12fcb75aad7947.jpeg",
          shopname: "三米粥铺  (科学营养的好粥)",
          recommend: "根据您看过的店推荐",
          shoppic:
            "http://userimages15.51sole.com/20170912/b_4056735_201709121533535225.jpg"
        }
      ],
      goodfood: [
        {
          foodmenu: "ᅳ 西北菜菜品 ᅳ",
          foodname: "肥牛砂锅宽粉",
          foodprice: "￥ 22.98",
          foodpic:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2444544723,2403570976&fm=11&gp=0.jpg",
          backgroundimg:
            "http://p0.meituan.net/waimaipoi/148d237f8a27f5a64a5df4c21a99c4c9121765.jpg"
        },
        {
          foodmenu: "ᅳ 新疆菜精选 ᅳ",
          foodname: "大盘鸡单人套餐",
          foodprice: "￥ 22.98",
          foodpic:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561478282907&di=7954067a9bda931af6bc0bb75a3f6620&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fbainuo%2Fcrop%3D0%2C14%2C690%2C418%3Bw%3D470%3Bq%3D79%2Fsign%3Db425143333d3d539d572558307b7c561%2F55e736d12f2eb938e69f4e3fd0628535e4dd6f08.jpg",
          backgroundimg:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1308201291,2809421273&fm=26&gp=0.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.optimization {
  width: 100%;
  margin-top: 0.5rem;
}
.home-optimization-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.6rem;
  padding: 0.1rem;
}
.home-optimization-title h2 {
  font-weight: bold;
}
.home-optimization-more {
  font-size: 0.2rem;
}
.home-optimization-food {
  width: 100%;
}
.home-optimization-food ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home-optimization-food ul li {
  width: 48%;
  height: 2.7rem;
  background: #fff;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
}
.home-optimization-food ul li img {
  width: 100%;
  height: 1.8rem;
  border-radius: 0.1rem 0.1rem 0 0;
}
.home-optimization-foodname {
  width: 100%;
  height: 0.8rem;
  display: flex;
}
.home-optimization-foodname-left {
  width: 70%;
  height: 0.7rem;
  display: flex;
  flex-direction: column;
  padding-left: 0.15rem;
}
.home-optimization-foodname-left h3 {
  width: 100%;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-optimization-foodname-left p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.22rem;
  color: rgb(145, 141, 141);
  margin-top: 0.1rem;
}
.home-optimization-foodname-right {
  width: 30%;
  height: 0.7rem;
  position: absolute;
}
.home-optimization-foodname-right .home-optimization-shopname {
  width: 0.7rem;
  height: 0.7rem;
  position: relative;
  left: 258px;
  bottom: 40px;
}
.home-optimization-foodname-right i {
  display: inline-block;
  text-align: center;
  width: 0.2rem;
  height: 0.2rem;
  color: rgb(145, 141, 141);
  font-size: 0.17rem;
  line-height: 0.18rem;
  border-radius: 0.05rem;
  border: 1px solid rgb(145, 141, 141);
  position: relative;
  left: 228px;
  bottom: 5px;
}
.home-optimization-selected h3 {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1.3rem;
  color: #fff;
  font-size: 0.35rem;
}
.home-optimization-selectedmenu {
  width: 90%;
  height: 1.1rem;
  background: #fff;
  border-radius: 0.1rem;
  display: flex;
}
.home-optimization-selected-btm {
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-optimization-selectedmen-left {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 0.2rem;
}
.home-optimization-selectedmen-left b {
  font-size: 0.28rem;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-optimization-selectedmen-left span {
  font-size: 0.3rem;
  color: red;
}
.home-optimization-food ul li .home-optimization-selectedmen-right img {
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
}
</style>
