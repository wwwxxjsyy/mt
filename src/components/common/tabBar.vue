<template>
    <div id="footer">
        <ul>
            <router-link 
                active-class="active"
                v-for="(item,index) in tabbar" 
                @click="handleTogglePage(index)"
                :to="item.path"
                tag="li"
                :key="index"
                exact
                >
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Tabbar",
    data(){
        return {
            tabbar:[
                {
                   icon:"&#xe656;",
                   title:"首页",
                   path:"/home"
                },
                {
                   icon:"&#xe632;",
                   title:"会员",
                   path:"/vip"
                },
                {
                   icon:"&#xe634;",
                   title:"订单",
                   path:"/order"
                },
                {
                   icon:"&#xe657;",
                   title:"我的",
                   path:"/mine"
                }
            ]
        }
    },
    methods:{
        handleTogglePage(index){
            this.$emit("handleToggle",index)
        }
    }
}
</script>


<style >
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        border:1px solid #ccc;
    }

    #footer>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #footer>ul>li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
     #footer>ul>li>i{
         font-size:.5rem;
     }
     #footer>ul>.active{
        color:rgb(255,209,97);
    }
</style>