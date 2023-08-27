<template>
	<view class="cart">
		<view v-if="list.length === 0" class="null">
			<image class="null" src="../../static/images/shopCart/no-shop.jpg" mode="widthFix"></image>
		</view>
		<view class="have" else>
			<view class="item" v-for="(item,index) in list" :key="item.id">
				<checkbox :checked="item.status" @tap="check(index)">
				</checkbox>
				<image :src="item.pic" mode="" />
				<div class="detailed">
					<div class="name">{{ item.name }}</div>
					<div class="price">￥ {{ item.price }}</div>
					<van-stepper v-model="item.num" />
				</div>
			</view>
			<!-- 	<van-card num="2" price="2.00" desc="描述信息" title="商品标题"
				thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" /> -->
			<view class="actionBar">
				<checkbox @tap="all" :checked="allSatus">
					全选
				</checkbox>
				<view class="lumpSum">￥{{ sum }}</view>
				<view class="del" @click="del">删除</view>
				<button class="buy" type="button" @click="buy">去买单</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue'
	const value = ref(0)
	const allSatus = ref(true)
	const list = ref([{
		status: true,
		pic: 'https://img0.baidu.com/it/u=3072622713,1305198873&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500',
		name: '好吃',
		price: 12
	}])
	const del = () => {
		console.log('删除')
		list.value.filter((item) => {
			return item.status === true
		})
	}
	const buy = () => {
		console.log('去买单')
		list.value == []
	}
	const all = (e) => {
		allSatus.value = !allSatus.value
		console.log('全选', allSatus.value)
		list.value.forEach((item) => {
			item.status = allSatus.value
			// console.log(item)
		})
	}
	const check = (e) => {
		console.log(e, index)
		list.value.forEach((item) => {
			console.log(item.status)
		})
	}
	// console.log(list.value)
	list.value.forEach((item) => {
		item.num = 1
		// console.log(item)
	})
	
	const sum = computed(() => {
		return list.value.reduce((sum, item) => {
			return sum += item.price * item.num
		}, 0)
	})
</script>

<style lang="scss">
	.cart {
		min-height: 100%;
		background-color: #f8f8f8;
		padding-bottom: 80rpx;

		.null {
			width: 100%;
			text-align: center;

			image {
				width: 500rpx;
				height: 500rpx;
			}

		}

		.have {
			min-height: calc(100vh - 80rpx);

			.item {
				display: flex;
				align-items: center;
				width: 750rpx;
				height: 210rpx;
				margin-bottom: 40rpx;
				background-color: #fff;

				.price {
					color: red;
				}

				.detailed {
					margin-left: 20rpx;
				}

				image {
					margin-left: 20rpx;
					width: 176rpx;
					height: 176rpx;
				}
			}

			.actionBar {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: nowrap;
				position: fixed;
				left: 0;
				bottom: 0;
				width: 100%;
				background-color: #ffffff;
				height: 80rpx;
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

				.lumpSum {
					color: red;
				}

				// 1、未选中的背景样式：wx-checkbox-input
				// 2、选中后的背景样式 ： wx-checkbox-input.wx-checkbox-input-checked
				// 3、选中后的勾子的样式：wx-checkbox-input.wx-checkbox-input-checked::before

				/* 未选中的背景样式 */
				checkbox .wx-checkbox-input {
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
				}

				/* 选中后的背景样式 */
				checkbox .wx-checkbox-input.wx-checkbox-input-checked {
					border: none;
					background: #37C674;
				}

				/* 选中后的勾子样式 */
				checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
					width: 40rpx;
					height: 40rpx;
					line-height: 40rpx;
					border-radius: 50%;
					text-align: center;
					font-size: 32rpx;
					color: #fff;
					background: transparent;
					transform: translate(-50%, -50%) scale(1);
					-webkit-transform: translate(-50%, -50%) scale(1);
				}

				.del {
					width: 120rpx;
					height: 50rpx;
					background-color: red;
					color: #fff;
					text-align: center;
					line-height: 50rpx;
				}

				.buy {
					height: 80rpx;
					background-color: #2fc491;
					border-radius: 0;
					color: #fff;
					margin: 0;
				}
			}
		}
	}
</style>