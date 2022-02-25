<template>
	<view class="wrap">
		<view class="navbar">
			<view class="left-div" @click="leftClick">
				<u-icon name="arrow-left" size="22" color="#fff"></u-icon>
			</view>
			<view class="title">我的发布</view>
			<view class="right-div"></view>
		</view>
		<view class="top">
			<view class="num-div">
				<view class="num">140</view>
				<view class="title">获赞</view>
			</view>
			<view class="num-div">
				<view class="num">06</view>
				<view class="title">发帖</view>
			</view>
			<view class="num-div">
				<view class="num">56</view>
				<view class="title">回复</view>
			</view>
		</view>
		<view class="card">	
			<topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar>
			<!-- 每个tab标题对应的具体组件内容 -->
			<view class="currentTabMyPublish" v-show="currentTabComponent=='currentTabMyPublish'">
				<currentTabMyPublish></currentTabMyPublish>
			</view>

			<view class="currentTabMyComment" v-show="currentTabComponent=='currentTabMyComment'">
				<currentTabMyComment></currentTabMyComment>
			</view>
		</view>
	</view>
</template>

<script>
import topTabbar from '../../../components/topTabbar/topTabbar.vue'
import currentTabMyPublish from '../../../components/funcMyPublish/currentTabMyPublish.vue'
import currentTabMyComment from '../../../components/funcMyPublish/currentTabMyComment.vue'
	export default {
		components: {
			topTabbar,
			currentTabMyPublish,
			currentTabMyComment
		},
		data() {
			return {
				tabIndex: "currentTabMyPublish",
			tabBars:[
				{
					name: "我的发帖",
					id: "currentTabMyPublish",
					index: 0
				},
				{
					name:"我的回复",
					id:"currentTabMyComment",
					index: 1
				},
			],
			currentTabComponent: "currentTabMyPublish"
			};
		},
		methods: {
		    //tab栏
			TarData(item){
				//设置id，来显示选中那个标签，显示下划线
				this.tabIndex = item.id;
				//显示标签对应的组件内容
				this.currentTabComponent = item.id
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
		background-color: $uni-color-backgroundColor;
	}
	.navbar {
		padding-left: 10px;
        background: #3982f7;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		.left-div {
			margin-top: 1px;
		}
		.title {
			color: #ffffff;
		}
		.right-div {
			width: 26px;
			background: #3982f7;
		}
	}
	.top {
		background-color: #3982f7;
		padding: 10px 10px 10px 14px;
		display: flex;
		flex-direction: row;
		.num-div{
			margin-right: 10px;
			display: flex;
			flex-direction: column;
			color: #fff;
			.title{
				font-size: 14px;
			}
		}
	}
	.card {
		margin-top: 3px;
		background-color: $uni-color-content;

	}
</style>
