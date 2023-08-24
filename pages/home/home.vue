<template>
	<view class="content">
		<text>首页</text>
	</view>
</template>

<script setup lang="ts">
	import http from '../../api/api.ts'
	import store from '../../store';
	console.log(store)
	const Request = () => {
		http.post('/user/login', { userAccount: 'nihao33', password: '123456' }, false).then(res => {
			console.log(res)
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>