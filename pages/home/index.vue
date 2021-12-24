<template>
	<view class="content">
		<view class="status-bar" style="height: 80px; background-color: #007aff; position: sticky; top: 0px; z-index: 999;">
			
		</view>
		<view class="top">
			<view class="top-title">企险资讯</view>
			<view class="top-subtitle">企险资讯企险资讯企险资讯企险资讯企险资讯</view>
		</view>
		<u-sticky offset-top="0" customNavHeight="80" bgColor="#007aff">
			<view class="u-search"><u-search shape="square" placeholder="搜索企业/老板/新闻" v-model="keyword" :show-action="false"></u-search></view>
		</u-sticky>

		<view class="iconfunc">
			<u-grid :border="false" col="3">
				<u-grid-item v-for="(listItem, listIndex) in iconList" :key="listIndex">
					<u-icon :customStyle="{ paddingTop: 30 + 'rpx' }" :name="listItem.name" :size="22"></u-icon>
					<text class="grid-text">{{ listItem.title }}</text>
				</u-grid-item>
			</u-grid>
		</view>
		
		<view class="swiper">
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
		<view class="curtab">
			<topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar>
			<!-- 每个tab标题对应的具体组件内容 -->
			<view class="currentTabComponentNews" v-show="currentTabComponent=='homeTabComponentNews'">
				<homeTabComponentNewsHot></homeTabComponentNewsHot>
				<homeTabComponentNewsList></homeTabComponentNewsList>
			</view>
			<view class="currentTabComponentMonitor" v-show="currentTabComponent=='homeTabComponentMonitor'">
				<homeTabComponentMonitorAdvice></homeTabComponentMonitorAdvice>
			</view>
			<!-- 动态组件 -->
			<!-- <component v-bind:is="currentTabComponent"></component> -->
		</view>
		<view class="news-hot-list"></view>
		<view class="news-list"></view>
	</view>
</template>

<script>
import topTabbar from '../../components/topTabbar/topTabbar.vue'
import homeTabComponentNewsHot from '../../components/topTabbarComponent/homeTabComponentNewsHot.vue'
import homeTabComponentNewsList from '../../components/topTabbarComponent/homeTabComponentNewsList.vue'
import homeTabComponentMonitorAdvice from '../../components/topTabbarComponent/homeTabComponentMonitorAdvice.vue'
export default {
	components: {
		topTabbar,
		homeTabComponentNewsHot,
		homeTabComponentNewsList,
		homeTabComponentMonitorAdvice
	},
	data() {
		return {
			title: 'Hello1',
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
	height: 2000px;
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
