<template>
<<<<<<< HEAD
=======

>>>>>>> ca3115cc4fb685565cd980e513cd2911023c8dc1
    <header class="vipHeader bc"   >
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
<<<<<<< HEAD
=======

>>>>>>> ca3115cc4fb685565cd980e513cd2911023c8dc1
        },
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
<<<<<<< HEAD
    // } 
        // }
    }
}
=======
    }, 


    
        
   
}   
>>>>>>> ca3115cc4fb685565cd980e513cd2911023c8dc1
</script>

<style scoped>
.bc{
    background: #fff !important;
    top: 0 !important;
}
.vipHeader{
    /* background: url('../../../assets/img/vipImg/bbg.png') */
     background: linear-gradient(to right, rgba(248,243,236,0), rgba(241,229,221,1));
}
.tit{
    font-size: 0.4rem;
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
