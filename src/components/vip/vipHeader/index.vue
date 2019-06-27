<template>
<<<<<<< HEAD
    <header class="vipHeader bc"   >
=======
    <header class="vipHeader" :class="{bc:flag}" >
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
        <div class="header">
            <span class="tit">{{title}}</span>
        </div> 
        
    </header>
    
</template>

<script>
export default {
    name:"VipHeader",
    props:{
        title:{
            type : String,
            default : '会员'
        },
<<<<<<< HEAD
        // flag:{
        //     type:Boolean,
        //     required:true
        // }
    },
    methods: {
    //     scrollHeader() {
    //         this.flag = this.$refs.mt-vip.scrollTop == 0 ? false : true;
    //         console.log(this.flag)
    //         this.$emit('scrollHeader',this.flag)
          
    // }
    } 
=======
        flag:{
            type:Boolean,
            required:true
        }
    }
>>>>>>> b46a84b9f4c7349201e0525ec38bb13eb1138f22
}
</script>

<style scoped>
.bc{
    background: #fff !important;
    top: 0 !important;
}
.vipHeader{
    background: url('../../../assets/img/vipImg/bbg.png')
}
.tit{
    font-size: 0.46rem;
    color: #333333;
    font-weight: 600;
    height: 1.3rem;
    display: block;
    line-height: 1.3rem;
    /* text-align: center; */
    display: flex;
    justify-content: center;
}
.vipHeader{
    position:sticky; 
    top: 0;  
}
</style>
