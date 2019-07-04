<template>
  <div class="formblock">
    <div class="label-wrap">{{label}}</div>
    <div class="input-group-wrap" @click="$emit('click')">
      <div class="input-wrap">
        <input
          v-if="!textarea"
          :type="type"
          :value="value"
          :placeholder="placeholder"
          @input="$emit('input',$event.target.value)"
        >

        <textarea
          v-else
          :type="type"
          :value="value"
          :placeholder="placeholder"
          @input="$emit('input',$event.target.value)"
          rows="2"
          maxlength="100"
        ></textarea>
        <i v-if="icon" class="iconfont " v-html='icon'></i>
      </div>
        <TabTag v-if="tags" :tags="tags" :selectTag="sex" @checkTag="checkTag"></TabTag>
    </div>
  </div>
</template>

<script>
import TabTag from "./tabTag";
export default {
  name: 'CommonAddress',
  components:{
      TabTag,
  },
  created(){
    //  console.log(tags);
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: String,
    value: String,
    placeholder: String,
    icon: String,
    textarea: String,
    tags: Array,
    sex: String,
  },
  methods: {
    checkTag(item) {
      // console.log(item);
      this.$emit("checkSex", item);
    },
    // selectTag(item){
    //   console.log(item);
    //   this.$emit("checkSex", item);
    // }
  },
};
</script>

<style scoped>
.formblock {
  /* border-top: 0.266667vw solid #eee; */
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
.input-group-wrap {
  flex: 1;
}
.input-wrap {
  flex: 1 1 0;
  padding: .2rem 0;
  display: flex;
  align-items: center;
}
.input-wrap input {
  outline: none;
  line-height: 1remvw;
  color: #333;
  border: none;
  flex: 1;
  padding-right: .2rem;
  padding-left: 0;
  font-size: .3rem;
}

.input-wrap textarea {
  outline: none;
  font-size: .3rem;
  /* line-height: 1rem; */
  color: #333;
  border: none;
  flex: 1;
  padding-right: 4vw;
  padding-left: 0;
}
.input-wrap i {
  margin-right: .2rem;
  color: rgb(102, 102, 102);
  font-size: .3rem;
}
</style>
