<template>
	<view class="card">
		<view class="top-title">
			<view class="left-title">
				热点榜
			</view>
			<view class="right-title">
				查看全部
			</view>
		</view>
		
		<view class="item">
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeTabComponentNews",
		data() {
			return {
				itemList:[
					
				]
			};
		}
	}
</script>

<style lang="scss">
	.card {
		height: 300px;
		background-color: #2979FF;
		padding: 10px 10px;
		.top-title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
