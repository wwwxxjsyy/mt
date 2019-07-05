    <template>
    <div class="drink" >
        <div class="drink-search">
            <span class="iconfont">&#xe607;</span> <a>甜点饮品</a>
        </div>
        <div class="inputGroup" ref="inputGroup">
            <span class="iconfont">&#xe661;</span>
            <b>请输入商家或者商品名称</b>
        </div>
    </div>
</template>

<script>
export default {
    name:"Drink",
    // mounted(){
    //     window.addEventListener("scroll",this.handleScorll)
    // },
    methods:{
        handleScorll(){

              var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  console.log(scrollTop)
            // let headerHeight = document.getElementsByClassName("homedrink")[0];
            // console.log(headerHeight);
            // let scrollTop = headerHeight.scrollTop;
            // console.log(scrollTop);
            // if(headerHeight>50){
            //     this.$refs.inputGroup.style.width = "93%";
            //     this.$refs.inputGroup.style.position = "fixed";
            //     this.$refs.inputGroup.style.top = 0;
            //     this.$refs.inputGroup.style.right = 0;
            // }else{
            //     this.$refs.inputGroup.style.width = "100%";
            //     this.$refs.inputGroup.style.position = "static";
            // }
        }
        

    }
}
</script>

<style>
.drink-search{
    width: 100%;
    height: .5rem;
    text-align: center;
    margin-top: .2rem;
}
.drink-search span{
    font-size: .4rem;
    position: fixed;
    top: .2rem;
    left: .2rem;
    color: rgb(148, 150, 150);
}
.drink-search a{
    font-size: .4rem;
    line-height: .5rem;
    color: #ed6b91;
}
.inputGroup{
    width: 100%;
    margin-top: .2rem;
    height: .5rem;
    border-radius: .1rem;
    background: #ededed;
    display: flex;
}
.inputGroup span{
    width: .6rem;
    height: .5rem;
    font-size: .3rem;
    line-height: .5rem;
    padding-left: .2rem;
}
.inputGroup b{
    line-height: .5rem;
    color: #a7a7a7;
}
</style>
