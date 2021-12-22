<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<u-cell-group>
			<u-cell icon="setting-fill" title="个人设置"></u-cell>
			<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
		</u-cell-group>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello1'
		};
	},
	onLoad() {
		console.log(uni.$u.config.v);
	},
	methods: {}
};
</script>

<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';
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
