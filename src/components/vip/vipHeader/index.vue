<template>
    <header class="vipHeader">
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
        }
    }
}
</script>

<style scoped>
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
    position:sticky;
    top:0;
}


</style>
