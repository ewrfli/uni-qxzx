<template>
	<view>
		<u-tabbar
			:value="value"
			:mid-button="true" 
			@change="ChangBar" 
		>
			<u-tabbar-item text="首页" icon="home"></u-tabbar-item>
			<u-tabbar-item text="资讯" icon="photo" ></u-tabbar-item>
			<u-tabbar-item text="追踪" icon="play-right" ></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
		</u-tabbar>
	
	</view>
</template>

<script>
	export default {
		name:"bottomTabBar",
		data() {
			return {
				value: 0,
				list: [
					{
					"pagePath": "pages/home/index",
					iconPath: "home",
					selectedIconPath: "home-fill",
					text: '首页',
					customIcon: false,
					"count": 0,
					},
					{
					"pagePath": "pages/news/index",
					iconPath: "photo",
					selectedIconPath: "photo-fill",
					text: '资讯',
					customIcon: false,
					"count": 1,
					},
					{
					"pagePath": "pages/monitor/index",
					iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
					selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
					text: '追踪',
					midButton: true,
					customIcon: false,
					"count": 2,
					},
					{
					"pagePath": "pages/user/index",
					"iconPath": "account",
					"selectedIconPath": "account-fill",
					"text": '我的',
					"count": 3,
					"isDot": false,
					"customIcon": false,
					},
				]
			
			};
		},
		methods:{
			ChangBar(e) {
				console.log('ChangBar',e,this.list[e].pagePath)
				this.value = e;
				uni.switchTab({
					url: '/' + this.list[e].pagePath
				})
			},

		}
	}
</script>

<style lang="scss">

</style>
