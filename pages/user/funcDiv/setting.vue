<template>
	<view class="wrap">
		<u-navbar title="设置" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view
                class="u-nav-slot"
                slot="left"
            >
                <u-icon
                    name="arrow-left"
                    size="22"
					color="#007aff"
                ></u-icon>

            </view>
		
		</u-navbar>
		<view class="card">	
			<view class="func-item" style="margin-bottom: 7px;">
				<view class="left-title">
					账号管理
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>

			<view class="func-item">
				<view class="left-title">
					推送消息设置
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>
			<view class="func-item">
				<view class="left-title">
					清除缓存
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>
			<view class="func-item" style="margin-bottom: 7px;">
				<view class="left-title">
					版本更新
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>
			<view class="func-item" style="margin-bottom: 7px;">
				<view class="left-title">
					分享app
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>

			<view class="func-item">
				<view class="left-title">
					关于我们
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>
			<view class="func-item">
				<view class="left-title">
					用户协议
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>
			<view class="func-item" style="margin-bottom: 7px;">
				<view class="left-title">
					隐私政策
				</view>
				<view class="right-title">
					<u-icon
						name="arrow-right"
						size="16"
						color="#007aff"
					></u-icon>
				</view>
			</view>

			<view class="bottom-title" @click="toLogin">
				退出当前账号
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			}
		},
	}
</script>

<style lang="scss">

	.wrap{
		height: 100vh;
		background-color: $uni-color-backgroundColor;
	}
	.card {
		margin-top: 50px;
	}
	.func-item {
		padding: 14px 10px;
		background-color: $uni-color-content;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.left-title {
			font-size: 14px;
		}
		.right-title {
			margin-top: 2px;
			font-size: 12px;
			color: #007AFF;
		}
	}
	.bottom-title {
		padding: 14px 10px;
		background-color: $uni-color-content;
		display: flex;
		flex-direction: row;
		justify-content: center;
		line-height: 20px;
	}
</style>
