<template>
<div>
    <PlusAddressHeader :title="title" :addressInfo="addressInfo" :iconfont="iconfont"/>
    <!-- <PlusAddressContent :addressInfo="addressInfo" :title="title"/> -->
    <div class="viewbody">
        <CommonAddress label="联系人"
        placeholder="姓名" 
        :tags="sexes" 
        :sex="addressInfo.sex"
        @checkSex="checkSex"
        v-model="addressInfo.name"/>
        <CommonAddress label="电话" placeholder="手机号" v-model="addressInfo.phone"/>
        <CommonAddress @click="showSearch=true" label="地址" placeholder="小区/写字楼" icon="&#xe60c;"  v-model="addressInfo.address"/>
        <CommonAddress label="门牌号" placeholder="10号楼5单元404" textarea="text" v-model="addressInfo.bottom"/>
        <div class="formblock">
            <div class="label-wrap">标签</div>
            <TabTag :tags="tags" :selectTag="addressInfo.tag" @checkTag="checkTag"/>
        </div>
    </div>
    <div class="form-button-wrap">
        <button class="form-button" @click="handleSave">保存地址</button>
    </div>
     <!-- 搜索地址 -->
    <AddressSearch @close="showSearch=false" :showSearch="showSearch" :addressInfo="addressInfo"/>
</div>
</template>

<script>
import PlusAddressHeader from '../plusaddress/plusAddressHeader'
import PlusAddressContent from '../plusaddress/plusAddressContent'
import CommonAddress from '../plusaddress/commonAddress'
import TabTag from '../plusaddress/tabTag'
import AddressSearch from '../plusaddress/addressSearch'
import {Toast} from 'mint-ui'
export default {
components: {
    PlusAddressHeader,
    PlusAddressContent,
    CommonAddress,
    TabTag,
    AddressSearch
},
data() {
    return {
        addressInfo: {
            tag:"",
            sex:"",
            address:"",
            name:"",
            phone:"",
            bottom:"",
        },
        iconfont:"&#xe61a;",
        // title:"",
        tags:["家","学校","公司"],
        sexes:["先生","女士"],
        showSearch: false

    };
},
computed: {},
watch: {},
beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.addressInfo = to.params.addressInfo;
      vm.title = to.params.title;
      vm.iconfont= to.params.iconfont;
    });
  },
methods: {
     checkTag(item) {
      console.log(item);
      this.addressInfo.tag = item;
    },
    checkSex(item) {
      console.log(item);
      this.addressInfo.sex = item;
    },
     handleSave() {
      // console.log(this.addressInfo);
        if (!this.addressInfo.name) {
          this.showMsg("请输入联系人");
          return;
        }

        if (!this.addressInfo.phone) {
          this.showMsg("请输入手机号");
          return;
        }

        if (!this.addressInfo.address) {
          this.showMsg("请输入收货地址");
          return;
        }

      // 存储数据
        if (this.title == "添加地址") {
          this.addAddress();
        } else {
          this.editAddress();
        }
    },
    showMsg(msg) {
      Toast({
        message: msg,
        position: "center",
        duration: 2000
      });
    },
    //发送地址请求
    addAddress() {
      // this.$axios
      //   .post(
      //     `/api/user/add_address/${localStorage.ele_login}`,
      //     this.addressInfo
      //   )
      //   .then(res => {
      //     if (!this.$store.getters.userInfo) {
            this.$store.dispatch("setUserInfo", this.addressInfo);
        //   }
          this.$router.push("/Address");
        // })
        // .catch(err => console.log(err));
    },
    //修改地址请求
    editAddress() {
      // this.$axios
      //   .post(
      //     `/api/user/edit_address/${localStorage.mt_login}/${
      //       this.addressInfo._id
      //     }`,
      //     this.addressInfo
      //   )
      //   .then(res => {
          this.$router.push("/Address");
        // });
    }
  }
}

// beforeRouteEnter(to, from, next){
//     console.log(to.params.addressInfo)
//     next(vm =>{
//         vm.addressInfo = vm.$route.params.addressInfo
//         vm.title = vm.$route.params.title
//         vm.iconfont = vm.$route.params.iconfont
//         console.log(vm.iconfont)
//     })
//   }

// }

</script>
<style  scoped>
.addAddress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: .4rem;
}
.viewbody {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.content {
  padding-left: .2rem;
  background: #fff;
  font-size: 0.3rem;
}

.formblock {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
}
.formblock .label-wrap {
    padding: .2rem .3rem;
    line-height: .3rem;
    margin-right: .2rem;
    color: #333;
    font-weight: 700;
    font-size: .32rem;
}

/* 确定按钮 */
.form-button-wrap {
margin-top: 1rem;
  display: flex; 
  box-shadow: rgb(150, 149, 149) 3px 3px 5px
}
.form-button-wrap .form-button {
  background: #ffbd27 ;
  text-align: center;
  border-radius: 0.533333vw;
  flex: 1;
  font-size: .3rem;
  line-height: 5.066667vw;
  color: #333;
  padding: .3rem 0;
  border: none;
  font-weight: 500;
}
</style>