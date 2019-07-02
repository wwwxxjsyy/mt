<template>
  <div class="plus-address-content">
    <div class="editAddress">
      <div class="receive-address">
        <span class="receiveAddress">收货地址:<input type="text" class="writeAddress" v-model="addressInfo.position">
        </span>
        <div class="location"></div>
      </div>
      <div>
        <span class="doorNumber">门牌号:</span>
        <input type="text" class="input-wrap" placeholder="详细地址,例:16号楼5层501室" v-model="addressInfo.address">
      </div>
      <div>
        <span class="contacts">联系人:</span>
        <input type="text" class="input-wrap" placeholder="请填写收货人的姓名" v-model="addressInfo.name">
      </div>
      <div class="gender">
        <div class="select-man">
          <input type="radio" name="sex" id="man" value="man">
          <i class="checkbox j"></i>
          <label for="man">先生</label>
        </div>
        <div class="select-woman">
          <input type="radio" id="woman" name="sex" value="woman">
          <i class="check i"></i>
          <label for="woman">女士</label>
        </div>
      </div>
      <div>
        <span class="phoneNumber">手机号:</span>
        <input type="text" class="input-wrap" placeholder="请填写收货手机号码" v-model="addressInfo.phone">
      </div>
      <div class="where-label">
        <span class="label">标签:</span>
        <div class="where">
          <span v-for="(item,index) in tags" :key="index" :class="{'checked':selectTag == item}" @click="checkTag(item)">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="saveAddress" @click="handleSave">保存地址</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  components: {},
  data() {
    return {
      tags:["家","学校","公司"],
      selectTag:"",
      addressInfo:{
        position:"",
        address:"",
        name:"",
        phone:"",
        tag:this.selectTag,
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    checkTag(item){
      console.log(item)
      this.selectTag = item;
    },
    handleSave(){
      console.log(this.addressInfo)
      if(!this.addressInfo.name){
        this.showMessage("请输入联系人")
        return
      }
      if(!this.addressInfo.phone){
        this.showMessage("请输入电话")
        return
      }
      if(!this.addressInfo.address){
        this.showMessage("请输入地址")
        return
      }
      this.addAddress()
    },
    showMessage(msg){
      Toast({
        message: msg,
        position: 'center',
        duration: 2000,
        id:""
      });
    },
    addAddress(){
      this.$axios.post('',this.addressInfo)
      .then(res=>{
        this.$router.push('/Address')
      })
      .catch(err=>{

      })
    }
  }
};
</script>
<style scoped>
.plus-address-content {
  background: #fff;
  color: #616161;
}
.editAddress > div {
  margin-left: 0.5rem;
  height: 1.1rem;
  line-height: 1.1rem;
  border-bottom: 1px solid #e4e4e4;
  font-size: 0.3rem;
}
.editAddress .input-wrap {
  height: 1rem;
  font-size: 0.28rem;
  border: 0;
  width: 70%;
  padding-left: 0.3rem;
  outline: 0;
}

.editAddress .receive-address {
  background: url("../../../assets//minePic/enter.png") no-repeat 100% 50%;
  background-size: 0.4rem;
  padding-right: 0.3rem;
  background-origin: content-box;
}
.editAddress .receive-address .receiveAddress {
  position: absolute;
}
.editAddress .receive-address .location {
  background: url("../../../assets/minePic/location.png") no-repeat 0 50%;
  background-size: 0.3rem;
  margin-left: 1.4rem;
  width: 70%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.editAddress .gender {
  display: flex;
  padding-left: 1.7rem;
}
.editAddress .gender .select-man {
  display: inline-block;
  margin-right: 0.8rem;
}
.editAddress .gender .select-man input {
  display: none;
}
.j{
  vertical-align: middle;
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  background: url("../../../assets/minePic/checkbox.png") no-repeat;
  background-size: 0.3rem;
}

.editAddress .gender .select-woman {
  display: inline-block;
}
.editAddress .gender .select-woman input {
  display: none;
}
.i {
  vertical-align: middle;
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  background: url("../../../assets/minePic/check.png") no-repeat;
  background-size: 0.3rem;
}

.editAddress > input {
  border: none;
  font-size: 0.4rem;
  color: #333;
  width: 70%;
  height: 1.3rem;
  text-align: center;
}
.editAddress .detailAddress {
  margin-left: 1.4rem;
}
.editAddress .where-label {
  display: flex;
}
.editAddress .where-label .label {
  margin-right: 0.72rem;
}
.editAddress .where-label .where span {
  display: inline-block;
  border: 1px solid #d6d6d6;
  width: 1rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.3rem;
}
.editAddress .where-label .where span:nth-child(2) {
  margin: 0 0.32rem;
}
.saveAddress {
  margin-top: 1.2rem;
  background-image: linear-gradient(135deg, #ffd266 0%, #ffbd27 100%);
  border-radius: 0.08rem;
  text-align: center;
  height: 1.1rem;
  font-size: 0.3rem;
  line-height: 1.1rem;
}
.checked{
  background: #ffbd27;
  color:#fff;
}
.writeAddress{
  width:4rem;
  height:.7rem;
  position: relative;
  z-index: 5;
  left:1rem;
  border:none;
  outline: none;
  font-size: .3rem;
}
</style>