<template>
  <div class="test">
    <div class="test_header">
      <div class="test_header_left">
      <span class="iconfont" @click="$router.back()">&#xe607;</span>
      </div>
      <div class="test_header_right">
      <input type="text" placeholder="我呀便当 满15减12" readonly="readonly">
      <span class="iconfont">&#xe661;</span>
      </div>
    </div>
    <div class="scroll">
         <!-- 分类列表 -->
      <div class="scrollMenu" ref="menuScroll">
        <ul>
          <li v-for="(items,index) in menus" :key="index" 
          :class="{'active':currentIndex === index}"
           @click="slide(index)">{{items}}</li>
        </ul>
      </div>

       <!-- 商品列表  -->
      <div class="listMenu" ref="foodScroll">
        <ul>
            <li v-for="(items,index) in foods" class="food-list-hook" :key="index">
                <h3 class="name">
                  <div class="name_div">{{items.name}}</div>
                <div class="name_icon">
                  <span>去频道</span>
                  <span class="iconfont">&#xe733;</span>
                </div>
                </h3>
                <!-- 具体分类列表 -->
                <ul class="goodsName">
                    <li v-for="(items,index) in items.foodsList" :key="index" @click="$router.push('/superior')">
                        <a class="producy">
                          <img :src="items.img">
                          <span>{{items.title}}</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "test",
  components: {

  },
  data() {
    return {
        listHeight:[],
        menuScroll:{},
        foodScroll:{},
        scrollY:0,
        data:{}, 
      menus: [
        "美食",
        "甜点饮品",
        "超市便利",
        "蔬菜水果",
        "送药上门",
        "浪漫鲜花",
        "早餐",
        "正餐优选",
        "夜宵",
				"面包蛋糕",
				"汉堡披萨",
				"日韩料理",
				"家常菜",
				"快餐简餐",
				"小吃馆"
      ],
      foods:[
        {
            "name":"美食",
            "foodsList":[
                {
                    "img": "http://p0.meituan.net/720.0.100/jungle/7448ec45e26edb34d327121ad7bfdb2111426.png.webp",
                    "title": "快餐便当"
                  },
                  {
                    "img": "http://p0.meituan.net/720.0.100/jungle/12a331ee952b227b871490b7acd860f913252.png.webp",
                    "title": "汉堡薯条"
                  },
                  {
                    "img":
                    "http://p1.meituan.net/720.0.100/jungle/7deda5e9f33520b51e26236eaf2f389013347.png.webp",
                    "title": "意面披萨"
                  },
                  {
                    "img":"http://p0.meituan.net/720.0.100/jungle/1b5d577b7939d820761e1db3d7300f6a14954.png.webp",
                    "title": "包子粥店"
                  },
                  {
                    "img":"http://p0.meituan.net/720.0.100/jungle/57eec0d1a46db45e5266612678d4d39e12752.png.webp",
                    "title": "米粉面馆"
                  },
                  {
                    "img":"http://p0.meituan.net/720.0.100/jungle/4080be491d2b2d7de798e180599e0e4214296.png.webp",
                    "title": "饺子馄饨"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/67cd87b3a05a47166d4737e435e1bb0a11858.png.webp",
                    "title": "麻辣烫"
                  },
                  {
                    "img":"http://p0.meituan.net/720.0.100/jungle/4fc98cf7db4dcb2ee31f2d564885e08614588.png.webp",
                    "title": "川湘菜"
                  },
                  {
                    "img":"http://p0.meituan.net/720.0.100/jungle/1acaf0582e559ed4d672364045dac7be15629.png.webp",
                    "title": "地方菜系"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/627aa3cb850eb6c8c1631933804f13b110938.png.webp",
                    "title": "炸鸡炸串"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/b6dbdac0ca7156c8078bbf12e645d36010674.png.webp",
                    "title": "特色小吃"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/831b99f5a2642c10fabb5f638feef7e915759.png.webp",
                    "title": "夹馍饼类"
                  },
                  {
                    "img":"http://p0.meituan.net/720.0.100/jungle/9f166db86b479477185bc07dc5dea2c911202.png.webp",
                    "title": "鸭脖卤味"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/d7c49f79319c3e1956131fc12887f3a59366.png.webp",
                    "title": "日料寿司"
                  },
                  {
                    "img":"http://p0.meituan.net/720.0.100/jungle/61c3ba422200ac7f81a0ac9c4da38c4811954.png.webp",
                    "title": "韩式料理"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/2e74f8e22906ad5699ffbd3ed922d1e513445.png.webp",
                    "title": "香锅干锅"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/7e4f57b155c11773302c13ceb55eb63f14704.png.webp",
                    "title": "火锅串串"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/f09a63d346afb9f4a78a4a487350217013220.png.webp",
                    "title": "龙虾烧烤"
                  },
                  {
                    "img":"http://p1.meituan.net/720.0.100/jungle/75d32dc82c2083fe61297a040f380d4611210.png.webp",
                    "title": "轻食沙拉"
                  },
                  {
                    "img": "http://p0.meituan.net/720.0.100/jungle/f62009a606f67e4fbcf92fdf523a64ba13767.png.webp",
                    "title": "暖胃粉"
                  },
									{
									  "img": "http://p0.meituan.net/720.0.100/jungle/47c973d6aa98fa6c38f4b0324d6a023516150.png.webp",
									  "title": "东南亚菜"
									}
            ]
        },
        {
            "name":"甜点饮品",
            "foodsList":[
                {
                    "img": "http://p0.meituan.net/160.160.100/jungle/ff56fc00777ffcf61c17593632c5923a7455.png.webp",
                    "title": "奶茶果汁"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/1b7e48257cea6114e051973eb346f63815593.png.webp",
                    "title": "可口甜品"
                  },
                  {
                    "img":
                      "http://p0.meituan.net/160.160.100/jungle/eef343a5ef09fc18493cec0e44f0bf1812619.png.webp",
                    "title": "醒脑咖啡"
                  },
                  {
                    "img":
                      "http://p1.meituan.net/160.160.100/jungle/7ebbfa424ffb59149e021bfc31ec90de7060.png.webp",
                    "title": "凉茶冰"
                  },
							]
        },
        {
            "name":"超市便利",
            "foodsList":[
                {
                    "img": "http://p1.meituan.net/160.160.100/jungle/cb8ac6ab7dfb24fd8155291a518303d06880.png.webp",
                    "title": "全部商家"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/ffe77f9e3dc2d93c3f936f4b7e08fe1b5979.png.webp",
                    "title": "生鲜菜场"
                  },
                  {
                    "img":"http://p0.meituan.net/160.160.100/jungle/e7f789d2b191c037d09fd505ea6262905994.png.webp",
                    "title": "闪购优选"
                  }
							]
        },
        {
            "name":"蔬菜水果",
            "foodsList":[
                {
                    "img": "http://p1.meituan.net/160.160.100/jungle/1a247796d24f6c1ecdfc0e3958344bdc5244.png.webp",
                    "title": "全部商家"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/bf30efa7b16233c2aa518770aaf3ef324454.png.webp",
                    "title": "水果"
                  },
                  {
                    "img":"http://p0.meituan.net/160.160.100/jungle/38920c065e94fc21218d97d0ed19dd6a11276.png.webp",
                    "title": "食材"
                  },
                  {
                    "img":"http://p0.meituan.net/160.160.100/jungle/8e4020c7a3d2c8bb9ccac38bbbe0e8089900.png.webp",
                    "title": "果切"
                  }
            ]
        },
        {
            "name":"送药上门",
            "foodsList":[
                {
                    "img": "http://p0.meituan.net/160.160.100/jungle/eb4968866585dad9feb3dc5e4c6762f511495.png.webp",
                    "title": "常用药品"
                  }
							]
        },
        {
            "name":"浪漫鲜花",
            "foodsList":[
                 {
                    "img": "http://p1.meituan.net/160.160.100/jungle/cec76de8fa403ebfbef8d22f3568d48631149.png.webp",
                    "title": "全部门店"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/2a1f4f05a1b14a51b53246ffac5cd0ba35975.png.webp",
                    "title": "品质甄选"
                  },
                  {
                    "img":"http://p0.meituan.net/160.160.100/jungle/ce2c0661fc408a12420823d80f82bc1029274.png.webp",
                    "title": "多肉绿植"
                  }
							]
        },
        {
            "name":"早餐",
            "foodsList":[
                {
                    "img": "http://p1.meituan.net/160.160.100/jungle/86a42403d8b4a38e891ec6e74af5d9a48927.png.webp",
                    "title": "全部"
                  },
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/c4f4438f1ebbc6bccb11952905369ab815784.png.webp",
                    "title": "包子粥店"
                  },
                  {
                    "img":
                      "http://p1.meituan.net/160.160.100/jungle/878b12cd12773f508a033715df73a20917164.png.webp",
                    "title": "米粉面馆"
                  },
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/16a518b9f89fc00813868ea090d2ffa613671.png.webp",
                    "title": "饺子馄饨"
                  },
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/c6c87f80926a4dc1496a3d6faa9a1dbc15582.png.webp",
                    "title": "地方小吃"
                  },
                  {
                    "img":
                      "http://p1.meituan.net/160.160.100/jungle/67345c946d57a7addff4f3860814875c11459.png.webp",
                    "title": "豆浆饼类"
                  },
                  {
                    "img": "http://p0.meituan.net/720.0.100/jungle/eef343a5ef09fc18493cec0e44f0bf1812619.png.webp",
                    "title": "醒脑咖啡"
                  },
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/690e0d665884ae2a8220160339d5096315967.png.webp",
                    "title": "汉堡面包"
                  }
							]
        },
        {
            "name":"正餐优选",
            "foodsList":[
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/69735240114d8c7b5474677397d59c1b17953.png.webp",
                    "title": "全部"
                  },
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/713671965e1646f293d6377040a7b7e413278.png.webp",
                    "title": "地方菜系"
                  },
                  {
                    "img":"http://p1.meituan.net/160.160.100/jungle/8c2cf236ce32023de0153cfb3bb3d3ed15061.png.webp",
                    "title": "火锅烧烤"
                  },
                  {
                    "img":"http://p0.meituan.net/160.160.100/jungle/61aee2e371ae10668de0b8e5ee7127bb15823.png.webp",
                    "title": "日韩料理"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/ec8d71f6e56cf1f4af7cdf7822f3f6eb12560.png.webp",
                    "title": "轻食西餐"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/72cdd5536f977a961107f371182aa7a111189.png.webp",
                    "title": "东南亚菜"
                  }
							]
        },
        {
            "name":"夜宵",
            "foodsList":[
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/b93881054403679364973fee5e80cb1013529.png.webp",
                    "title": "全部"
                  },
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/0dda4b01def263e8a24c98bdfe87bd7f9458.png.webp",
                    "title": "热门小炒"
                  },
                  {
                    "img":
                      "http://p1.meituan.net/160.160.100/jungle/16a518b9f89fc00813868ea090d2ffa613671.png.webp",
                    "title": "粥面饺子"
                  },
                  {
                    "img": "http://p1.meituan.net/160.160.100/jungle/8c2cf236ce32023de0153cfb3bb3d3ed15061.png.webp",
                    "title": "龙虾烧烤"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/afe012b345e40b538a6c02409df479c013484.png.webp",
                    "title": "鸭脖小吃"
                  },
                  {
                    "img":
                      "http://p0.meituan.net/160.160.100/jungle/033558d48263963e5a2130ac670b0cd215828.png.webp",
                    "title": "炸鸡汉堡"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/060226a40886501172f9864e552200bc15299.png.webp",
                    "title": "火锅串串"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/3dffede4faf110cad598091c55d825c017283.png.webp",
                    "title": "麻辣烫"
                  },
                  {
                    "img":
                      "http://p0.meituan.net/160.160.100/jungle/f1d736bdb27bb1c04c450ffec2c5b21113288.png.webp",
                    "title": "香锅烤鱼"
                  },
                  {
                    "img": "http://p0.meituan.net/160.160.100/jungle/8e3a98cc04f54c9024ce0a2376348b1612591.png.webp",
                    "title": "意面披萨"
                  }
            ]
        },
				{
				    "name":"面包蛋糕",
				    "foodsList":[
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/6a32901663964fe6409822d56b15d9d412821.png.webp",
				            "title": "全部"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/94829b6414cb4c1d76783f4244cb91bf16348.png.webp",
				            "title": "甜蜜蛋糕"
				          },
				          {
				            "img":
				              "http://p0.meituan.net/160.160.100/jungle/466a96d63b6bdcc321b2811639d9b6e87923.png.webp",
				            "title": "免配送费"
				          },
				          {
				            "img": "http://p1.meituan.net/160.160.100/jungle/b237c5b1d16699ec13fbd4c0d6a511875301.png.webp",
				            "title": "0元起送"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/afe012b345e40b538a6c02409df479c013484.png.webp",
				            "title": "鸭脖小吃"
				          }
				    ]
				},
				{
				    "name":"汉堡披萨",
				    "foodsList":[
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/4e4f8d0a758f310b8dbf107baacbd09815365.png.webp",
				            "title": "全部"
				          },
				          {
				            "img": "http://p1.meituan.net/160.160.100/jungle/0d3131770e4326c3300cd64a03d696a410970.png.webp",
				            "title": "汉堡薯条"
				          },
				          {
				            "img":
				              "http://p0.meituan.net/160.160.100/jungle/8e3a98cc04f54c9024ce0a2376348b1612591.png.webp",
				            "title": "意面披萨"
				          },
				          {
				            "img": "http://p1.meituan.net/160.160.100/jungle/f77cd62f6f2f1e86fd6adc08d02d029017661.png.webp",
				            "title": "低卡沙拉"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/ec8d71f6e56cf1f4af7cdf7822f3f6eb12560.png.webp",
				            "title": "法意牛排"
				          }
							]
				},
				{
				    "name":"日韩料理",
				    "foodsList":[
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/ef2f69bdd45df5d0f984e3cd2c4dbe2917106.png.webp",
				            "title": "全部"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/cfbabd397d11bd67767719e60b7f62389946.png.webp",
				            "title": "日本料理"
				          },
				          {
				            "img":
				              "http://p0.meituan.net/160.160.100/jungle/61aee2e371ae10668de0b8e5ee7127bb15823.png.webp",
				            "title": "韩式简餐"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/033558d48263963e5a2130ac670b0cd215828.png.webp",
				            "title": "低卡沙拉"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/d3791320b324c9f33ee847759ed953d013468.png.webp",
				            "title": "法意牛排"
				          }
							]
				},
				{
				    "name":"家常菜",
				    "foodsList":[
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/fb08b463cf54d3d0d5e80dc265bd750516668.png.webp",
				            "title": "全部"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/6e1d215648eccfa5f61bca511a1cd45012268.png.webp",
				            "title": "日本料理"
				          },
				          {
				            "img":
				              "http://p0.meituan.net/160.160.100/jungle/2671b31ebb347791b291e4c51013cf1113397.png.webp",
				            "title": "韩式简餐"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/1ac4f72ae5cbe165c1f54660a0c37bc517815.png.webp",
				            "title": "低卡沙拉"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/923b034947d0dbd8a171eb4d4e91ec0315163.png.webp",
				            "title": "法意牛排"
				          }
							]
				},
				{
				    "name":"快餐简餐",
				    "foodsList":[
				          {
				            "img": "http://p1.meituan.net/160.160.100/jungle/04004d8ac0241e281f924ce22f03d3ff12635.png.webp",
				            "title": "全部"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/072c421a572c9c6522470babd1a13c7417688.png.webp",
				            "title": "地方菜系"
				          },
				          {
				            "img":"http://p1.meituan.net/160.160.100/jungle/aa408d1920ce0165a94018b27897388314800.png.webp",
				            "title": "火锅烧烤"
				          },
				          {
				            "img":"http://p1.meituan.net/160.160.100/jungle/b93881054403679364973fee5e80cb1013529.png.webp",
				            "title": "日韩料理"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/923b034947d0dbd8a171eb4d4e91ec0315163.png.webp",
				            "title": "轻食西餐"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/72cdd5536f977a961107f371182aa7a111189.png.webp",
				            "title": "东南亚菜"
				          }
							]
				},
				{
				    "name":"小吃馆",
				    "foodsList":[
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/69735240114d8c7b5474677397d59c1b17953.png.webp",
				            "title": "全部"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/53a32641a81bc5d63a15a9e0a92eb6cd15341.png.webp",
				            "title": "地方菜系"
				          },
				          {
				            "img":"http://p1.meituan.net/160.160.100/jungle/419953c34a25bffa1c640125c7f3c12e10767.png.webp",
				            "title": "火锅烧烤"
				          },
				          {
				            "img":"http://p1.meituan.net/160.160.100/jungle/b93881054403679364973fee5e80cb1013529.png.webp",
				            "title": "日韩料理"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/923b034947d0dbd8a171eb4d4e91ec0315163.png.webp",
				            "title": "轻食西餐"
				          },
				          {
				            "img": "http://p0.meituan.net/160.160.100/jungle/72cdd5536f977a961107f371182aa7a111189.png.webp",
				            "title": "东南亚菜"
				          },
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/4080be491d2b2d7de798e180599e0e4214296.png.webp",
									  "title": "饺子馄饨"
									},
									{
									  "img":"http://p1.meituan.net/720.0.100/jungle/67cd87b3a05a47166d4737e435e1bb0a11858.png.webp",
									  "title": "麻辣烫"
									},
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/4fc98cf7db4dcb2ee31f2d564885e08614588.png.webp",
									  "title": "川湘菜"
									},
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/1acaf0582e559ed4d672364045dac7be15629.png.webp",
									  "title": "地方菜系"
									},
									{
									  "img":"http://p1.meituan.net/720.0.100/jungle/627aa3cb850eb6c8c1631933804f13b110938.png.webp",
									  "title": "炸鸡炸串"
									},
									{
									  "img":"http://p1.meituan.net/720.0.100/jungle/b6dbdac0ca7156c8078bbf12e645d36010674.png.webp",
									  "title": "特色小吃"
									},
									{
									  "img": "http://p1.meituan.net/160.160.100/jungle/0d3131770e4326c3300cd64a03d696a410970.png.webp",
									  "title": "汉堡薯条"
									},
									{
									  "img":
									    "http://p0.meituan.net/160.160.100/jungle/8e3a98cc04f54c9024ce0a2376348b1612591.png.webp",
									  "title": "意面披萨"
									},
									{
									  "img": "http://p1.meituan.net/160.160.100/jungle/f77cd62f6f2f1e86fd6adc08d02d029017661.png.webp",
									  "title": "低卡沙拉"
									},
									{
									  "img": "http://p0.meituan.net/160.160.100/jungle/ec8d71f6e56cf1f4af7cdf7822f3f6eb12560.png.webp",
									  "title": "法意牛排"
									},
									{
									  "img": "http://p0.meituan.net/720.0.100/jungle/12a331ee952b227b871490b7acd860f913252.png.webp",
									  "title": "汉堡薯条"
									},
									{
									  "img":
									  "http://p1.meituan.net/720.0.100/jungle/7deda5e9f33520b51e26236eaf2f389013347.png.webp",
									  "title": "意面披萨"
									},
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/1b5d577b7939d820761e1db3d7300f6a14954.png.webp",
									  "title": "包子粥店"
									},
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/57eec0d1a46db45e5266612678d4d39e12752.png.webp",
									  "title": "米粉面馆"
									},
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/4080be491d2b2d7de798e180599e0e4214296.png.webp",
									  "title": "饺子馄饨"
									},
									{
									  "img":"http://p1.meituan.net/720.0.100/jungle/67cd87b3a05a47166d4737e435e1bb0a11858.png.webp",
									  "title": "麻辣烫"
									},
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/4fc98cf7db4dcb2ee31f2d564885e08614588.png.webp",
									  "title": "川湘菜"
									},
									{
									  "img":"http://p0.meituan.net/720.0.100/jungle/1acaf0582e559ed4d672364045dac7be15629.png.webp",
									  "title": "地方菜系"
									},
									{
									  "img":"http://p1.meituan.net/720.0.100/jungle/627aa3cb850eb6c8c1631933804f13b110938.png.webp",
									  "title": "炸鸡炸串"
									},
									{
									  "img":"http://p1.meituan.net/720.0.100/jungle/b6dbdac0ca7156c8078bbf12e645d36010674.png.webp",
									  "title": "特色小吃"
									},
							]
				}
    ]
    };
  },
  methods:{
      initScroll(){
         this.menuScroll = new BScroll(this.$refs.menuScroll,{
            click:true,//默认false 设置为true  onclick事件才可以执行
         })
         this.foodScroll = new BScroll(this.$refs.foodScroll,{
            probeType:3,
            click:true,
         }) 
         //foodScroll监听事件
         this.foodScroll.on("scroll",(pos) => {
          //  console.log(pos.y)
          this.scrollY = Math.abs(Math.round(pos.y))
          // console.log(this.scrollY)

         })
      },
      calculateHeight(){
        let foodList = this.$refs.foodScroll.getElementsByClassName("food-list-hook")
        // console.log(foodList)
        let height = 0 ;
        this.listHeight.push(height)

        for(let i = 0; i < foodList.length; i++){
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
        // console.log(this.listHeight)
      },
      slide(index){
        // console.log(index)
        let foodList = this.$refs.foodScroll.getElementsByClassName("food-list-hook")
        let element =foodList[index]
        // console.log(element)
        //滚动到对应元素位置  使用better的默认方法
        this.foodScroll.scrollToElement(element,250)
      }
  },
  created(){
		
    this.$nextTick(()=>{
          // 执行滚动方法
        this.initScroll()       
        // 计算分类区间高度
        this.calculateHeight()
        // 监听滚动位置
        // 根据滚动位置确定下标与左侧对应
        // 通过下标实现点击左侧滚动右侧
    })
  },
  computed:{
    currentIndex(){
    for(let i = 0; i<this.listHeight.length; i++){
      // 获取商品区间
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i+1]
        // console.log(i)
        // 是否在上述区间
        if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
        //  console.log(i)
         return i;
        }
      }
      return 0
    }
  }
};
</script>

<style scoped>

.active{
  color: #ff7300;
  font-size: .34rem !important;
  background: #eee !important;
}
.scroll {
  width: 100%;
  display: flex;
  position: absolute;
  top: 1rem;
  bottom: .1px;
	overflow: hidden;
}
.name{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 100;
  height: 1rem;
}

.name_icon{
  display: flex;
  align-items: center;
}
.name_icon span:last-child{
  font-size: .4rem;
  color: rgb(58, 56, 56);
  font-weight: 900;
}
.name_icon span:first-child{
  font-size: .25rem;
  color: rgb(133, 130, 130);
}
.test{
  background: #eee;
}
.scrollMenu {
  width: 20%;
}
.scrollMenu ul {
  width: 100%;
  background: #fff;
}
.scrollMenu ul li {
  width: 100%;
  height: 0.9rem;
  text-align: center;
  line-height: 0.8rem;
  background: #fff;
  font-size: .25rem;
  border-bottom: .02rem solid #eee;
}

.listMenu{
  flex: 1;
  background: #eee;
  text-align: center;
  overflow: hidden;
  font-size: .3rem;
  padding: .2rem;
}
.listMenu>ul{
  width: 100%;
}
.listMenu>ul>li{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.goodsName{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: .1rem;
}
.goodsName>li{
  width: 33%;
  height: 1.8rem;
  font-size: .25rem;
  padding-top: .15rem;
}
.producy{
  width: 100%;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
}
.producy>img{
  width: 1.2rem;
  margin-bottom: .1rem;
}
.listMenu>ul>li>h3{
  width: 100%;
  font-weight: 100;
}
.test_header{
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  background: #fff;
}

.test_header_left{
  width: 10%;
  padding-left: .2rem;
}
.test_header_left span{
  font-size: .4rem;
}
.test_header_right{
  width:90%;
  padding: 0 .4rem 0 .2rem;
  position: relative;
}
.test_header_right input{
  width: 100%;
  height: .6rem;
  background: rgb(243, 243, 243);
  border-radius: .1rem;
  outline: none;
  border: 0;
  font-size: .25rem;
  text-indent: .7rem;
}
.test_header_right span{
  position: absolute;
  font-size: .35rem;
  left: .4rem;
  top: .11rem;
}
</style>

