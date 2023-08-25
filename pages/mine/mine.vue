<template>
	<view class="content">
		<van-button type="primary" @tap="LogIn">登录</van-button>
		<van-button type="primary" @tap="Register">注册</van-button>
	</view>
</template>

<script setup lang="ts">
	const LogIn = () => {
		uni.navigateTo({
			url: '/subpkg/login/login'
		});
	}
	const Register = () => {
		uni.navigateTo({
			url: '/subpkg/register/register'
		});
	}
</script>

<style lang="scss">
	.content {
		margin: 50% auto;
		width: 600rpx;

		.van-button {
			width: 600rpx;
			margin: 20rpx 0;
		}
	}
</style>