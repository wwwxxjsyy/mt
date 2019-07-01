<template>
    <div class="address">
        <Header title="选择收货地址" :isLeft="true"/>
        <div class="city_search">
            <div class="search">
                <span class="city" @click = "$router.push('/city')">
                    <i class="iconfont">&#xe63a;</i>
                    {{city}}
                    <i class="iconfont">&#xe605;</i>
                </span>
                <span class="search_box">
                <i class="iconfont">&#xe661;</i>
                <input type="text" v-model="search_val" placeholder="请输入收货地址">
                </span>
            </div>
            <Location :address="address" @click="selectAddress"/>
            <div class="area">
                <ul class="area_list" v-for="(item,index) in areaList" :key="index">
                    <li @click="selectAddress(item)">
                        <b>{{item.name}}</b>
                        <p>{{item.district}}{{item.address}}</p>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
import Header from "./mt-home-select-address-header"
import Location from "./mt-home-location"

export default {
    name:"SelectAddress",
    components:{
        Header,
        Location
    },
    beforeRouteEnter(to,from,next){
        // console.log(to)
        next(vm=>{
            vm.city=to.params.city
        })
    },
    data(){
        return {
           city:"西安",//当前城市
           search_val:"",
           areaList:[] 
        }
    },
    computed:{
        address(){
            return this.$store.getters.location.formattedAddress
        }
    },
    watch:{
        search_val(){
            this.searchPlace()
        }
    },
    methods:{
        searchPlace(){
            const self = this
            // console.log(this.search_val)
            AMap.plugin('AMap.Autocomplete', function(){
            // 实例化Autocomplete
                var autoOptions = {
                    //city 限定城市，默认全国
                    city: self.city
                }
                var autoComplete= new AMap.Autocomplete(autoOptions);
                autoComplete.search(self.search_val, function(status, result) {
                    // 搜索成功时，result即是对应的匹配数据
                    console.log(result)
                    self.areaList = result.tips
                })
            })  
        },
        selectAddress(item){
            if(item){
                //设置地址
            this.$store.dispatch("setAddress",item.district+item.address+item.name)
            
            }else{
                this.$store.dispatch("setAddress",this.address)
                
            }
            //跳转
            this.$router.push("/home")
        }
    }
}
</script>

<style scoped>

.iconfont{
    font-size:.3rem;
}
.city_search {
  background-color: #fff;
  padding: .1rem .2rem;
  color: #333;
}

.search {
  background-color: #eee;
  height: .7rem;
  border-radius: .1rem;
  box-sizing: border-box;
  line-height: .7rem;
  font-size:.3rem;
  color:#333;
}
.search_box{
background-color: #eee;
}
.search .city {
  padding: 0 .1rem;
}
.city i {
  margin-right: .1rem;
}
.search input {
  margin-left: .2rem;
  font-size:.3rem;
  background-color: #eee;
  outline: none;
  border: none;
}
.area {
  margin-top: .2rem;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: .1rem .2rem;
  color: #aaa;
  font-size:.3rem !important
}
.area li b {
  font-weight: bold;
  color: #333;
  margin-bottom: .2rem;
}


</style>
