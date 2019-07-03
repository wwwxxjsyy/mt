<template>
  <div class="input-wrap">
    <span
      v-for="(item,index) in tags"
      :key="index"
      class="form-span"
      :class="{'checked':selectTag == item}"
      @click="$emit('checkTag',item)"
    >{{item}}</span>
  </div>
</template>

<script>
export default {
  name: "TabTag",
  props: {
    tags: Array,
    selectTag: String
  }
};
</script>

<style scoped>
.input-wrap {
  flex: 1 1 0;
  padding: .3rem 0.3rem;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
}
.input-wrap .form-span {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: .1rem;
  font-size: 0.3rem;
  color: #666;
  line-height: .6rem;
  width: 1.3rem;
  margin-right: .3rem;
  text-align: center;
}
.checked {
  color: #fff !important;
  background: #ffbd27 !important;
  border-color: rgba(255, 116, 35, 0.18) !important;
}
</style>