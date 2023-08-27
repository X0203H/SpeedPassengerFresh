<template>
	<view class="ImageBox">
		<image src="../../static/images/mine/bg.jpg" mode="aspectFill" class="bgImage"></image>
		<view class="content">
			<view class="title">欢迎登录</view>
			<view class="op_box">
				<input type="text" placeholder="请输入账号" v-model="account">
				<input type="password" placeholder="请输入密码" v-model="password">
				<van-button class="btn" type="info" @tap="LogIn">登录</van-button>
			</view>
		</view>
		<van-notify id="van-notify" />
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import http from '../../api/api.ts'
	import Notify from '@vant/weapp/dist/notify/notify.js';

	const account = ref('')
	const password = ref('')

	const LogIn = () => {
		if (account.value === '' && password.value === '') return Notify('内容不能为空！')
		http.post('/user/login', { userAccount: account.value, password: password.value }, false).then((res : any) => {
			console.log(res)
			if (res.code === 1) {
				Notify({ type: 'success', message: res.message })
				uni.navigateTo({
					url: '/pages/cart/cart'
				});
			} else {
				Notify(res.message)
			}
		})
	}
</script>

<style lang="scss">
	.ImageBox {
		position: relative;

		.bgImage {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			z-index: 0;
		}

		.content {
			position: absolute;
			top: 600rpx;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 600rpx;
			height: 600rpx;

			.title {
				color: #fff;
				font-size: 30px;
				text-align: center;
			}

			.op_box {
				border-radius: 10rpx;
				background-color: rgba(0, 0, 0, .5);
				padding: 30rpx;
				margin: 50rpx 0;
			}

			input {
				color: #fff;
				margin-bottom: 50rpx;
			}

			.btn {
				display: block;
				text-align: center;
			}
		}
	}
</style>