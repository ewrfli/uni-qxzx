<template>
	<view>
		<u-tabbar
			v-model="current" 
			:mid-button="true" 
			@change="ChangBar" 
		>
		
		</u-tabbar>
	
	</view>
</template>

<script>
	export default {
		name:"tabBar",
		data() {
			return {
				current: 0,
			};
		},
		methods:{
			ChangBar(e) {
				uni.switchTab({
					url: '/' + this.list[e].pagePath
				})
			}

		}
	}
</script>

<style lang="scss">

</style>
