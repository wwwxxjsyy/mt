<template>
    <div class="list_group">
        <!-- 组件结构 -->
        <ul class="li_group">
            <li v-for="(item,index) in dataList" :key="index">
                <!-- 图片 -->
                <div><img :src="item.pic"></div>
                <!-- 文字 -->
                <div><span>{{item.name}}</span></div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name :"listGroup",
    props:{
        dataList:{
            type:Array,
            default:"初始化",
        }
    },

}
</script>

<style scoped>
.list_group{
    width:100%;
}
.li_group{
    width:100%;
    height:2rem;
    display: flex;
    overflow-x: auto;
    align-items: center;
}
.li_group>li{
    width:18%;
    display: flex;
   color:#666;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
/* 影藏滚动条 */
.li_group::-webkit-scrollbar {
    width: 0 !important 
}
.li_group>li>div:first-child{
    width:1rem;
    height:1rem;
    border-radius:50%;
    background:rgb(231, 243, 247);
    display: flex;
    justify-content: center;
    align-items: center;

}
.li_group>li>div>img{
    width:80%;
    height:80%;
    border-radius:50%;
}

</style>
