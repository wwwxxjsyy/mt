<template>
  <div class="seller" ref="sellerView">
    <div class="seller-wrapper">
			<Split></Split>
			<div class="seller-view">
        <div class="address-wrapper">
          <div class="address-left">
            {{seller.address}}
          </div>
          <div class="address-right">
            <div class="content"></div>
          </div>
        </div>

        <div class="pics-wrapper" v-if="seller.poi_env" ref="picsView">
          <ul class="pics-list" ref="picsList">
            <li
              ref="picsItem" 
              class="pics-item"
              v-for="(imgurl,index) in seller.poi_env.thumbnails_url_list"
              :key="index"
              >
              <img :src="imgurl">
            </li>
          </ul>
        </div>

        <div class="safety-wrapper">
          查看食品安全档案
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>

			<Split></Split>
			<div class="tip-wrapper">
				<div class="delivery-wrapper">
          配送服务: {{seller.app_delivery_tip}}
        </div>

        <div class="shipping-wrapper">
          配送时间: {{seller.shipping_time}}
        </div>
			</div>

			<Split></Split>
			<div class="other-wrapper">
				<div class="server-wrapper">
          商家服务
          <div 
            class="poi-server" 
            v-for="(item,index) in seller.poi_service"
            :key="index"
            >
            <img :src="item.icon" > {{item.content}}
          </div>
        </div>
        <div class="discounts-wrapper">
           <div 
            class="discounts-item"
            v-for="(item,index) in seller.discounts2"
            :key="index"
            >
            <div class="icon">
              <img :src="item.icon_url">
            </div>
            <div class="text">
              {{item.info}}
            </div>
           </div>
        </div>
			</div>
		</div>
  </div>
</template>

<script>
import Split from '../split/Split'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      seller:{
          "id": 495579,
		"status": 1,
		"status_desc": "",
		"name": "深圳麦当劳明智餐厅",
		"call_center": "4000517117",
		"address": "广东省深圳市宝安区明治大道潜龙鑫茂花园",
		"pic_url": "http://p0.meituan.net/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg",
		"shipping_time": "00:00-04:45,05:00-10:15,10:30-23:59",
		"shipping_fee": 9,
		"min_price": 0,
		"bulletin": "",
		"wm_poi_score": 4.7,
		"in_time_delivery_percent": 100,
		"in_time_delivery_percent_ranking": 85,
		"avg_accept_order_time": 0,
		"avg_accept_order_time_ranking": 0,
		"avg_delivery_time": 30,
		"avg_delivery_time_ranking": 80,
		"comment_num": 3683,
		"discounts2": [
			{
				"id": 1,
				"type": 4,
				"info": "新用户立减17元,首次使用银行卡支付最高再减3元(在线支付专享)",
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"use_icon_from_server": 1,
				"display_code": 2,
				"sequence": 3
			}
		],
		"app_delivery_tip": "由 商家 提供配送服务",
		"warn_tips": "",
		"support_pay": 1,
		"invoice_support": 1,
		"remind_count": 0,
		"remind_tip": "",
		"is_favorite": 0,
		"show_info": [
			{
				"name": "商家评分",
				"value": "4.7",
				"unit": "分",
				"is_score": true
			}, {
				"name": "平均速度",
				"value": "30",
				"unit": "分钟",
				"is_score": false
			}, {
				"name": "及时送达",
				"value": "100",
				"unit": "%",
				"is_score": false
			}
		],
		"poi_env": {
			"show": true,
			"thumbnails_url": "http://qcloud.dpfile.com/pc/gTO6A5LeLS5261jz3tXDJJtaoD68aUKQtaxTW05Tv7OvUfSEWLnOs9Vq_Gu0SkrY.jpg",
			"thumbnails_url_list": [
				"http://qcloud.dpfile.com/pc/gTO6A5LeLS5261jz3tXDJJtaoD68aUKQtaxTW05Tv7OvUfSEWLnOs9Vq_Gu0SkrY.jpg",
				"http://qcloud.dpfile.com/pc/WPuraHOicibBVvxsMUj-OCjWBwgRN4e4_EL-E3yjMNmzfVCCtPUsYgnfMCmskRnK.jpg",
				"http://qcloud.dpfile.com/pc/6A4fSAuB8m3n9610XbtYMfzjkC3x8Q0u5Cf7dtqxgk0xG7cJk6iqLUc2dQ6mGxcb.jpg",
				"http://qcloud.dpfile.com/pc/Qi3zJi6p0klBQ4pBlsl5DQYYX9vOUoSE3k3GrPT5UAuvUfSEWLnOs9Vq_Gu0SkrY.jpg",
				"http://qcloud.dpfile.com/pc/ir519cxeS7EPSrTwvR0h19m4KMsu9DJcXjKQbCkRx9SZh2w0o7tajrtydIYlPtkv.jpg",
				"http://qcloud.dpfile.com/pc/GKP7RuBzjUSU27vkqDRA04njqVJ6dkz7jTUFSQIYJqVoa32pj_cACV1FTkIDfbG_.jpg"
			]
		},
		"share_tip": {
			"description": "商家配送范围有限，建议分享给您附近的朋友",
			"description_icon": "",
			"share_button_icon": "",
			"activity_id": 0,
			"share_info": {
				"icon": "http://p0.meituan.net/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg",
				"title": "深圳麦当劳明智餐厅",
				"content": "美团外卖深圳麦当劳明智餐厅给你送货上门的温暖",
				"url": "http://i.waimai.meituan.com/external/poi/347438072889811?utm_source=5801&wmi_from=cpoiinfo&user_id=0",
				"weixin_url": "pages/external/poi?poi_id=347438072889811&user_id=0&utm_source=7004"
			}
		},
		"latitude": 22609759,
		"longitude": 114043619,
		"distance": "2.1km",
		"shipping_fee_tip": "配送 ¥9",
		"min_price_tip": "起送 ¥0",
		"delivery_time_tip": "30分钟",
		"poi_sell_status": 1,
		"head_pic_url": "http://p0.meituan.net/xianfu/19c002c5963a289206e756092995a2fe230070.jpg",
		"promotion_head_pic_url": "",
		"poi_service": [
			{
				"icon": "http://p1.meituan.net/aichequan/f56b8bdf3c63622acc95eac7388c1bf8946.png",
				"content": "可开发票"
			}
		]
      }
    }
  },
  created(){
          this.$nextTick(() => {
            if(this.seller.poi_env.thumbnails_url_list){
              let imgW = this.$refs.picsItem[0].clientWidth
              let marginR = 20
              let width = (imgW + marginR) * this.seller.poi_env.thumbnails_url_list.length
              this.$refs.picsList.style.width = width + "px"

              this.scroll = new BScroll(this.$refs.picsView,{
                scrollX:true
              })
            }

            this.sellerView = new BScroll(this.$refs.sellerView)
          })
  },
  mounted(){
	  
  },
  components:{
    Split
  }
}
</script>

<style scoped>
.seller {
		position: absolute;
		left: 0;
		top: 4rem;
		bottom: 0px;
		width: 100%;
		background: #F4F4F4;
		overflow: hidden;
	}
	
	.seller .seller-wrapper {
		background: white;
		font-weight: 500;
	}
	
	.seller .seller-wrapper .seller-view {
		padding-left: .2rem;
	}
	
	.seller .seller-wrapper .seller-view .address-wrapper {
		display: flex;
		padding: .3rem 0;
		border-bottom: .03rem solid #F4F4F4;
	}
	
	.seller .seller-wrapper .seller-view .address-wrapper .address-left {
		flex: 1;
		background: url(address.png) no-repeat left center;
		padding-left: .5rem;
		padding-right: .5rem;
		background-size: .3rem .4rem;
		font-size: .3rem;
		line-height: .4rem;
	}
	
	.seller .seller-wrapper .seller-view .address-wrapper .address-right {
		flex: 0 0 .8rem;
		background: url(line.png) no-repeat center center;
		background-size: 0 .8rem;
		padding-right: .4rem;
		margin-left: .3rem;
	}
	
	.seller .seller-wrapper .seller-view .address-wrapper .address-right .content {
		width: 100%;
		height: 100%;
		background: url(phone.png) no-repeat center center;
		background-size: .4rem .4rem;
	}
	
	.seller .seller-wrapper .seller-view .pics-wrapper {
		padding: .3rem 0;
		overflow: hidden;
		border-bottom: .03rem solid #F4F4F4;
		white-space: nowrap;
	}
	
	.seller .seller-wrapper .seller-view .pics-wrapper .pics-list {}
	
	.seller .seller-wrapper .seller-view .pics-wrapper .pics-list .pics-item {
		display: inline-block;
		margin-right: .2rem;
		width: 1.8rem;
		height: 1.4rem;
	}
	
	.seller .seller-wrapper .seller-view .pics-wrapper .pics-list .pics-item img {
		width: 100%;
		height: 100%;
		border-radius: 2px;
	}
	
	.seller .seller-wrapper .seller-view .safety-wrapper {
		padding: .2rem .15rem .2rem .4rem;
		background: url(safety.png) no-repeat left center;
		background-size: .3rem .3rem;
		font-size: .3rem;
		line-height: .6rem
	}
	
	.seller .seller-wrapper .seller-view .safety-wrapper span {
		float: right;
		font-size: .5rem;
	}
	
	.seller .seller-wrapper .tip-wrapper {
		padding: .2rem 0 .2rem .25rem;
	}
	
	.seller .seller-wrapper .tip-wrapper .delivery-wrapper {
		background: url(delivery.png) no-repeat left center;
		background-size: .25rem .25rem;
		padding: .2rem 0 .2rem .4rem;
		font-size: .3rem;
		line-height: .4rem;
		border-bottom: .03rem solid #F4F4F4;
	}
	
	.seller .seller-wrapper .tip-wrapper .shipping-wrapper {
		background: url(time.png) no-repeat left center;
		padding: .3rem 0 .1rem .4rem;
		background-size: .25rem .25rem;
		font-size: .26rem;
		line-height: .4rem;
	}
	
	.seller .seller-wrapper .other-wrapper {
		padding-left: .25rem;
	}
	
	.seller .seller-wrapper .other-wrapper .server-wrapper {
		background: url(server.png) no-repeat left center;
		background-size: .25rem .25rem;
		padding: .2rem 0 .2rem .4rem;
		font-size: .25rem;
		border-bottom: .03rem solid #F4F4F4;
		line-height: .4rem;
	}
	
	.seller .seller-wrapper .other-wrapper .server-wrapper .poi-server {
		display: inline-block;
		line-height: .4rem;
		margin-left: 17px;
	}
	
	.seller .seller-wrapper .other-wrapper .server-wrapper .poi-server img {
		width: .3rem;
		height: .3rem;
		margin-right: .03rem;
		display: inline-block;
		vertical-align: middle;
	}
	
	.seller .seller-wrapper .other-wrapper .discounts-wrapper {
		padding: .2rem .2rem .2rem 0;
	}
	
	.seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item {
		display: flex;
	}
	
	.seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .icon {
		flex: 0 0 .5rem;
		padding-top: .1rem;
	}
	
	.seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .icon img {
		width: .35rem;
		height: .35rem;
	}
	
	.seller .seller-wrapper .other-wrapper .discounts-wrapper .discounts-item .text {
		flex: 1;
		font-size: .28rem;
		line-height: .5rem
	}
</style>
