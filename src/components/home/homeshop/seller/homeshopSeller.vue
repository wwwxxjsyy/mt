<template>
  <div class="seller" ref="sellerView">
    <div class="seller-wrapper">
			<Split></Split>
			<div class="seller-view">
        <div class="address-wrapper">
          <div class="address-left">
            {{seller.data.shop_address}}
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
              v-for="(imgurl,index) in seller.poi_env"
              :key="index"
              >
              <img :src="imgurl.thumbnails_url_list">
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
          配送服务: {{seller.data.app_delivery_tip}}
        </div>

        <div class="shipping-wrapper">
          配送时间: {{seller.data.shop_time}}
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
            v-for="(item,index) in seller.discounts"
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
  data(){
    return {
      seller:{}
    }
  },
	created(){
<<<<<<< HEAD
    this.$axios('/api/shop/store/?shop_id=1')		
		  .then(response =>{
				console.log(response.data.data)
		    if(response.data.code == 200){
			  this.seller = response.data.data
			  console.log(this.seller.poi_env.thumbnails_url_list)
=======
		this.$axios("https://www.easy-mock.com/mock/5d1b24188b8b69552f76273d/example/api/seller")
		// .then(res => {
		// 	  console.log(res)
		//     return res.json()
		//   })
		.then(response =>{
			console.log(response.data)
		    if(response.data.code == 0){
		      this.seller = response.data.data
>>>>>>> f5ecd3d267cb5c6f289a9a60a948600aee71e1c6
		      this.$nextTick(() => {
		        if(this.seller.poi_env.thumbnails_url_list){
		          let imgW = this.$refs.picsItem[0].clientWidth
		          let marginR = 11
		          let width = (imgW + marginR) * this.seller.poi_env.thumbnails_url_list.length
		          this.$refs.picsList.style.width = width + "px"
		          this.scroll = new BScroll(this.$refs.picsView,{
		            scrollX:true
		          })
		        }
		        this.sellerView = new BScroll(this.$refs.sellerView)
		      })
		    }
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
.mint-indicator-wrapper {
	height: 1rem;
}
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
