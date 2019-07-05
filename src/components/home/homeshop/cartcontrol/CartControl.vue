<template>
	<div class="cartcontrol">
		<transition name="move">
			<div 
			class="cart-decrease icon-remove_circle_outline"
			@click.stop.prevent="decreaseCart"
			v-show="food.count"
			></div>
		</transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
      <div
        class="cart-add icon-add_circle"
        @click.stop.prevent="increaseCart"
        >
        <i class="bg"></i>
      </div>
	</div>
</template>

<script>
import Vue from 'vue'
	export default {
	data(){
		return{
			count:0
		}
	},
    props:{
      food:{
        type:Object
      },
    },
	watch:{
		
	},
	methods:{
      decreaseCart(){
        this.food.count--
      },
      increaseCart(){
        if(!this.food.count){
          Vue.set(this.food,"count",1)
        }else{
          this.food.count++
        }
      }
    },
	created(){
		
	}
	}
</script>

<style>

.cartcontrol{
    font-size: 0;
    display: flex;
    align-items: center;
}

.cartcontrol .cart-decrease{
	display: inline-block;
	width: .5rem;
	height: .5rem;
	font-size: .5rem;
	color: #b4b4b4;
}

.cartcontrol .cart-add .bg{
	width: .3rem;
	height: .3rem;
	border-radius: 50%;
	background: black;
	position: absolute;
	left: .1rem;
	top: .15rem;
	z-index: -1;
}

.cartcontrol .cart-count{
	display: inline-block;
	width: .4rem;
	text-align: center;
	font-size: .3rem;
	vertical-align: top;
}

.cartcontrol .cart-add{
	display: inline-block;
	width: .5rem;
	height: .5rem;
	font-size: .5rem;
	color: #ffd161;
	position: relative;
}

.move-enter-active,.move-leave-active{
	transition: all 0.5s linear;
}
.move-enter,.move-leave-to{
	transform: translateX(20px) rotate(180deg);
}
</style>
