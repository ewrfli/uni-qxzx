<template>
	<view class="wrap">
		<u-navbar title="VIP服务" @leftClick="leftClick" :autoBack="true" :fixed="true">
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
			<view class="vip-div">
				<vipBanner></vipBanner>
			</view>
			<view class="top-div">
				<view class="title">VIP特权1.关注话题</view>
				<view class="img-div"><image src="../../../static/bannner/banner1.png" mode=""></image></view>
				<view class="content">VIP用户无限关注各种话题，及时发布更新相关话题，及时获取信息</view>
			</view>

			<view class="top-div">
				<view class="title">VIP特权2.监控公司</view>
				<view class="img-div"><image src="../../../static/bannner/banner2.png" mode=""></image></view>
				<view class="content">VIP用户无限次监控各种公司相关信息，及时获取公司相关信息</view>
			</view>

			<view class="top-div">
				<view class="title">VIP特权3.及时推送</view>
				<view class="img-div"><image src="../../../static/bannner/banner4.png" mode=""></image></view>
				<view class="content">VIP用户无限次及时推送监控的相关信息，及时获取相关信息</view>
			</view>
		</view>
	</view>
</template>

<script>
import vipBanner from '../../../components/homeBanner/vipBanner.vue'
	export default {
		name:"newsHotDetails",
		components: {
			vipBanner
		},
		data() {
			return {

			};
		},
		methods: {
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
	.content{
		background-color: $uni-color-backgroundColor;
	}
	.card {
		margin: 44px 0 0 0;
		.top-div{
			padding: 10px 15px;
			.title{
				color: #EF893C;
				font-size: 18px;
			}
			.img-div {
				margin: 8px 0px;
				image{
					width: 300px; 
					height: 100px; 
					border-radius: 2px; 
					margin-left: -150px; 
					left: 50%;
				}
			}
			.content{
				padding: 8px 8px;
				margin: 8px 2px;
			}
		}
	}
</style>
