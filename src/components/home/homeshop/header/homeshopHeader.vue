<template>
  <div class="header">
    <!-- {{poiInfo.name}} -->
    <!-- 顶部通栏 开始 -->
    <div class="top-wrapper">
			<div class="back-wrapper">
				<span class="icon-arrow_lift"></span>
			</div>

			<form class="search-wrapper">
				<span class="search-icon"></span>
				<input class="search-bar" type="text" placeholder="搜索店内商品" />
			</form>

			<div class="more-wrapper">
				<a class="spelling-bt" href="#">拼单</a>
				<div class="more-bt">
					<i class="s-radius"></i>
					<i class="s-radius"></i>
					<i class="s-radius"></i>
				</div>
			</div>
		</div>
    <!-- 顶部通栏 结束 -->
    

    <!-- 主题内容 开始 -->
    <div class="content-wrapper">
			<div class="icon" :style="head_bg">
				<!--<img :src="poiInfo.pic_url" />-->
			</div>
			<div class="name">
				<h3>{{poiInfo.name}}</h3>
			</div>
			<div class="collect">
				<img src="./img/star.png" />
				<span>收藏</span>
			</div>
		</div>
    <!-- 主题内容 结束 -->
    

    <!-- 公告内容 开始 -->
    <div class="bulletin-wrapper">
			<img class="icon" v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url" />

			<span class="text" v-if="poiInfo.discounts2">{{poiInfo.discounts2[0].info}}</span>
			<div class="detail" v-if="poiInfo.discounts2" @click="showBulletin">
				{{poiInfo.discounts2.length}}个活动
				<span class="icon-keyboard_arrow_right"></span>
			</div>
		</div> 
    <!-- 公告内容 结束 -->
    

    <!-- 背景内容 开始 -->
    <div class="bg-wrapper" :style="head_pic_url">
			<!-- <img :src="poiInfo.head_pic_url" /> -->
		</div>
    <!-- 背景内容 结束 -->

    <!-- 公告详情 开始 -->
    <transition name="bulletin-detail">
      <div class="bulletin-detail" v-show="isShow">
          <div class="detail-wrapper">
            <!-- 相关内容容器 -->
            <div class="main-wrapper" :style="detail_bg">
              <div class="icon" :style="head_bg"></div>
              <h3 class="name">{{poiInfo.name}}</h3>
              <!-- 星级评价 -->
              <div class="score">
                <app-star :score="poiInfo.wm_poi_score"></app-star>
                <span>{{poiInfo.wm_poi_score}}</span>
              </div>

              <p class="tip">
                {{poiInfo.min_price_tip}} <i>|</i> {{poiInfo.shipping_fee_tip}} <i>|</i> {{poiInfo.delivery_time_tip}}
              </p>

              <p class="time">
                配送时间: {{poiInfo.shipping_time}}
              </p>

              <div class="discounts" v-if="poiInfo.discounts2">
                <p>
                  <img :src="poiInfo.discounts2[0].icon_url" />
                  <span>{{poiInfo.discounts2[0].info}}</span>
                </p>
              </div>
            </div>

            <!-- 关闭内容容器 -->
            <div class="close-wrapper">
              <span class="icon-close" @click="closeBulletin"></span>
            </div>
          </div>
      </div>
    </transition>
    <!-- 公告详情 结束 -->
  </div>
</template>

<script>
import Star from '../star/homeshopStar';
export default {
  data(){
    return {
      isShow:false,
      "poiInfo": {
			"name": "深圳麦当劳明智餐厅",
			"shipping_time": "00:00-04:45,05:00-10:15,10:30-23:59",
			"wm_poi_score":4.7,
			"discounts2": [
				{
					"info": "新用户立减17元,首次使用银行卡支付最高再减3元",
					"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png"
				}
			],
			"shipping_fee_tip": "配送 ¥9",
			"min_price_tip": "起送 ¥0",
			"delivery_time_tip": "30分钟",
			"poi_back_pic_url": "http://p1.meituan.net/aichequan/dfd39d77d47dfd6df4e1c07ab2e87458193641.png",
			"pic_url": "http://p0.meituan.net/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg",
			"head_pic_url": "http://p0.meituan.net/xianfu/19c002c5963a289206e756092995a2fe230070.jpg"
		}
    }
  },
  components:{
    "app-star":Star
  },
//   props:{
//     poiInfo:{
//       type:Object,
//       default:{}
//     }
//   },
  computed:{
    head_pic_url(){
      return "background-image: url(" + this.poiInfo.head_pic_url + ");"
    },
    head_bg(){
      return "background-image: url(" + this.poiInfo.pic_url + ");"
    },
    detail_bg(){
      return "background-image: url(" + this.poiInfo.poi_back_pic_url + ");"
    }
  },
  methods:{
    showBulletin(){
      this.isShow = true
    },
    closeBulletin(){
      this.isShow = false
    }
  }
}
</script>

<style scoped>

@import url(../../../../common/css/icon.css);

.header{
  height: 3rem;;
  padding-top: .5rem;
}

/* 顶部通栏样式 */
.header .top-wrapper {
	position: relative;
}
	
.header .top-wrapper .back-wrapper {
  width: 1rem;
  height: .6rem;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  line-height: .6rem;
}

.header .top-wrapper .back-wrapper span {
  display: inline-block;
  color: white;
}

.header .top-wrapper .search-wrapper {
  width: 100%;
  height: .6rem;
  /* background: pink; */
  padding: 0  2.3rem 0 1rem;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
}

.header .top-wrapper .search-wrapper .search-icon {
  width: .6rem;
  height: .6rem;
  background: url(./img/search.png) no-repeat 11px center;
  background-size: .25rem .25rem;
  position: absolute;
  margin-left: .1rem
}

.header .top-wrapper .search-wrapper .search-bar {
  width: 100%;
  height: .6rem;
  border: 0;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
  background: #cdcdcc;
  border-radius: 25px;
  padding-left: .6rem;
  /* 去除选中时蓝色边框*/
  outline: none;
  font-size: .27rem;
}

.header .top-wrapper .more-wrapper {
  /* width: 1.5rem; */
  height: .6rem;
  /* background: orange; */
  position: absolute;
  right: 0;
  top: 0;
  padding: .14rem .3rem 0 .1rem;
}

.header .top-wrapper .more-wrapper .spelling-bt {
  width: .7rem;
  height: .4rem;
  color: white;
  line-height: .4rem;
  border: 1px solid white;
  text-align: center;
  float: left;
  text-decoration: none;
  font-size: .25rem;
}

.header .top-wrapper .more-wrapper .more-bt {
  float: right;
  width: .5rem;
  height: .4rem;
  margin-left: .2rem;
  margin-top: .15rem;
}

.header .top-wrapper .more-wrapper .more-bt .s-radius {
  width: .1rem;
  height: .1rem;
  border-radius: 50%;
  border: 1px solid white;
  display: block;
  float: left;
  margin-right: .05rem;
}

/* 背景图片样式 */ 
.header .bg-wrapper {
    width: 100%;
    height: 3rem;;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 135%;
		background-position: center -12px;
}

/* 主题内容 样式 */ 
.header .content-wrapper {
  padding: .3rem .2rem 11px;
  height: 1.4rem;
}

.header .content-wrapper .icon {
  width: 1rem;
  height: 1rem;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  float: left;
}

.header .content-wrapper .name {
  float: left;
  padding: .3rem 0 0 .2rem;
}

.header .content-wrapper .name h3 {
  font-size: .3rem;
  font-weight: bold;
  color: white;
}

.header .content-wrapper .collect {
  width: .4rem;
  height: .7rem;
  float: right;
  text-align: center;
  margin-right: .2rem;
}

.header .content-wrapper .collect img {
  width: .45rem;
  height: .45rem;
  margin-bottom: .1rem;
}

.header .content-wrapper .collect span {
  color: white;
  font-size: .2rem;
}

/* 公告内容样式 */
.header .bulletin-wrapper {
  height: .26rem;
  padding: .05rem .2rem;
}

.header .bulletin-wrapper .icon {
  width: .33rem;
  height: .33rem;
  float: left;
  margin-right: 6px;
}

.header .bulletin-wrapper .text {
  font-size: .23rem;
  color: white;
  float: left;
  line-height: .33rem;
}

.header .bulletin-wrapper .detail {
  color: white;
  float: right;
  font-size: .3rem;
  line-height: .18rem;
}

.header .bulletin-wrapper .detail span {
  font-size: .4rem;
  line-height: .18rem;
  float: right;
}

/* 公告详情 样式 */ 
.header .bulletin-detail {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background: rgba(98, 98, 98, 0.8);
		z-index: 999;
	}
	
	.header .bulletin-detail .detail-wrapper {
		width: 100%;
		height: 100%;
		padding: 1rem .4rem 2.5rem;
		box-sizing: border-box;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		border-radius: 10px;
		text-align: center;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .icon {
		width: 1.2rem;
		height: 1.2rem;
		background-size: 135% 100%;
		background-position: center;
		border-radius: 5px;
		display: inline-block;
		margin-top: .8rem;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .name {
		font-size: .3rem;
		color: white;
		margin-top: .1rem;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .score {
		text-align: center;
		font-size: 0;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .score .star {
		display: inline-block;
		margin-right: 10px;
    font-size: .4rem;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .score span {
		display: inline-block;
		font-size: .4rem;
		color: white;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .tip {
		font-size: .25rem;
		color: #bababc;
		margin-top: .1rem;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .tip i {
		margin: 0 7px;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .time {
		font-size: .25rem;
		color: #bababc;
		margin-top: 13px;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .discounts {
		margin-top: 20px;
		padding: .2rem 20px;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .discounts p {
		padding-top: .4rem;
		border-top: 1px solid #BABABC;
    display: flex;
    align-items: center;
    justify-content: center;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .discounts img {
		width: .33rem;
		height: .33rem;
		vertical-align: middle;
    margin-right: .1rem;
	}
	
	.header .bulletin-detail .detail-wrapper .main-wrapper .discounts span {
		font-size: .23rem;
		line-height: 16px;
		color: white;
  }
  
  .header .bulletin-detail .detail-wrapper .close-wrapper {
		padding-top: .4rem;
		height: .8rem;
		text-align: center;
	}
	
.header .bulletin-detail .detail-wrapper .close-wrapper span {
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: 50%;
  font-size: .3rem;
  color: white;
  display: inline-block;
  background: rgba(118, 118, 118, 0.7);
  border: 1px solid rgba(140, 140, 140, 0.9);
}

/* 动画效果 */ 
.bulletin-detail-enter-active,
.bulletin-detail-leave-active {
  transition: 2s all;
}

.bulletin-detail-enter,
.bulletin-detail-leave-to {
  opacity: 0;
}

.bulletin-detail-enter-to,
.bulletin-detail-leave {
  opacity: 1;
}

</style>
