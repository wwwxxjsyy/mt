<template>
  <div class="ratings" ref="ratingView">
    <div class="ratings-wrapper">
      <div class="overview">
        <div class="overview-left">
          <div class="comment-score">
              <p class="score">{{ratings.comment_score}}</p>
              <p class="text">商家评分</p>
          </div>
          <div class="other-score">
            <div class="quality-score item">
              <span class="text">口味</span>
              <Star :score="ratings.quality_score" class='star'></Star>
              <span class="score"></span>
            </div>
            <div class="pack-score item">
              <span class="text">包装</span>
              <Star :score="ratings.pack_score" class='star'></Star>
              <span class="score"></span>
            </div>
          </div>
        </div>
        <div class="overview-right">
          <div class="delivery-score">
            <p class="score">{{ratings.delivery_score}}</p>
            <p class="text">配送评分</p>
          </div>
        </div>
      </div>

      <Split></Split>

      <div class="content">
        <div class="rating-select" v-if="ratings.tab">
          <span 
            class="item" 
            :class="{'active':selectType==2}"
            @click="selectTypeFn(2)">
            {{ratings.tab[0].comment_score_title}}
          </span>
          <span 
            class="item" 
             :class="{'active':selectType==1}"
            @click="selectTypeFn(1)">
            {{ratings.tab[1].comment_score_title}}
          </span>
          <span 
            class="item" 
            :class="{'active':selectType==0}"
            @click="selectTypeFn(0)">
            <img v-show="selectType != 0" src="./img/icon_sub_tab_dp_normal@2x.png"/>
            <img v-show="selectType == 0" src="./img/icon_sub_tab_dp_highlighted@2x.png"/>
            {{ratings.tab[2].comment_score_title}}
          </span>
        </div>

        <div class="labels-view">
          <span
            class="item" 
            v-for="(item,index) in ratings.labels" 
            :key="index"
            :class="{'heigligh':item.label_star>0}"
            >
            {{item.content}}{{item.label_count}}
          </span>
        </div>

        <ul class="rating-list">
            <li
              v-for="(comment,index) in selectComments"
              :key="index"
              class="comment-item"
              >
              <div class="comment-header">
                <img :src="comment.user_pic_url" v-if="comment.user_pic_url" />
                <img src="./img/anonymity.png" v-if="!comment.user_pic_url"  />
              </div>
              <div class="comment-main">
                <div class="user">
                  {{comment.user_name}}
                </div>
                <div class="time">
                  {{formatDate(comment.comment_time)}}
                </div>
                <div class="star-wrapper">
                  <span class="text">评分</span>
                  <Star :score="comment.order_comment_score" class="star"></Star>
                </div>
                <div class="content">
                  {{comment.comment}}
                </div>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Loadmore } from "mint-ui";
import BScroll from 'better-scroll'
import Split from '../split/Split'
import Star from '../star/homeshopStar'

const ALL = 2
const PICTURE = 1
const COMMENT = 0
export default {
  data(){
    return {
      ratings:{},
      selectType:ALL
    }
  },
  components:{
    Split,
    Star
  },
  created(){
	this.$axios('/shop/pl/?v_shop_id=1')
      .then(res => {
        return res.json()
      })
      .then(response =>{
				console.log(response)
        if(response.code == 0){
          this.ratings = response.data
          this.$nextTick(()=>{
            if(!this.scroll){
              this.scroll = new BScroll(this.$refs.ratingView,{
                click:true
              })
            }else{
              this.scroll.refresh()
            }
          })
        }
    })
  },
  methods:{
    selectTypeFn(type){
      this.selectType = type
    },
    formatDate(time){
        let date = new Date(time * 1000);
				let fmt = 'yyyy.MM.dd';
				if(/(y+)/.test(fmt)) { // 年
					let year = date.getFullYear().toString();
					fmt = fmt.replace(RegExp.$1, year);
				}
				if(/(M+)/.test(fmt)) { // 月
					let mouth = date.getMonth() + 1;
					if(mouth < 10) {
						mouth = '0' + mouth;
					}
					fmt = fmt.replace(RegExp.$1, mouth);
				}
				if(/(d+)/.test(fmt)) { // 日
					let mydate = date.getDate();
					if(mydate < 10) {
						mydate = '0' + mydate;
					}
					fmt = fmt.replace(RegExp.$1, mydate);
				}
				return fmt;
    }
  },
  computed:{
    selectComments(){
      if(this.selectType == ALL){
        return this.ratings.comments
      }else if(this.selectType == PICTURE){
        let arr = []
        this.ratings.comments.forEach(comment => {
          if(comment.comment_pics.length){
            arr.push(comment)
          }
        });
        return arr
      }else{
        return this.ratings.comments_dp.comments
      }
    }
  }
}
</script>

<style scoped>
.ratings {
		position: absolute;
		left: 0;
		top: 4rem;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	
	.ratings .ratings-wrapper .overview {
		padding: .2rem 0 .2rem 0;
		display: flex;
		align-items: center;
	}
	
	.ratings .ratings-wrapper .overview .overview-left {
		flex: 1;
		padding-left: .3rem;
		padding-top: .2rem;
		padding-bottom: .2rem;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .comment-score {
		float: left;
		width: 1rem;
		text-align: center;
		margin-right: .2rem;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .comment-score .score {
		font-size: .45rem;
		font-weight: 800;
		color: #ffb000;
		margin-bottom: .05rem;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .comment-score .text {
		font-size: .2rem;
		color: #666666;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score {
		float: left;
		margin-top: .15rem;
		margin-left: .1rem;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item {
		/* height: 11px; */
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item .text {
		font-size: .25rem;
		color: #666666;
		margin-right: .3rem;
		float: left;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item .star {
		float: left;
		margin-right: 11px;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item .score {
		font-size: 11px;
		color: #FFB000;
		float: left;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .quality-score {
		margin-bottom: .4rem;
	}
	
	.ratings .ratings-wrapper .overview .overview-right {
		flex: 0 0 1.8rem;
		text-align: center;
		border-left: .02rem solid #9D9D9D;
		height: .8rem;
	}
	
	.ratings .ratings-wrapper .overview .overview-right .delivery-score {}
	
	.ratings .ratings-wrapper .overview .overview-right .delivery-score .score {
		font-size: .4rem;
		font-weight: 500;
		color: #999999;
		margin-bottom: .1rem;
		margin-top: .1rem;
	}
    
	
	.ratings .ratings-wrapper .overview .overview-right .delivery-score .text {
		font-size: .2rem;
		color: #999999;
	}

  .ratings .ratings-wrapper .content {
		padding: .3rem;
	}
	
	.ratings .ratings-wrapper .content .rating-select {
		width: 100%;
		box-sizing: border-box;
		font-size: 0;
		border: .03rem solid #FFB000;
		border-right: 0;
		margin-bottom: .1rem;
		border-radius: .1rem;
	}
	
	.ratings .ratings-wrapper .content .rating-select .item {
		width: 33.3%;
		display: inline-block;
		height: .6rem;
		line-height: .6rem;
		font-size: .25rem;
		text-align: center;
		border-right: .02rem solid #FFB000;
		box-sizing: border-box;
		color: #FFB000;
	}

	
	.ratings .ratings-wrapper .content .rating-select .item:last-child img {
		height: .3rem;
		vertical-align: middle;
		display: inline-block;
	}
	
	.ratings .ratings-wrapper .content .rating-select .item.active {
		background: #FFB000;
		color: black;
	}
	
	.ratings .ratings-wrapper .content .labels-view {
		margin-top: .2rem;
	}
	
	.ratings .ratings-wrapper .content .labels-view .item {
		display: inline-block;
		height: .5rem;
		line-height: .5rem;
		padding: 0 .2rem;
		font-size: .23rem;
		background: #F4F4F4;
		margin-right: .1rem;
		margin-bottom: .1rem;
		border-radius: .05rem;
		color: #999999;
	}
	
	.ratings .ratings-wrapper .content .labels-view .item.highligh {
		color: #656565;
	}

  .ratings .ratings-wrapper .content .rating-list {}
	
.ratings .ratings-wrapper .content .rating-list .comment-item {
	padding: .1rem .1rem .1rem 0;
	border-bottom: .03rem solid rgb(236, 232, 232);
	width: 100%;
	box-sizing: border-box;
	display: flex;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-header {
	flex: 0 0 .5rem;
	margin-right: .1rem;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-header img {
	width: .8rem;
	height: .8rem;
	border-radius: 50%;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main {
	flex: 1;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .user {
	width: 50%;
	float: left;
	font-size: .25rem;
	color: #333333;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .time {
	width: 50%;
	float: right;
	text-align: right;
	font-size: .25rem;
	color: #666666;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper {
	float: left;
	margin-top: .05rem;
	margin-bottom: .05rem;
	width: 100%;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper .text {
	color: #999999;
	font-size: .25rem;
	float: left;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper .star {
	float: left;
	margin-left: 7px;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .c_content {
	
	float: left;
	width: 100%;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .c_content i {
	color: #576b95;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .img-wrapper {
	margin-top: 9px;
	float: left;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .img-wrapper img {
	width: 175px;
}


/* 007 21:33:07
//下拉刷新
this.listScroll.on('scroll', (pos) => {
    if (pos.y > 30) {
        this.pullInfo="释放更新..."
    }
});

//滑动结束松开事件
this.listScroll.on('touchEnd',(pos) =>{
    if (pos.y > 30) {
        setTimeout(()=>{
            this.pullInfo = ''
            },1000)
        }
    })
});
007 21:40:10
<!-- 刷新提示信息 -->
<div class="top-tip">
    <span class="refresh-hook">
         <img  :src='picc' >
    </span>
</div> */
</style>
