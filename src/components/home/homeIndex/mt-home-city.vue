<template>
	<div class="city">
        <div class="search_wrap">
            <div class="search">
                <i class="iconfont">&#xe661;</i>
                <input type="text" v-model="city_val" placeholder="输入城市名">
            </div>
            <button @click="$router.push({name:'selectAddress',params:{city:city}})">取消</button>
        </div>
        <div v-if="searchList.length==0" style="height:100%">
            <div class="location">
                <location :address="city" @click="selecity({name:city})" />
            </div>
            <Alphabet 
            :cityInfo="cityInfo"
            :keys="keys"
            ref="allcity"
            @selectCity="selectCity"
            />
        </div>
        <div class="search_list" v-else>
            <ul>
                <li @click="selectCity(item)" v-for="(item,index) in searchList" :key="index">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Location from './mt-home-location'
import Alphabet from "./mt-home-alphabet";
import fetch from '../../../api/fetch'
// import axios from 'axios'
export default {
    name:"city",
    components:{
        Location,
        Alphabet,
    },
    data(){
        return {
            city_val:"",
            cityInfo:"",
            keys:[],
            allCities: [],
            searchList:[],
        }
    },
    computed:{
        city(){
            return this.$store.getters.location.addressComponent.city || this.$store.getters.location.addressComponent.city;
        }
    },
    created(){
        this.getcityInfo();
        
    },
    watch:{
        city_val(){
            this.searchCity()
        }
    },
    methods:{
        //获取当前城市
        getcityInfo() {
            this.$axios("https://ele-interface.herokuapp.com/api/posts/cities")
            .then(res => {
            // console.log(res.data);
            this.cityInfo = res.data;
            // console.log(this.cityInfo);
            //处理key,计算key
            this.keys = Object.keys(res.data);
            // console.log(this.keys);
            //"hotCities"这个k需要移除
            this.keys.pop();
            //keys排序
            this.keys.sort();
            //在vue的官网中对ref的介绍有一点特别重要的，尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript
            //里直接访问一个子组件。为了达到这个目的，你可以通过 ref 特性为这个子组件赋予一个 ID 引用。
            //<base-input ref="usernameInput"></base-input>
            //现在在你已经定义了这个 ref 的组件里，你可以使用：this.$refs.usernameInput来访问这个 <base-input> 实例，以便不时之需
            //在这里就用到了这一特性
            //因为要将更新后的数据进行一个展示，所以在vue中提供了一个方法，nextTick（）
            this.$nextTick(() => {
                this.$refs.allcity.initScroll();
            });

            //存储所有城市用来搜索过滤
            this.keys.forEach(key => {
                // console.log(key);
                this.cityInfo[key].forEach(city => {
                this.allCities.push(city);
                });
            });
            })
            .catch(err => {
            console.log(err);
            });
        },
        searchCity() {
            if (!this.city_val) {
                //搜索框为空，则数组置空
                this.searchList = [];
            } else {
                //如果不为空，存到seachlist当中
                this.searchList = this.allCities.filter(item => {
                return item.name.indexOf(this.city_val) != -1;
                });
                // 打印搜索查询的结果
                console.log(this.searchList);
            }
        },
        selectCity(city){
             this.$router.push({ name: 'selectAddress', params: { city: city.name } });
        }
    }
}
</script>

<style scoped>
.iconfont{
    font-size: .3rem;
}
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: .5rem;
  font-size: .3rem;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: .7rem;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: .1rem .2rem;
  display: flex;
  justify-content: space-around;
}
.search {
  background-color: #eee;
  border-radius: .2rem;
  line-height: .4rem;
  width: 85%;
  box-sizing: border-box;
  padding: 0 .2rem;
  
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: .1rem;
  font-size: .25rem;
}
.search_wrap button {
  outline: none;
  border:none;
  background: transparent;
  color: #009eef;
  font-size: .25rem;
}

.location {
  background: #fff;
  padding: .1rem .2rem;
  height: .7rem;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: .1rem .2rem;
}
.search_list li {
  padding: .1rem;
  border-bottom: 1px solid #eee;
}
</style>
