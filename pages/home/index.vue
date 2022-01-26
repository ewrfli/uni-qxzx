<template>
	<view class="content">
		<view class="status-bar" style="height: 0px; background-color: #007aff; position: sticky; top: 0px; z-index: 999;">
			
		</view>
		<view class="top">
			<view class="top-title">企险资讯</view>
			<view class="top-subtitle">企险资讯企险资讯企险资讯企险资讯企险资讯</view>
		</view>
		<u-sticky offset-top="0" customNavHeight="0" bgColor="#007aff">
			<view class="u-search"><u-search shape="square" placeholder="搜索企业/Y老板/新闻" v-model="keyword" :show-action="false"></u-search></view>
		</u-sticky>

		<view class="iconfunc">
			<homeFuncDiv></homeFuncDiv>
		</view>
		
		<view class="swiper">
			<homeBanner></homeBanner>
		</view>
		
		<view class="curtab">
			<topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar>
			<!-- 每个tab标题对应的具体组件内容 -->
			<view class="currentTabComponentNews" v-show="currentTabComponent=='homeTabComponentNews'">
				<homeTabComponentNewsHot></homeTabComponentNewsHot>
				<homeTabComponentNewsList></homeTabComponentNewsList>
			</view>
			
			<view class="currentTabComponentMonitor" v-show="currentTabComponent=='homeTabComponentMonitor'">
				<homeTabComponentMonitorAdvice></homeTabComponentMonitorAdvice>
				<homeTabComponentMonitorDaily></homeTabComponentMonitorDaily>
			</view>
		</view>

	</view>
</template>

<script>
import homeFuncDiv from '../../components/homeComponent/homeFuncDiv.vue'
import topTabbar from '../../components/topTabbar/topTabbar.vue'
import homeTabComponentNewsHot from '../../components/newsComponent/tabNewsHot.vue'
import homeTabComponentNewsList from '../../components/newsComponent/tabNewsList.vue'
import homeTabComponentMonitorAdvice from '../../components/monitorComponent/tabMonitorAdvice.vue'
import homeTabComponentMonitorDaily from '../../components/monitorComponent/tabMonitorDaily.vue'
import homeBanner from '../../components/homeBanner/homeBanner.vue'
export default {
	components: {
		homeFuncDiv,
		topTabbar,
		homeTabComponentNewsHot,
		homeTabComponentNewsList,
		homeTabComponentMonitorAdvice,
		homeTabComponentMonitorDaily,
		homeBanner
	},
	data() {
		return {
			keyword: '',
			iconList: [
				{
				name: 'photo',
				title: '图片'
				},
				{
					name: 'lock',
					title: '锁头'
				},
				{
					name: 'star',
					title: '星星'
				},
				{
					name: 'hourglass',
					title: '沙漏'
				},
				{
					name: 'home',
					title: '首页'
				},
				{
					name: 'star',
					title: '音量'
				},
			],
			
			tabIndex: "homeTabComponentNews",
			tabBars:[
				{
					name: "资讯头条",
					id: "homeTabComponentNews",
					index: 0
				},
				{
					name:"风险监控",
					id:"homeTabComponentMonitor",
					index: 1
				},
			],
			currentTabComponent: 'homeTabComponentNews'
		};
	},
	onShow() {
		// uni.hideTabBar({
		// 	animation: false
		// })
	},
	onLoad() {
		console.log(uni.$u.config.v);
	},
	methods: {
		TarData(item){
			//设置id，来显示选中那个标签，显示下划线
			this.tabIndex = item.id;
			//显示标签对应的组件内容
			this.currentTabComponent = item.id
		}
	}
};
</script>

<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';
.content {
	background-color: $uni-color-backgroundColor;
	// height: 2000px;
	.top {
		height: 150px;
		background-color: $uni-color-primary;
		.top-title {
			height: 100px;
			line-height: 100px;
			color: #ffffff;
			font-size: 30px;
			text-align: center;
		}
		.top-subtitle {
			height: 10px;
			line-height: 10px;
			color: #ffffff;
			font-size: 16px;
			text-align: center;
		}
	}
	.u-search {
		background-color: $uni-color-primary;
		padding: 5px 5px 5px 5px;
	}
	.iconfunc {
		background-color: $uni-color-content;
		.grid-text {
			font-size: 14px;
			color: #909399;
			padding: 10rpx 0 20rpx 0rpx;
			/* #ifndef APP-PLUS */
			box-sizing: border-box;
			/* #endif */
		}
	}
	.swiper {
	}
	.curtab {
		
	}
}
</style>
