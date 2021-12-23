<template>
<!-- 顶部选项卡 -->
	<view class="tabs">
		<view 
			class="uni-tab-item" 
			v-for="(tab,index) in tabBars"
			:key="tab.id"
		>
			<text 
				class="uni-tab-item-title"
				:class="{tabActive: tabIndex==tab.id}"
				@tap="tarTap(tab)"
			>
				{{tab.name}}
				<span class="tab-item-title-line"></span>
				
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"topTabbar",
		props:{
			tabBars: Array,
			tabIndex: String
		},
		data() {
			return {
				
			};
		},
		methods: {
			tarTap(item){
				this.$emit("TarTap",item)
			}

		}
	}
</script>

<style lang="scss">
	.tabs{
		display: flex;
		// flex: 1;
		justify-content: space-around;
		align-content: space-around;
		flex-direction: row;
		// overflow-x: scroll;
		width: 100%;
		height: 100%;
	}
	.uni-tab-item{
		text-align: center;
		width: 100%;
		white-space: nowrap;
		line-height: 100rpx;
		height: 100rpx;
		// border-bottom: 1px solid #eee;
	}
	.uni-tab-item-title{
		color: #969696;
		font-weight: bold;
		font-size: 26rpx;
		width: 150rpx;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	.tabActive{
		color: #007aff;
	}
	.tabActive .tab-item-title-line{
		display: block;
		border-bottom: 2rpx solid #007aff;
		border-top: 2rpx solid #007aff;
		width: 86rpx;
		margin: 0 auto;
		border-radius: 40rpx;
		margin-top: -10px;
		background-color: #007aff;
		box-sizing: border-box;
	}
</style>
