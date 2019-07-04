<template>
  <div class="test">
    <div class="test_header">
      <div class="test_header_left">
      <span class="iconfont">&#xe607;</span>
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
                    <li v-for="(items,index) in items.foodsList" :key="index">
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
        "推荐",
        "男装",
        "女装",
        "男鞋",
        "女鞋",
        "袜品",
        "家居",
        "童装",
        "内衣"
      ],
      foods:[
        {
            "name":"推荐",
            "foodsList":[
                {
                    "img": "http://i1.vanclimg.com/cms/20180411/11aaaaa.jpg",
                    "title": "吉国武"
                  },
                  {
                    "img": "https://mi.vanclimg.com/oms/2019_5_16_15_5_53_46_400x400.jpg",
                    "title": "T恤"
                  },
                  {
                    "img":
                      "https://mi2.vanclimg.com/oms/2019_5_15_15_27_19_8618_400x400.jpg",
                    "title": "短袖衬衫"
                  },
                  {
                    "img":"http://i.vanclimg.com/640/q80/product/6/3/7/6377971/big/6377971-1j201709260833241850.jpg",
                    "title": "休闲衬衫"
                  },
                  {
                    "img":"http://p3.vanclimg.com/product/6/3/7/6375163/mid/6375163-1j201709151925189721.jpg",
                    "title": "水柔棉"
                  },
                  {
                    "img":"https://mi2.vanclimg.com/oms/2019_5_16_15_7_53_8057_400x400.jpg",
                    "title": "牛津纺"
                  },
                  {
                    "img":"http://p2.vanclimg.com/product/6/3/7/6378353/mid/6378353-1j201709090039435468.jpg",
                    "title": "卫衣"
                  },
                  {
                    "img":"http://p4.vanclimg.com/product/6/3/7/6378026/mid/6378026-1j201710121408227822.jpg",
                    "title": "夹克"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6378261/mid/6378261-1j201709211359324069.jpg",
                    "title": "针织衫"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6375651/mid/6375651-1j201709151926288158.jpg",
                    "title": "外套"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6378464/mid/6378464-1j201709221623443761.jpg",
                    "title": "童装"
                  },
                  {
                    "img":"http://p1.vanclimg.com/product/6/3/7/6375440/mid/6375440-1j201709151926140815.jpg",
                    "title": "大衣"
                  },
                  {
                    "img":"http://p2.vanclimg.com/product/6/3/7/6378281/mid/6378281-1j201711031618496576.jpg",
                    "title": "棉服"
                  },
                  {
                    "img":"http://p1.vanclimg.com/product/6/3/7/6375431/mid/6375431-1j201710131712238133.jpg",
                    "title": "羽绒服"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6375237/mid/6375237-1j201609181106554831.jpg",
                    "title": "休闲裤"
                  },
                  {
                    "img":"http://p3.vanclimg.com/product/6/3/7/6375663/mid/6375663-1201702221659421316.jpg",
                    "title": "牛仔裤"
                  },
                  {
                    "img":"https://mi2.vanclimg.com/oms/2019_5_16_14_59_46_8762_400x400.jpg",
                    "title": "帆布鞋"
                  },
                  {
                    "img":"http://p1.vanclimg.com/product/6/3/7/6375869/mid/6375869-1j201703301445582286.jpg",
                    "title": "复古跑"
                  },
                  {
                    "img":"http://p4.vanclimg.com/product/6/3/7/6379070/mid/6379070-1j201710271718344293.jpg",
                    "title": "拖鞋"
                  },
                  {
                    "img": "http://i2.vanclimg.com/cms/20190225/dsxcsd.jpg",
                    "title": "手机壳"
                  }
            ]
        },
        {
            "name":"男装",
            "foodsList":[
                {
                    "img": "http://p2.vanclimg.com/product/6/3/7/6377093/mid/6377093-1j201709181534534139.jpg",
                    "title": "免烫衬衫"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6375076/mid/6375076-1j201709151927340820.jpg",
                    "title": "休闲衬衫"
                  },
                  {
                    "img":
                      "https://mi1.vanclimg.com/oms/2019_5_16_15_5_56_4201_400x400.jpg",
                    "title": "T恤"
                  },
                  {
                    "img":
                      "https://mi2.vanclimg.com/oms/2019_5_15_15_33_14_8658_400x400.jpg",
                    "title": "水洗棉衬衫"
                  },
                  {
                    "img":
                      "https://mi1.vanclimg.com/oms/2019_5_15_15_37_35_3744_400x400.jpg",
                    "title": "牛仔衬衫"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6375493/mid/6375493-1j201704211456159105.jpg",
                    "title": "短袖衬衫"
                  },
                  {
                    "img": "https://mi2.vanclimg.com/oms/2019_5_15_15_57_55_7561_400x400.jpg",
                    "title": "牛津纺"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6374869/mid/6374869-1j201608231026249778.jpg",
                    "title": "polo衫"
                  },
                  {
                    "img":
                      "https://mi.vanclimg.com/oms/2019_5_16_15_11_37_3094_400x400.jpg",
                    "title": "商务衬衫"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6378356/mid/6378356-1j201709090039584376.jpg",
                    "title": "卫衣"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6375166/mid/6375166-1j201709151925342223.jpg",
                    "title": "水柔棉"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6375506/mid/6375506-1j201709181647233777.jpg",
                    "title": "麻衬衫"
                  },
                  {
                    "img":
                      "http://p4.vanclimg.com/product/6/3/7/6375920/mid/6375920-1j201704071346168501.jpg",
                    "title": "皮肤衣"
                  },
                  {
                    "img":
                      "https://mi.vanclimg.com/oms/2019_5_15_15_55_8_2095_400x400.jpg",
                    "title": "法兰绒"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6378263/mid/6378263-1j201709211400422674.jpg",
                    "title": "针织衫"
                  },
          
                  {
                    "img":
                      "http://i.vanclimg.com/640/q80/product/6/3/7/6375420/big/6375420-1j201709190939310097.jpg",
                    "title": "外套"
                  },
                  {
                    "img": "http://i.vanclimg.com/640/q80/product/6/3/7/6375178/big/6375178-1j201709190939204939.jpg",
                    "title": "西服"
                  },
                  {
                    "img": "http://i.vanclimg.com/640/q80/product/6/3/7/6375438/big/6375438-1j201709151926139721.jpg",
                    "title": "大衣"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6379041/mid/6379041-1j201711081537064863.jpg",
                    "title": "羽绒服"
                  },
                  {
                    "img":
                      "http://p4.vanclimg.com/product/6/3/7/6375236/mid/6375236-1j201609181106558580.jpg",
                    "title": "休闲裤"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375676/mid/6375676-1j201702271714371849.jpg",
                    "title": "牛仔裤"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375716/mid/6375716-1j201703011610142579.jpg",
                    "title": "针织裤"
                  }
            ]
        },
        {
            "name":"女装",
            "foodsList":[
                {
                    "img": "http://i.vanclimg.com/640/q80/product/6/3/7/6375741/big/6375741-1j201703151524555988.jpg",
                    "title": "卫衣"
                  },
                  {
                    "img": "http://i2.m.vancl.com/oms/2017_10_9_16_2_46_2082_400x400.jpg",
                    "title": "水柔棉"
                  },
                  {
                    "img":
                      "http://i9.m.vancl.com/oms/2017_10_9_16_5_56_9321_400x400.jpg",
                    "title": "T恤"
                  },
                  {
                    "img":
                      "http://i4.m.vancl.com/oms/2017_10_9_15_58_41_4362_400x400.jpg",
                    "title": "休闲衬衫"
                  },
                  {
                    "img":
                      "http://p3.vanclimg.com/product/6/1/3/6139863/mid/6139863-1j201505141032063416.jpg",
                    "title": "麻衫衬裙"
                  },
                  {
                    "img": "http://p3.vanclimg.com/product/6/3/7/6374218/mid/6374218-1j201706172249534728.jpg",
                    "title": "针织纱"
                  },
                  {
                    "img": "http://mimages.vancl.com/oms/2017_10_9_15_47_47_125_400x400.jpg",
                    "title": "外套"
                  },
                  {
                    "img":"http://i.vanclimg.com/640/q80/product/6/3/7/6374159/big/6374159-1j201709191136144818.jpg",
                    "title": "皮肤衣"
                  },
                  {
                    "img":"http://p4.vanclimg.com/product/6/3/7/6373643/mid/6373643-1j201604151115425202.jpg",
                    "title": "运动速干"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6375674/mid/6375674-1j201702221659533816.jpg",
                    "title": "牛仔裤"
                  },
                   {
                    "img":"http://p4.vanclimg.com/product/6/3/7/6375740/mid/6375740-1j201703151436554981.jpg",
                    "title": "针织裤"
                  },
                  {
                    "img": "http://i5.vanclimg.com/cms/20180802/6376038-1j201704200924045527.jpg",
                    "title": "沙滩裤"
                  }
            ]
        },
        {
            "name":"男鞋",
            "foodsList":[
                {
                    "img": "https://mi2.vanclimg.com/oms/2019_5_16_14_59_43_6907_400x400.jpg",
                    "title": "帆布鞋"
                  },
                  {
                    "img": "http://mimages.vancl.com/oms/2016_9_29_15_4_54_591_400x400.jpg",
                    "title": "休闲鞋"
                  },
                  {
                    "img":"http://i7.m.vancl.com/oms/2016_11_4_14_42_3_7460_400x400.jpg",
                    "title": "复古跑"
                  },
                  {
                    "img":"http://i2.vanclimg.com/cms/20180802/j201704200924045527.jpg",
                    "title": "运动鞋"
                  },
                  {
                    "img":"http://i1.vanclimg.com/cms/20181221/lalalal.jpg",
                    "title": "商务休闲鞋"
                  },
                  {
                    "img": "https://mi1.vanclimg.com/oms/2019_5_14_15_6_10_4174_400x400.jpg",
                    "title": "皮鞋"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6379346/mid/6379346-1j201711201639496170.jpg",
                    "title": "床单"
                  },
                  {
                    "img": "http://p5.vanclimg.com/product/6/3/7/6376934/mid/6376934-1j201704251016152543.jpg",
                    "title": "被子"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6378483/mid/6378483-1j201711070900347238.jpg",
                    "title": "家居毯"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375801/mid/6375801-1j201704111029201726.jpg",
                    "title": "枕头"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6378229/mid/6378229-1j201710200947086013.jpg",
                    "title": "围巾"
                  }
            ]
        },
        {
            "name":"女鞋",
            "foodsList":[
                {
                    "img": "https://mi.vanclimg.com/oms/2019_5_16_14_59_46_190_400x400.jpg",
                    "title": "帆布鞋"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6375869/mid/6375869-1j201703301445582286.jpg",
                    "title": "复古跑"
                  },
                  {
                    "img":
                      "https://mi1.vanclimg.com/oms/2019_4_19_15_42_52_5286_400x400.jpg",
                   " title": "休闲鞋"
                  },{
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6379346/mid/6379346-1j201711201639496170.jpg",
                    "title": "床单"
                  },
                  {
                    "img": "http://p5.vanclimg.com/product/6/3/7/6376934/mid/6376934-1j201704251016152543.jpg",
                    "title": "被子"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6378483/mid/6378483-1j201711070900347238.jpg",
                    "title": "家居毯"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375801/mid/6375801-1j201704111029201726.jpg",
                    "title": "枕头"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6378229/mid/6378229-1j201710200947086013.jpg",
                    "title": "围巾"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6379346/mid/6379346-1j201711201639496170.jpg",
                    "title": "床单"
                  },
                  {
                    "img": "http://p5.vanclimg.com/product/6/3/7/6376934/mid/6376934-1j201704251016152543.jpg",
                    "title": "被子"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6378483/mid/6378483-1j201711070900347238.jpg",
                    "title": "家居毯"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375801/mid/6375801-1j201704111029201726.jpg",
                    "title": "枕头"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6378229/mid/6378229-1j201710200947086013.jpg",
                    "title": "围巾"
                  }
            ]
        },
        {
            "name":"袜品",
            "foodsList":[
                 {
                    "img": "http://i8.m.vancl.com/oms/2015_8_24_14_36_41_8264.jpg",
                    "title": "连裤袜"
                  },
                  {
                    "img": "http://i4.m.vancl.com/oms/2015_10_12_17_6_14_4263.jpg",
                    "title": "打底裤"
                  },
                  {
                    "img":
                      "http://i6.m.vancl.com/oms/2015_8_24_14_43_42_6578.jpg",
                    "title": "棉裤"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6379346/mid/6379346-1j201711201639496170.jpg",
                    "title": "床单"
                  },
                  {
                    "img": "http://p5.vanclimg.com/product/6/3/7/6376934/mid/6376934-1j201704251016152543.jpg",
                    "title": "被子"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6378483/mid/6378483-1j201711070900347238.jpg",
                    "title": "家居毯"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375801/mid/6375801-1j201704111029201726.jpg",
                    "title": "枕头"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6378229/mid/6378229-1j201710200947086013.jpg",
                    "title": "围巾"
                  }
            ]
        },
        {
            "name":"家居",
            "foodsList":[
                {
                    "img": "http://i2.vanclimg.com/cms/20190225/dsxcsd.jpg",
                    "title": "手机壳"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/6/6360018/mid/6360018-1j201507061744455744.jpg",
                    "title": "床品"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6379346/mid/6379346-1j201711201639496170.jpg",
                    "title": "床单"
                  },
                  {
                    "img": "http://p5.vanclimg.com/product/6/3/7/6376934/mid/6376934-1j201704251016152543.jpg",
                    "title": "被子"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6378483/mid/6378483-1j201711070900347238.jpg",
                    "title": "家居毯"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375801/mid/6375801-1j201704111029201726.jpg",
                    "title": "枕头"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6378229/mid/6378229-1j201710200947086013.jpg",
                    "title": "围巾"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6374336/mid/6374336-1j201605061429584072.jpg",
                    "title": "背心"
                  },
                  {
                    "img":
                      "http://i3.vanclimg.com/cms/20181220/dd.jpg",
                    "title": "睡衣"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6377054/mid/6377054-1j201705051702590184.jpg",
                    "title": "箱包"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6379054/mid/6379054-1j201710271704243178.jpg",
                    "title": "钱包"
                  },
                  {
                    "img":
                      "http://p3.vanclimg.com/product/6/3/7/6379056/mid/6379056-1j201710271512142805.jpg",
                    "title": "拖鞋"
                  },
                  {
                    "img": "http://i1.vanclimg.com/cms/20181220/pppp.jpg",
                    "title": "皮带"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6379346/mid/6379346-1j201711201639496170.jpg",
                    "title": "床单"
                  },
                  {
                    "img": "http://p5.vanclimg.com/product/6/3/7/6376934/mid/6376934-1j201704251016152543.jpg",
                    "title": "被子"
                  },
                  {
                    "img": "http://p1.vanclimg.com/product/6/3/7/6378483/mid/6378483-1j201711070900347238.jpg",
                    "title": "家居毯"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6375801/mid/6375801-1j201704111029201726.jpg",
                    "title": "枕头"
                  },
                  {
                    "img": "http://p4.vanclimg.com/product/6/3/7/6378229/mid/6378229-1j201710200947086013.jpg",
                    "title": "围巾"
                  }
            ]
        },
        {
            "name":"童装",
            "foodsList":[
                  {
                    "img": "http://i6.m.vancl.com/oms/2017_9_22_14_50_27_6213_400x400.jpg",
                    "title": "卫衣"
                  },
                  {
                    "img": "http://p3.vanclimg.com/product/6/3/7/6378719/mid/6378719-2201710181354559807.jpg",
                    "title": "男童"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6378718/mid/6378718-2201710181354110581.jpg",
                    "title": "女童"
                  },
                  {
                    "img":
                      "http://i7.m.vancl.com/oms/2017_9_22_14_43_51_7555_400x400.jpg",
                    "title": "皮肤衣"
                  },
                  {
                    "img": "http://i6.m.vancl.com/oms/2017_9_22_14_50_27_6213_400x400.jpg",
                    "title": "卫衣"
                  },
                  {
                    "img": "http://p3.vanclimg.com/product/6/3/7/6378719/mid/6378719-2201710181354559807.jpg",
                    "title": "男童"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6378718/mid/6378718-2201710181354110581.jpg",
                    "title": "女童"
                  },
                  {
                    "img":
                      "http://i7.m.vancl.com/oms/2017_9_22_14_43_51_7555_400x400.jpg",
                    "title": "皮肤衣"
                  },
                  {
                    "img": "http://i6.m.vancl.com/oms/2017_9_22_14_50_27_6213_400x400.jpg",
                    "title": "卫衣"
                  },
                  {
                    "img": "http://p3.vanclimg.com/product/6/3/7/6378719/mid/6378719-2201710181354559807.jpg",
                    "title": "男童"
                  },
                  {
                    "img":
                      "http://p2.vanclimg.com/product/6/3/7/6378718/mid/6378718-2201710181354110581.jpg",
                    "title": "女童"
                  },
                  {
                    "img":
                      "http://i7.m.vancl.com/oms/2017_9_22_14_43_51_7555_400x400.jpg",
                    "title": "皮肤衣"
                  }
            ]
        },
        {
            "name":"内衣",
            "foodsList":[
                  {
                    "img": "http://p3.vanclimg.com/product/0/8/5/0852470/mid/0852470-1j201602231548141598.jpg",
                    "title": "秋衣"
                  },
                  {
                    "img": "http://p2.vanclimg.com/product/6/3/7/6375743/mid/6375743-1j201703151541308000.jpg",
                    "title": "打底裤"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6378045/mid/6378045-1j201709200915558828.jpg",
                    "title": "内衣"
                  },
                  {
                    "img": "http://p3.vanclimg.com/product/0/8/5/0852470/mid/0852470-1j201602231548141598.jpg",
                    "title": "秋衣"
                  },
                  {
                    "img": "http://p2.vanclimg.com/product/6/3/7/6375743/mid/6375743-1j201703151541308000.jpg",
                    "title": "打底裤"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6378045/mid/6378045-1j201709200915558828.jpg",
                    "title": "内衣"
                  },
                  {
                    "img": "http://p3.vanclimg.com/product/0/8/5/0852470/mid/0852470-1j201602231548141598.jpg",
                    "title": "秋衣"
                  },
                  {
                    "img": "http://p2.vanclimg.com/product/6/3/7/6375743/mid/6375743-1j201703151541308000.jpg",
                    "title": "打底裤"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6378045/mid/6378045-1j201709200915558828.jpg",
                    "title": "内衣"
                  },
                  {
                    "img": "http://p3.vanclimg.com/product/0/8/5/0852470/mid/0852470-1j201602231548141598.jpg",
                    "title": "秋衣"
                  },
                  {
                    "img": "http://p2.vanclimg.com/product/6/3/7/6375743/mid/6375743-1j201703151541308000.jpg",
                    "title": "打底裤"
                  },
                  {
                    "img":
                      "http://p5.vanclimg.com/product/6/3/7/6378045/mid/6378045-1j201709200915558828.jpg",
                    "title": "内衣"
                  },
                  {
                    "img": "https://mi.vanclimg.com/oms/2019_5_16_15_5_53_46_400x400.jpg",
                    "title": "T恤"
                  },
                  {
                    "img":
                      "https://mi2.vanclimg.com/oms/2019_5_15_15_27_19_8618_400x400.jpg",
                    "title": "短袖衬衫"
                  },
                  {
                    "img":"http://i.vanclimg.com/640/q80/product/6/3/7/6377971/big/6377971-1j201709260833241850.jpg",
                    "title": "休闲衬衫"
                  },
                  {
                    "img":"http://p3.vanclimg.com/product/6/3/7/6375163/mid/6375163-1j201709151925189721.jpg",
                    "title": "水柔棉"
                  },
                  {
                    "img":"https://mi2.vanclimg.com/oms/2019_5_16_15_7_53_8057_400x400.jpg",
                    "title": "牛津纺"
                  },
                  {
                    "img":"http://p2.vanclimg.com/product/6/3/7/6378353/mid/6378353-1j201709090039435468.jpg",
                    "title": "卫衣"
                  },
                  {
                    "img":"http://p4.vanclimg.com/product/6/3/7/6378026/mid/6378026-1j201710121408227822.jpg",
                    "title": "夹克"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6378261/mid/6378261-1j201709211359324069.jpg",
                    "title": "针织衫"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6375651/mid/6375651-1j201709151926288158.jpg",
                    "title": "外套"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6378464/mid/6378464-1j201709221623443761.jpg",
                    "title": "童装"
                  },
                  {
                    "img":"http://p1.vanclimg.com/product/6/3/7/6375440/mid/6375440-1j201709151926140815.jpg",
                    "title": "大衣"
                  },
                  {
                    "img":"http://p2.vanclimg.com/product/6/3/7/6378281/mid/6378281-1j201711031618496576.jpg",
                    "title": "棉服"
                  },
                  {
                    "img":"http://p1.vanclimg.com/product/6/3/7/6375431/mid/6375431-1j201710131712238133.jpg",
                    "title": "羽绒服"
                  },
                  {
                    "img":"http://p5.vanclimg.com/product/6/3/7/6375237/mid/6375237-1j201609181106554831.jpg",
                    "title": "休闲裤"
                  },
                  {
                    "img":"http://p3.vanclimg.com/product/6/3/7/6375663/mid/6375663-1201702221659421316.jpg",
                    "title": "牛仔裤"
                  }
            ]
        }
    ]
    };
  },
  methods:{
      initScroll(){
         this.menuScroll = new BScroll(this.$refs.menuScroll,{
            click:true,//默认false 设置为truw  onclick事件才可以执行
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
  bottom: 1rem;
}
.name{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 100;
  height: 1rem;
}
.name_div{
  color: black;
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
  /* width: 80%; */
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

