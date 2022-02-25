<template>
	<view class="home-banner">
		<u-swiper
			:list="swiperList"
			keyName="image"
			showTitle
			indicator
			indicatorMode="line"
			circular
			height="60"
		></u-swiper>
	</view>
</template>

<script>
	export default {
		name:"homeBanner",
		data() {
			return {
				swiperList: [
					{
						image: '../../static/bannner/banner1.png',
						title: '为用户实时了解最新风险信息及相关企业相关风险信息',
					},{
						image: '../../static/bannner/banner2.png',
						title: '为用户实时了解最新风险信息及相关企业相关风险信息',
					},{
						image: '../../static/bannner/banner3.png',
						title: '为用户实时了解最新风险信息及相关企业相关风险信息',
					},{
						image: '../../static/bannner/banner5.png',
						title: '为用户实时了解最新风险信息及相关企业相关风险信息',
					},{
						image: '../../static/bannner/banner7.png',
						title: '为用户实时了解最新风险信息及相关企业相关风险信息',
					}
				],
			};
		}
	}
</script>

<style lang="scss">

</style>
