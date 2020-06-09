<template>
  <div class="goods">
    <!-- <loading v-if="!container.tag_icon"></loading> -->
    <!-- 分类列表 -->
    <div class="menu-wrapper" ref="menuScroll">
      <ul>
        <!-- 专场 -->
        <li
          class="menu-item"
          :class="{ current: currentIndex === 0 }"
          @click="selectMenu(0)"
        >
          <p class="text">
            <img
              class="icon"
              :src="container.tag_icon"
              v-if="container.tag_icon"
            />
            {{ container.tag_name }}
          </p>
        </li>

        <li
          class="menu-item"
          :class="{ current: currentIndex === index + 1 }"
          v-for="(item, index) in goods"
          :key="index"
          @click="selectMenu(index + 1)"
        >
          <p class="text">
            <img class="icon" :src="item.icon" v-if="item.icon" />
            {{ item.name }}
          </p>
          <i class="num" v-show="calculateCount(item.spus)">
            {{ calculateCount(item.spus) }}
          </i>
        </li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <div class="foods-wrapper" ref="foodScroll">
      <ul>
        <!-- 专场 -->
        <li class="container-list food-list-hook">
          <div
            v-for="(item, index) in container.operation_source_list"
            :key="index"
          >
            <img :src="item.pic_url" />
          </div>
        </li>
        <!-- 具体分类 -->
        <li
          v-for="(item, index) in goods"
          :key="index"
          class="food-list food-list-hook"
        >
          <h3 class="title">{{ item.name }}</h3>

          <!-- 具体的商品列表 -->
          <ul>
            <li
              v-for="(food, index) in item.spus"
              :key="index"
              @click="showDetail(food)"
              class="food-item"
            >
              <div class="icon" :style="head_bg(food.picture)"></div>
              <div class="content">
                <h3 class="name">{{ food.name }}</h3>
                <p class="desc" v-if="food.description">
                  {{ food.description }}
                </p>
                <div class="extra">
                  <span class="saled">{{ food.month_saled_content }}</span>
                  <span class="praise">{{ food.praise_content }}</span>
                </div>
                <img class="product" :src="food.product_label_picture" alt="" />
                <p class="price">
                  <span class="text">￥{{ food.min_price }}</span>
                  <span class="unit">/{{ food.unit }}</span>
                </p>
              </div>
              <div class="cartcontrol-wrapper">
                <app-cart-control :food="food"></app-cart-control>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- 购物车 -->
    <app-shopcart :poiInfo="poiInfo" :selectFoods="selectFoods"></app-shopcart>

    <!-- 商品详情 -->
    <app-product-detail :food="selectFood" ref="foodView"></app-product-detail>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Shopcart from "../shopcart/shopcart";
import CartControl from "../cartcontrol/CartControl";
import ProductDetail from "../productDetail/ProductDetail";
import loading from "../loading";
export default {
  components: {
    "app-shopcart": Shopcart,
    "app-cart-control": CartControl,
    "app-product-detail": ProductDetail,
    loading: loading
  },
  data() {
    return {
      container: {},
      goods: [],
      poiInfo: {},
      listHeight: [],
      menuScroll: {},
      foodScroll: {},
      scrollY: 0,
      selectFood: {}
    };
  },
  // 计算属性是不能够接收参数的
  methods: {
    head_bg(imgName) {
      return "background-image: url(" + imgName + ");";
    },

    initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuScroll, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodScroll, {
        probeType: 3,
        click: true
      });

      // foodScroll 监听事件
      this.foodScroll.on("scroll", pos => {
        // console.log(pos.y)
        this.scrollY = Math.abs(Math.round(pos.y));
        // console.log(this.scrollY)
      });
    },
    calculateHeight() {
      // 获取元素
      let foodlist = this.$refs.foodScroll.getElementsByClassName(
        "food-list-hook"
      );
      // console.log(foodlist)

      let height = 0;
      this.listHeight.push(height);

      for (let i = 0; i < foodlist.length; i++) {
        let item = foodlist[i];
        // 累加
        height += item.clientHeight;
        this.listHeight.push(height);
      }
      console.log(this.listHeight)
    },
    selectMenu(index) {
      // console.log(index)
      let foodlist = this.$refs.foodScroll.getElementsByClassName(
        "food-list-hook"
      );
      let element = foodlist[index];
      //console.log(element)
      // 滚动到对应元素的位置
      this.foodScroll.scrollToElement(element, 250);
    },
    calculateCount(spus) {
      let count = 0;
      spus.forEach(food => {
        if (food.count > 0) {
          count += food.count;
        }
      });
      return count;
    },
    showDetail(food) {
      this.selectFood = food;
      this.$refs.foodView.showView();
    },
    getData() {
      //       const user_id = localStorage.mt_login;
      //       this.$axios.post('https://www.easy-mock.com/mock/5d1b24188b8b69552f76273d/example/api/goods',user_id)
      // 	  .then(res=>{
      //         //打印登陆成功信息   登陆成功
      //         return res.json()
      //       }).then(response =>{
      // 	  	    if(response.code == 0){
      // 	  	      this.container = response.data.container_operation_source
      // 	  	      this.goods = response.data.food_spu_tags
      // 	  	      this.poiInfo = response.data.poi_info
      // 				console.log(this.goods)
      //
      // 				// DOM已经更新
      // 				this.$nextTick(() => {
      // 	  	        // 执行滚动方法
      // 	  	        this.initScroll()
      // 	  	        // 计算分类的区间高度
      // 	  	        this.calculateHeight()
      // 	  	        // 监听滚动的位置
      // 	  	        // 根据滚动位置确认下标,与左侧对应
      // 	  	        // 通过下标实现点击左侧,滚动右侧
      // 	  	      })
      // 	  	    }
      // 	  	  }).catch(err=>{
      //         // alert("请先登陆")
      //         this.$router.push('/registerLogin')
      //       })
    }
  },
  //  beforeRouteEnter(to, from, next) {
  //   next(vm => vm.getData());
  // },
  created() {
    this.$axios(
      "https://www.easy-mock.com/mock/5d1b24188b8b69552f76273d/example/api/goods"
    )
      .then(response => {
        console.log(response.data);
        if (response.data.code == 0) {
          this.container = response.data.data.container_operation_source;
          this.goods = response.data.data.food_spu_tags;
          this.poiInfo = response.data.data.poi_info;
          // DOM已经更新
          this.$nextTick(() => {
            // 执行滚动方法
            this.initScroll();
            // 计算分类的区间高度
            this.calculateHeight();
            // 监听滚动的位置
            // 根据滚动位置确认下标,与左侧对应
            // 通过下标实现点击左侧,滚动右侧
          });
        }
      });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        // 获取商品区间的范围
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];

        // 是否在上述区间中
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          //   console.log(i)
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach(myfoods => {
        myfoods.spus.forEach(food => {
          if (food.count > 0) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  }
};
</script>

<style scoped>
.mint-indicator-wrapper {
  height: 0.5rem;
}
.goods {
  display: flex;
  position: absolute;
  top: 4rem;
  bottom: 1rem;
  overflow: hidden;
  width: 100%;
}

.goods .menu-wrapper {
  width: 22%;
  background: #f4f4f4;
}

.goods .foods-wrapper {
  flex: 1;
}

/* Menu item */
.goods .menu-wrapper .menu-item {
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
  display: flex;
  align-items: center;
}

.goods .menu-wrapper .menu-item .text {
  font-size: 0.28rem;
  color: #333333;
  line-height: 0.5rem;
  vertical-align: middle;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.goods .menu-wrapper .menu-item .text img {
  display: inline;
}

.goods .menu-wrapper .menu-item .text .icon {
  width: 0.3rem;
  height: 0.3rem;
  vertical-align: middle;
}

/* 专场样式 */
.goods .foods-wrapper .container-list {
  padding: 0.2rem 0.25rem 0 0.25rem;
  border-bottom: 1px solid #e4e4e4;
}

.goods .foods-wrapper .container-list img {
  width: 100%;
  height: 1.8rem;
  margin-bottom: 11px;
  border-radius: 0.16rem;
}

/* 具体分类商品布局 */
.goods .foods-wrapper .food-list {
  padding: 0.2rem;
}

.goods .foods-wrapper .food-list .title {
  height: 0.3rem;
  font-size: 0.25rem;
  font-weight: 900;
  background: url(./img/btn_yellow_highlighted@2x.png) no-repeat left center;
  background-size: 0.1rem 0.3rem;
  padding-left: 0.2rem;
  margin-bottom: 0.2rem;
  line-height: 0.3rem;
}

.goods .foods-wrapper .food-list .food-item {
  display: flex;
  margin-bottom: 0.2rem;
  position: relative;
}

.goods .foods-wrapper .food-list .food-item .icon {
  flex: 0 0 1.4rem;
  background-position: center;
  background-size: 120% 100%;
  background-repeat: no-repeat;
  margin-right: 11px;
  height: 1.5rem;
}
.goods .foods-wrapper .food-list .food-item .content {
  flex: 1;
}

/* 具体内容样式 */
.goods .foods-wrapper .food-list .food-item .content .name {
  font-size: 0.33rem;
  color: #333333;
  margin-bottom: 10px;
  padding-right: 27px;
}

.goods .foods-wrapper .food-list .food-item .content .desc {
  font-size: 0.26rem;
  /* line-height: 19px; */
  color: #bfbfbf;
  margin-bottom: 8px;
  /* 超出部分显示省略号*/
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.goods .foods-wrapper .food-list .food-item .content .extra {
  font-size: 0.25rem;
  color: #bfbfbf;
  /* margin-bottom: .1rem; */
  /* margin-top: .2rem; */
}
.goods .foods-wrapper .food-list .food-item .content .extra .saled {
  margin-right: 0.2rem;
}
.goods .foods-wrapper .food-list .food-item .content .product {
  height: 0.3rem;
  margin-bottom: 6px;
}
.goods .foods-wrapper .food-list .food-item .content .price {
  font-size: 0;
}
.goods .foods-wrapper .food-list .food-item .content .price .text {
  font-size: 0.25rem;
  color: #fb4e44;
}
.goods .foods-wrapper .food-list .food-item .content .price .unit {
  font-size: 0.25rem;
  color: #bfbfbf;
}

/* 当前选中 */
.goods .menu-wrapper .menu-item.current {
  background: white;
  font-weight: bold;
  margin-top: -1px;
}
.goods .menu-wrapper .menu-item:first-child.current {
  margin-top: 1px;
}

.goods .foods-wrapper .food-list .food-item .cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
}

.goods .menu-wrapper .menu-item .num {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  color: white;
  background: red;
  text-align: center;
  font-size: 0.2rem;
  line-height: 0.3rem;
}
</style>
