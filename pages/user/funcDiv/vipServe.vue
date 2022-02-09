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

	}
</style>
