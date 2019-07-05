<template>
<div class='address-content'>
    <a href="#" v-if="flag">
        <img :src="imgUrl" alt="">
    </a>
    <!-- /显示收货地址 -->
     <!-- 显示收货地址 -->
    <div class="address-view" v-if="!flag">
      <div class="address-card" v-for="(address,index) in allAddress" :key="index">
        <div class="address-card-select">
          <i class="iconfont" v-if="selectIndex == index">&#xe620;</i>
        </div>

        <div class="address-card-body" @click="setAddressInfo(address,index)">
          <p class="address-card-address">
            <span class="tag" v-if="address.tag">{{address.tag}}</span>
            <span class="address-text">{{address.address}}</span>
          </p>
          <p class="address-card-title">
            <span class="username">{{address.name}}</span>
            <span v-if="address.sex" class="gender">{{address.sex}}</span>
            <span class="phone">{{address.phone}}</span>
          </p>
        </div>
        <div class="address-card-edit">
          <i @click="handleEdit(address)" class="iconfont" >&#xe786;</i>
        </div>
      </div>
    </div>
</div>
</template>

<script>

export default {
components: {},
data() {
    return {
      selectIndex:0,
        flag:false,
        imgUrl:require('../../../assets/minePic/address.png'),
        // allAddress:[],
        addressInfo:{
        name:"",
        tag:"",
        sex:"",
        phone:"",
        address:"",
        bottom:"",
    }
    };
},
<<<<<<< HEAD
  computed: {

  },
watch: {},
  beforeRouteEnter(to,from,next){
      next(vm=>vm.getData())
  },
methods: {
    getData(){
        //请求数据
        var use_token=localStory.getItem(mt_login)
				// 获取token验证是否是登录状态
       
       this.$axios.get('/user/address/?token='+use_token)

        .then(res=>{
					console.log(res)
             // this.allAddress=res.data
         })
        .catch(err=>{

         })
      this.allAddress.push({ name:"heello",
        tag:"公司",
        sex:"男士",
        phone:"18821687723",
        address:"西安高新区",
        bottom:"2109",
    })
     
=======
computed: {
   orderInfo() {
      return this.$store.getters.orderInfo;
>>>>>>> 4ddf17e39e6eb39feff5392ed578f910034ce65a
    },
},
props:{
  allAddress:{}
},
methods: {
   
    handleEdit(address){
      // console.log(address)
        this.$router.push({
            name:'PlusAddress',
            params:{
                iconfont:'&#xe61a;',
                title:'编辑收货地址',
                addressInfo:address
            }
        })
    },
    setAddressInfo(address,index){
        this.selectIndex=index;
        //将address存储到vuex中
        this.$store.dispatch("setUserInfo",address)
        if(this.orderInfo){
          this.$router.push("/settlement")
        }
        
    }
},

created(){
    
}
}
</script>
<style  scoped>
.iconfont{
  font-size: .3rem;
  color:#f79606;
}
.address-content{
    margin-top: .08rem;
    flex: 1;
    background: #fff;
    /* text-align: center; */
}
.address-content img{
    width: 3rem;
    margin: auto;
}
.address-view {
  height: 100%;
  overflow-y: auto;
  padding-bottom: .1rem;
}
.address-card {
  background-color: #fff;
  padding: .2rem .5rem;
  border-bottom: 1px solid #ddd;
  display: flex;
}
.address-card-body {
  flex: 1;
  width: 3rem;
  margin-left:.2rem;
 
}
.address-card-title {
  font-size: .3rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.address-card-title .username {
  color: #333;
  /* font-weight: 700; */
}
.address-card-title .gender {
  padding: 0 .2rem 0 .2rem;
}
.address-card-address {
  color: #666;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
}
.address-card-address .tag {
  display: inline-block;
  position: relative;
  margin-right: .2rem;
  padding: 0.05rem 0.22rem 0.05rem;
  color: #f79606;
  white-space: nowrap;
  /* border: 1px solid #ff5722; */
  /* border-radius: .1rem; */
  font-size: 0.3rem !important;
  line-height: .3rem;
  background: #f8dbaf;
}
.address-text {
  line-height: .6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 编辑和删除 */
.address-card-edit {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.address-card-edit > i {
  color: #aaa;
  font-size: .4rem;
}

</style>