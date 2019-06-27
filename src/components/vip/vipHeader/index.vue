<template>
<<<<<<< HEAD
    <header class="vipHeader">
=======
    <header class="vipHeader bc"   >
>>>>>>> 4351982289ebdf2fc34ede09dea95b06b01862ff
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
        }
    }
=======
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
    }, 

>>>>>>> 4351982289ebdf2fc34ede09dea95b06b01862ff
}
</script>

<style scoped>
<<<<<<< HEAD
=======
.bc{
    background: #fff !important;
    top: 0 !important;
}
>>>>>>> 4351982289ebdf2fc34ede09dea95b06b01862ff
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
<<<<<<< HEAD
    position:sticky;
    top:0;
=======
}
.vipHeader{
    position:sticky; 
    top: 0;  
>>>>>>> 4351982289ebdf2fc34ede09dea95b06b01862ff
}
</style>
