<template>
<div>
     <list_group :dataList="dataList"/>
</div>
   
</template>

<script>
import List_group from '../components/common/compon'
export default {
    components:{
        List_group
    },
     data(){
         return {
             dataList:[
                 {
                pic:"http://p0.meituan.net/90.90.100/jungle/23d558f58e9fed4d72347c5dbb8722276581.png.webp",
                name:"外卖"
                },
                {
                pic:"http://p0.meituan.net/90.90.100/jungle/23d558f58e9fed4d72347c5dbb8722276581.png.webp",
                name:"外卖"
                },
                {
                pic:"http://p0.meituan.net/90.90.100/jungle/23d558f58e9fed4d72347c5dbb8722276581.png.webp",
                name:"外卖"
                },
                {
                pic:"http://p0.meituan.net/90.90.100/jungle/23d558f58e9fed4d72347c5dbb8722276581.png.webp",
                name:"外卖"
                },
                {
                pic:"http://p0.meituan.net/90.90.100/jungle/23d558f58e9fed4d72347c5dbb8722276581.png.webp",
                name:"外卖"
                },
                 {
                pic:"http://p0.meituan.net/90.90.100/jungle/23d558f58e9fed4d72347c5dbb8722276581.png.webp",
                name:"外卖"
                },
                 {
                pic:"http://p0.meituan.net/90.90.100/jungle/23d558f58e9fed4d72347c5dbb8722276581.png.webp",
                name:"外卖"
                },

             ]
         }
     }
}
</script>

<style>

</style>
