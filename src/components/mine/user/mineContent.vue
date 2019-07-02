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
          url: 'http://p0.meituan.net/81.81.100/aichequan/ded6c9cc76a05ffc19807ecfc45ff8da3375.png.webp',
          desc: "我的地址",
          path:'/Address'
        },
        {
          url:'http://p0.meituan.net/81.81.100/aichequan/ded6c9cc76a05ffc19807ecfc45ff8da3375.png.webp',
          desc: "我的足迹",
          path:'/'
        },
        {
          url:'http://p0.meituan.net/81.81.100/aichequan/2e1dedd1871066c00db5b3fadd226e542730.png.webp',
          desc: "我的收藏",
          path:'/Collection'
        },
        {
          url: 'http://p0.meituan.net/81.81.100/aichequan/572fc8d9bfdd557e924bee463105682e2390.png.webp',
          desc: "答谢记录",
          path:'/'
        },
        {
          url:'http://p0.meituan.net/81.81.100/aichequan/e76964fc0cf8b793411fae6dfa0433282568.png.webp',
          desc: "我的评价",
          path:'/MyEvalute'
        },
        {
          url:'http://p0.meituan.net/81.81.100/aichequan/a9edea52108aed36bbe7ab43ee431e4b3133.png.webp',
          desc: "我的袋鼠",
          path:'/'
        }
      ],
      serList: [
        {
          url: 'http://p1.meituan.net/81.81.100/aichequan/940870fc2ff927d210349902f067022a3219.png.webp',
          desc: "帮助与反馈",
          path:'/'
        },
        {
          url: 'http://p1.meituan.net/81.81.100/aichequan/d1f8b37f67553f517134022bf04edf722691.png.webp',
          desc: "客服中心",
          path:'/'
        }
      ],
      morList: [
        {
          url:'http://p0.meituan.net/81.81.100/aichequan/f8611a1d4301b850f6e68a70f8235ca92829.png.webp',
          desc: "邀请有奖",
           path:'/'
        },
        {
          url:'http://p0.meituan.net/81.81.100/aichequan/9fadcad7a0689cc5c9a0a54fd23fe4462989.png.webp',
          desc: "商家入驻",
           path:'/'
        },
        {
          url:' http://p1.meituan.net/81.81.100/aichequan/43bf38ae274310d9d993728c4e17912b3188.png.webp',
          desc: "骑手招募",
           path:'/'
        },
        {
          url:'http://p0.meituan.net/81.81.100/aichequan/8ac83a2284e3a45f5e336c5bf9142c3e3426.png.webp',
          desc: "我要合作",
           path:'/'
        },
        {
          url:'http://p1.meituan.net/81.81.100/aichequan/a781cead700fcd53a37edad515e20d773939.png.webp',
          desc: "美团公益",
           path:'/'
        },{
          url:'http://p1.meituan.net/81.81.100/aichequan/a781cead700fcd53a37edad515e20d773939.png.webp',
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