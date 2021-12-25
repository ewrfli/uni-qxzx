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
						image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东',
					},{
						image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},{
						image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			};
		}
	}
</script>

<style lang="scss">

</style>
