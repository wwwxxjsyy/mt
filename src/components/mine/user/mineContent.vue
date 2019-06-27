<template>
  <div>
    <div class="mine-function">
      <div class="mine-title">
        <p>我的功能</p>
      </div>
      <div class="mine-list">
        <ul>
          <li v-for="(item,index) in funList" :key="index">
            <router-link :to="item.path" tag="a">
              <img :src="item.url" alt>
              <span>{{item.desc}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 我的服务 -->
    <div class="mine-function">
      <div class="mine-title">
        <p>我的服务</p>
      </div>
      <div class="mine-list">
        <ul>
          <li v-for="(item,index) in serList" :key="index">
            <router-link :to="item.path" tag="a">
              <img :src="item.url" alt>
              <span>{{item.desc}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 更多推荐 -->
    <div class="mine-function">
      <div class="mine-title">
        <p>更多推荐</p>
      </div>
      <div class="mine-list">
        <ul>
          <li v-for="(item,index) in morList" :key="index">
            <router-link :to="item.path" tag="a">
              <img :src="item.url" alt>
              <span>{{item.desc}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      funList: [
        {
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "我的地址",
          path:'/Address'
        },
        {
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "我的足迹",
          path:'/'
        },
        {
          url:  require("../../../assets/minePic/funlistimg.gif"),
          desc: "我的收藏",
          path:'/Collection'
        },
        {
          url:  require("../../../assets/minePic/funlistimg.gif"),
          desc: "答谢记录",
          path:'/'
        },
        {
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "我的评价",
          path:'/'
        },
        {
          url:require("../../../assets/minePic/funlistimg.gif"),
          desc: "我的袋鼠",
          path:'/'
        }
      ],
      serList: [
        {
          url:  require("../../../assets/minePic/funlistimg.gif"),
          desc: "帮助与反馈",
          path:'/'
        },
        {
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "客服中心",
          path:'/'
        }
      ],
      morList: [
        {
          url:require("../../../assets/minePic/funlistimg.gif"),
          desc: "邀请有奖",
           path:'/'
        },
        {
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "商家入驻",
           path:'/'
        },
        {
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "骑手招募",
           path:'/'
        },
        {
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "我要合作",
           path:'/'
        },
        {
          url:require("../../../assets/minePic/funlistimg.gif"),
          desc: "美团公益",
           path:'/'
        },{
          url: require("../../../assets/minePic/funlistimg.gif"),
          desc: "能量捐赠",
           path:'/'
        }
      ]
    };
  }
};
</script>
<style  scoped>
.mine-function {
  width: 100%;
  height: 100%;
  padding: 0.38rem 0.4rem 0.53rem 0.38rem;
  background: #fff;
  border-radius: 0.18rem;
  overflow: hidden;
  margin-bottom: 0.38rem;
}
.mine-function .mine-title {
  font-size: 0.35rem;
  margin-bottom: 0.3rem;
}
.mine-function .mine-title p {
  color: #30302e;
  font-weight: bolder;
  padding-left: 0.12rem;
}
.mine-list ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: 0.98rem;
  /* float: left; */
}
.mine-function .mine-list ul > li {
  /* float: left; */
  width: 25%;
  padding: 5px 0;
  text-align: center;
}
.mine-function .mine-list ul > li:last-child {
  margin-bottom: 0;
}
.mine-function .mine-list ul > li a {
  width: 1.6rem;
}
.mine-function .mine-list > ul > li > a > img {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 auto;
  margin-bottom: 0.18rem;
}
.mine-function .mine-list ul > li > a > span {
  display: block;
  color: #303030;
  font-weight: bold;
  font-size: 0.25rem;
  text-align: center;
  margin-bottom: 0.18rem;
}
</style>