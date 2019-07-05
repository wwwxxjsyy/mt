<template>
   <div class="homeshop">
    <home-header :poiInfo="poiInfo"></home-header>
    <!-- navigation -->
    <home-nav :commentNum="commentNum"></home-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
   </div>
</template>

<script>
import homeshopnav from './nav/homeshopNav'
import homeshopHeader from './header/homeshopHeader'
export default {
    name:"homeShop",
	data(){
	  return{
	    poiInfo:{},
	    commentNum:0
	  }
	},
    components:{
        "home-header":homeshopHeader,
        "home-nav":homeshopnav,
    },
    created(){
    fetch("https://www.easy-mock.com/mock/5d1b24188b8b69552f76273d/example/api/goods")
      .then(res => {
        return res.json()
      })
      .then(response =>{
		  console.log(response)
        if(response.code == 0){
          this.poiInfo = response.data.poi_info
        }
      })

		// 请求ratings
    fetch("https://www.easy-mock.com/mock/5d1b24188b8b69552f76273d/example/api/ratings")
      .then(res => {
        return res.json()
      })
      .then(response =>{
		  console.log(response)
        if(response.code == 0){
          this.commentNum = response.data.comment_num
        }
      })
  }
}
</script>

<style scoped>
  
</style>
