<template>
<div class="content">
        <div class="accountmoney">
            <p>账户余额</p>
            <p>
                <span>￥</span>
                <em>0.00</em>
            </p>
        </div>
        <div class="operate">
            <div class="recharge">充值</div>
            <div class="cashwithdrawal">提现</div>
        </div>
        <div class="question">常见问题</div>
    </div>
</template>

<script>

export default {
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},

}
</script>
<style  scoped>
.content{
    width: 100%;
    margin-top: .1rem;
}
.content .accountmoney{
    padding:2rem 0;
    text-align: center;
}
.content .accountmoney p:first-child{
    font-size: .4rem;
    margin-bottom: .22rem;
    color: black;
}
.content .accountmoney p:last-child{
    display: flex;
    justify-content: center;
    color: black;
    
}
.content .accountmoney p:last-child span{
    font-size: .4rem;
    margin-right: .08rem;
    vertical-align: bottom;
    
}
.content .accountmoney p:last-child em{
    font-size: .5rem;
}

.content .operate{
    padding:0 .52rem;
}
.content .operate .recharge{
        width: 6.2rem;
    height: 1.1rem;
    color: #fff;
    background: #2fb6b0;
    font-size: .38rem;
    text-align: center;
    line-height: 1.12rem;
    border-radius: .1rem;
    margin-bottom: .6rem;
}
.content .operate .cashwithdrawal{
        width: 6.2rem;
    height: 1.1rem;
    color: #2fb6b0;
    background: #fff;
    font-size: .38rem;
    text-align: center;
    line-height: 1.12rem;
    border-radius: .1rem;
    margin-bottom: .6rem;
    border: 1px solid #2fb6b0;
}
.content .question{
    font-size: .38rem;
    color:#2fb6b0;
    text-align: center;
    margin-top:2.9rem;
}
</style>