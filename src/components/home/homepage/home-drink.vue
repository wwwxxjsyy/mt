<template>
    <div class="homedrink" ref="foodScroll">
      <div class="drink">
        <div class="drink-search">
          <span class="iconfont">&#xe607;</span>
          <a>甜点饮品</a>
        </div>
        <div class="inputGroup" ref="headerbg">
          <span class="iconfont">&#xe661;</span>
          <b>请输入商家或者商品名称</b>
        </div>
      </div>
        <div>
          <ul>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
               <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
               <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
            <li>656464644646</li>
          </ul>
        </div>
      <!-- <mt-home-moreshop /> -->
      
    </div>
</template>

<script>
import Moreshop from "../homeIndex/mt-home-moreshop";
import BScroll from "better-scroll";

export default {
  data() {
    return {
        foodScroll:{},
        scrollY:''
    };
  },
  name: "Homedrink",
  components: {
    "mt-home-moreshop": Moreshop
  },
  methods: {
      showIcon() {
        this.scrollTop =  Math.abs(Math.round(document.documentElement.scrollTop))
       
        console.log(this.scrollTop)
        let a =  (0 - this.scrollTop)/100
        let b = 98-(this.scrollTop*0.1)
        // console.log(a)
          if(this.scrollTop>0 && this.scrollTop<70){
                this.$refs.headerbg.style.width = b+'%';
                this.$refs.headerbg.style.position = "fixed";
                this.$refs.headerbg.style.top = a+'rem';
                this.$refs.headerbg.style.left = -a+'rem';
                // this.$refs.headerbg.style.marginRight = 20+'px';
          }
        }
  },
  mounted() {
     document.addEventListener("scroll", this.showIcon);
  }
};
</script>

<style>
.homedrink {
  padding: 0 0.2rem;
}
.drink-search {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  text-align: center;
  position: fixed;
  left: 0;
  top:0; 
}
.drink-search span {
  font-size: 0.4rem;
  /* position: fixed;
  top: 0.2rem;
  left: 0.2rem; */
  float: left;
  margin-left: .1rem;
  line-height: .8rem;
  color: rgb(148, 150, 150);
}
.drink-search a {
  font-size: 0.4rem;
  line-height: 0.5rem;
  color: #ed6b91;
  line-height: .8rem;

}
.inputGroup {
  width:7.1rem;
  margin-top: 0.8rem;
  height: 0.5rem;
  border-radius: 0.1rem;
  background: #ededed;
  display: flex;
}
.inputGroup span {
  width: 0.6rem;
  height: 0.5rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
  padding-left: 0.2rem;
}
.inputGroup b {
  line-height: 0.5rem;
  color: #a7a7a7;
}
</style>
