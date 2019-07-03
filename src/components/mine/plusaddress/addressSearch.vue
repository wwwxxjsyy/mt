<template>
  <div v-if="showSearch" class="addressSearch">
    <div class="search-view">
      <div class="search-box">
        <div class="search-box-input">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="search_address">
        </div>
        <button @click="$emit('close')" class="search-box-btn">取消</button>
      </div>
      <ul class="search-list">
        <li
          v-for="(item,index) in areaList"
          :key="index"
          class="search-row"
          @click="selectAddress(item)"
        >
          <p class="search-row-title">{{item.name}}</p>
          <p class="search-row-location">{{item.district}}{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressSearch",
  data() {
    return {
      search_address: "",
      areaList: []
    };
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  watch: {
    search_address(val) {
      // console.log(val);
      this.searchPlace(val);
    }
  },
  props: {
    showSearch: Boolean,
    addressInfo: Object
  },
  methods: {
    searchPlace(val) {
      // console.log(this.city);
      // 调用高德地图的搜索
      AMap.plugin("AMap.Autocomplete", () => {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: this.city
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(val, (status, result) => {
          // 搜索成功时，result即是对应的匹配数据
          // console.log(result);
          this.areaList = result.tips;
        });
      });
    },
    selectAddress(item) {
      // console.log(item);
      this.addressInfo.address = item.name + item.district + item.address;
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.addressSearch {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
}
.search-view {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #fff;
}
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .2rem .3rem .2rem;
}
.search-box-input {
  flex: 1;
  border: 1px solid #ddd;
  outline: 0;
  color: #999;
  height: .6rem;
  margin-right: .2rem;
  border-radius: .1rem;
  background: #f5f5f5;
  padding: 0 .2rem;
  display: flex;
  align-items: center;
  font-size: .3rem;
}
.search-box-input > input {
  margin-left: .2rem;
  width: 90%;
  background: none;
   font-size: .3rem;
}
input,
button {
  outline: none;
  border: none;
}
.search-box-btn {
  color: #333;
  border-radius: .1rem;
  width: 1rem;
  height: .6rem;
  font-size: 0.3rem;
  white-space: nowrap;
}

.search-list {
  /* padding-left: .2rem; */
}
.search-row {
  border-bottom: 2px solid #eee;
  padding: .2rem .2rem .2rem;
  line-height: 1.2;

}
.search-row-title {
  color: #333;
  font-size: .35rem;
}
.search-row-location {
  color: #999;
  font-size: .3rem;
}
</style>
