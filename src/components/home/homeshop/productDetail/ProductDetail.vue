<template>
	<transition name="food-detail">
    <div class="food" ref="foodView" v-show="showFlag">
      <div class="food-wrapper">
        <div class="food-content">
          <div class="img-wrapper">
            <img class="food-img" :src="food.picture"/>
            <span 
              class="close-bt icon-close"
              @click="closeView"
              ></span>
            <img class="share-bt" src="./img/share.png" />
            <img class="more-bt" src="./img/more.png" />
          </div>

           <div class="content-wrapper">
              <h3 class="name">{{food.name}}</h3>
              <p class="saled">{{food.month_saled_content}}</p>
              <img class="product" v-show="food.product_label_picture" :src="food.product_label_picture"/>
              <p class="price">
                <span class="text">￥{{food.min_price}}</span>
                <span class="unit">/{{food.unit}}</span>
              </p>

              <div class="cartcontrol-wrapper">
                <CartControl :food="food"></CartControl>
              </div>
              <div 
                class="buy" 
                @click="addProduct"
                v-show="!food.count || food.count == 0">
                选规格
              </div>
            </div>
        </div>
        <Split></Split>

        <!-- 外卖评价 -->
        <div class="rating-wrapper">
          <!-- 评价头部 -->
          <div class="rating-title">
            <div class="like-ratio" v-if="food.rating">
              <span class="title">{{food.rating.title}}</span>
              <span class="retio">
                (
                  {{food.rating.like_ratio_desc}}
                  <i>{{food.rating.like_ratio}}</i>
                )
              </span>
            </div>
            <div class="snd-title" v-if="food.rating">
                  <span class="text">{{food.rating.snd_title}}</span> 
                  <span class="icon icon-keyboard_arrow_right"></span> 
            </div>
          </div>
          <ul class="rating-content" v-if="food.rating">
            <li 
              v-for="(comment,index) in food.rating.comment_list" 
              :key="index"
              class="comment-item"
              >
              <div class="comment-header">
                <img :src="comment.user_icon" v-if="comment.user_icon" />
                <img src="./img/anonymity.png" v-if="!comment.user_icon"  />
              </div>
              <div class="comment-main">
                <div class="user">
                  {{comment.user_name}}
                </div>
                <div class="time">
                  {{comment.comment_time}}
                </div>
                <div class="content">
                  {{comment.comment_content}}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>                                              
  </transition>
</template>

<script>
import Vue from 'vue';
import BScroll from 'better-scroll'
import CartControl from '../cartcontrol/CartControl'
import Split from '../split/Split'
	export default {
		data(){
      return {
        showFlag:false
      }
    },
    props:{
      food:{
        type:Object
      }
    },
    methods:{
      showView(){
        this.showFlag = true

        this.$nextTick(() => {
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.foodView,{
              click:true
            })
          }else{
            this.scroll.refresh()
          }
        })
      },
      closeView(){
        this.showFlag = false
      },
      addProduct(){
        // this.food.count = 1
        Vue.set(this.food,"count",1)
      }
    },
    components:{
      CartControl,
      Split
    }
	}
</script>

<style>
.food{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 1rem;
	background: white;
	width: 100%;
	z-index: 90;
}

.food-detail-enter-active, .food-detail-leave-active {
  transition:  1.0s
}
.food-detail-enter, .food-detail-leave-to {
  transform: translateX(100%);
}

.food .food-wrapper .food-content .img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 100%;
}

.food .food-wrapper .food-content .img-wrapper .food-img{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}

.food .food-wrapper .food-content .img-wrapper .food-img{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}
.food .food-wrapper .food-content .img-wrapper .close-bt{
	width: .5rem;
	height: .5rem;
	position: absolute;
	left: .2rem;
	top: .2rem;
	text-align: center;
	font-size: .5rem;
	color: white;
	background: #7f7f7f;
	border-radius: 50%;
}
.food .food-wrapper .food-content .img-wrapper .share-bt,
.food .food-wrapper .food-content .img-wrapper .more-bt
{
	width: .55rem;
	height: .55rem;
	position: absolute;
	top: .2rem;
}
.food .food-wrapper .food-content .img-wrapper .share-bt{
	right: 1rem;
}
.food .food-wrapper .food-content .img-wrapper .more-bt{
	right: .1rem;
}

.food .food-wrapper .food-content .content-wrapper{
	padding: 0 0 .3rem .4rem;
	position: relative;
}
.food .food-wrapper .food-content .content-wrapper .name{
	font-size: .3rem;
	color: #333333;
	font-weight: bold;
}
.food .food-wrapper .food-content .content-wrapper .saled{
	font-size: .25rem;
	color: #9d9d9d;
	margin-bottom: .1rem;
}
.food .food-wrapper .food-content .content-wrapper .product{
	height: .3rem;
	margin-bottom: 16px;
}
.food .food-wrapper .food-content .content-wrapper .price{
	font-size: 0;
}
.food .food-wrapper .food-content .content-wrapper .price .text{
	font-size: .33rem;
	color: #FB4E44;
}
.food .food-wrapper .food-content .content-wrapper .price .unit{
	font-size: .33rem;
	color: #9D9D9D;
}
.food .food-wrapper .food-content .cartcontrol-wrapper{
	position: absolute;
	right: .2rem;
	bottom: .1rem;
	padding: 2px;
}
.food .food-wrapper .food-content .buy{
	width: 1.3rem;
	height: .57rem;
	font-size: .23rem;
	line-height: .57rem;
  color: black;
	text-align: center;
	background: #FFD161;
	border-radius: .3rem;
	position: absolute;
	right: .2rem;
	bottom: .1rem;
}

.food .food-wrapper .rating-wrapper{
	padding-left: .25rem;
}
.food .food-wrapper .rating-wrapper .rating-title{
	padding: .2rem .2rem .2rem 0;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio{
	float: left;
	font-size: 0;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio .title{
	font-size: .3rem;
  color: black;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio .ratio{
	font-size: .26rem;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio .ratio i{
	color: #FB4E44;
	font-size: 11px;
}

.food .food-wrapper .rating-wrapper .rating-title .snd-title{
	float: right;
	font-size: 0;
}
.food .food-wrapper .rating-wrapper .rating-title .snd-title .text,
.food .food-wrapper .rating-wrapper .rating-title .snd-title .icon
{
	font-size: .26rem;
	color: #9D9D9D;
	display: inline-block;
}
.food .food-wrapper .rating-wrapper .rating-title .snd-title .icon{
	margin-left: .2rem;
}


.food .food-wrapper .rating-wrapper .comment-item{
	padding: .25rem .25rem .25rem 0;
	border-bottom: 1px solid #F4F4F4;
	width: 100%;
	box-sizing: border-box;
	display: flex;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-header{
	flex: 0 0 41px;
	margin-right: .2rem;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-header img{
	width: .8rem;
	height: .8rem;
	border-radius: 50%;
}

.food .food-wrapper .rating-wrapper .comment-item .comment-main{
	flex: 1;
	margin-top: 6px;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-main .user{
	width: 50%;
	float: left;
	font-size: .25rem;
	color: #333333;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-main .time{
	width: 50%;
	float: right;
	text-align: right;
	font-size: .28rem;
	color: #666666;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-main .content{
	margin-top: 17px;
  float: left;
	font-size: .3rem;
}
</style>
