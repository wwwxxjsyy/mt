<template>
  <div class="remark">
    <Header :isLeft="true" title="订单备注"/>
    <!-- 订单备注 -->
    <div class="view-body">
      <section>
        <textarea placeholder="填写额外对餐厅或骑手小哥备注的信息" v-model="text" maxlength="100"></textarea>
        <div class="switch">
          <span
            @click="handleRadioItem(item)"
            :class="{'selected': item.select}"
            v-for="(item,index) in radioItem"
            :key="index"
            class="switch-item item-line"
          >{{item.name}}</span>
        </div>
        <div class="switch" v-for="(item,index) in switchItem" :key="index">
          <span
            :class="{'selected': item.select}"
            @click="item.select = !item.select"
            class="switch-item"
          >{{item.name}}</span>
        </div>
      </section>
      <button @click="submitClick" class="btn-submit">确定</button>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Remark",
  data() {
    return {
      radioItem: [
        { select: false, name: "不要辣" },
        { select: false, name: "少点辣" },
        { select: false, name: "多点辣" }
      ],
      switchItem: [
        { select: false, name: "不要香菜" },
        { select: false, name: "不要洋葱" },
        { select: false, name: "多点醋" },
        { select: false, name: "多点葱" }
      ],
      text: ""
    };
  },
  methods: {
    handleRadioItem(item) {
      this.radioItem.forEach(element => {
        element.select = false;
      });
      item.select = true;
    },
    submitClick() {
      let selectItems = "";
      this.radioItem.forEach(element => {
        if (element.select) {
          selectItems += element.name + ",";
        }
      });

      this.switchItem.forEach(element => {
        if (element.select) {
          selectItems += element.name + ",";
        }
      });

      selectItems += this.text;
      // console.log(selectItems);
      // 存储
      this.$store.dispatch("setRemarkInfo", {
        tableware: this.$store.getters.remarkInfo.tableware,
        remark: selectItems
      });

      this.$router.go(-1);
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.remark {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
}

.view-body {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #333;
}
.view-body section {
  margin-top: .2rem;
  padding: .4rem;
  background-color: #fff;
  margin-bottom: .2rem;
}
.view-body section textarea {
  width: 100%;
  height: 2rem;
  margin-bottom: 4.266667vw;
  padding: .2rem;
  border: 1px solid #ccc;
  border-radius: .1rem;
  background-color: #f9f9f9;
  color: #666;
  resize: none;
  box-sizing: border-box;
  outline: none;
  font-size:.25rem;
}
.switch {
  display: inline-block;
  margin: 0 .2rem .2rem 0;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: .1rem;
}
.switch-item {
  display: inline-block;
  padding: 0 .15rem;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
  color: #666;
  font-size:.25rem;
}
.item-line::after {
  content: " ";
  display: inline-block;
  height: .4rem;
  width: 1px;
  background: #ddd;
  line-height: .8rem;
  vertical-align: middle;
  left: .2rem;
  position: relative;
}
.btn-submit {
  width:90%;
  box-sizing:border-box;
  display: block;
  padding: .3rem 0;
  color: #fff;
  background-color: #efb700;
  border-radius: .1rem;
  opacity: 0.8;
  margin: .3rem auto 0;
  font-size: .3rem;
}

/* 选中样式 */
.switch-item.selected {
  background: #efb700;
  color: #fff;
  position: relative;
}
</style>
