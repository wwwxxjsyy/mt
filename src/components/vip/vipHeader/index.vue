<template>
<<<<<<< HEAD
    <header class="vipHeader">
=======
    <header class="vipHeader" :class="{bc:flag}" >
>>>>>>> lishun
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
        },
        flag:{
            type:Boolean,
            required:true
>>>>>>> lishun
        }
    }
}
</script>

<style scoped>
<<<<<<< HEAD
=======
.bc{
    background: #fff !important;
    top: 0 !important;
}
>>>>>>> lishun
.vipHeader{
    background: url('../../../assets/img/vipImg/bbg.png')
}
.tit{
    font-size: 0.46rem;
    color: #333333;
    font-weight: 600;
    height: 1.5rem;
    display: block;
    line-height: 1.5rem;
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
>>>>>>> lishun
}


</style>
