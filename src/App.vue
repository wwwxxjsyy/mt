<template>
  <div id="app"  >
    <router-view />
    <Mt-TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from "./components/common/tabBar.vue"

export default {
  name: 'App',
  components:{
    "Mt-TabBar":TabBar
  },
  data(){
    return{
      flag:false
    }
  },
  methods: {
    getlocation(){
      var self=this
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
              
      })

      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', onComplete)
      AMap.event.addListener(geolocation, 'error', onError)

      function onComplete (data) {
        // data是具体的定位信息 精准定位
        console.log(data);
        // 存储定位信息
        self.$store.dispatch("setLocation",data);
        self.$store.dispatch("setAddress",data.formattedAddress);
      }

      function onError (data) {
        // 定位出错
        // console.log(data)
        //获取经纬度
        self.getLngLatLocation()
      }
    })
    },
    getLngLatLocation(){
          var self=this
          AMap.plugin('AMap.CitySearch', function () {
          var citySearch = new AMap.CitySearch()
          citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              console.log(result)
              //根据经纬度获取定位
              AMap.plugin('AMap.Geocoder', function() {
                var geocoder = new AMap.Geocoder({
                  // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                  city: result.adcode
                })
              
                var lnglat = result.rectangle.split(";")[0].split(",")

                geocoder.getAddress(lnglat, function(status, data) {
                  if (status === 'complete' && data.info === 'OK') {
                      // result为对应的地理位置详细信息
                      // console.log(data)
                      self.$store.dispatch("setLocation",{
                        addressComponent:{
                          city:result.city,
                          province:result.province
                        },
                        formattedAddress:data.regeocode.formattedAddress
                      });
                      self.$store.dispatch("setAddress",data.regeocode.formattedAddress);
                  }
                })
              })
          }
          })
        })
      }
  },
  //网页一打开就有定位
  created(){
    this.getlocation()
  },
  // mounted(){
  //   this.http.post('api/home/',).then(res=>{
  //     console.log(res)
  //   })
  // }
}
</script>

<style>
#app {
  font-family: "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 解决苹果滑动卡顿问题king */
  -webkit-overflow-scrolling: touch;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: scroll;
  /* background: #fff; */
}
</style>
