<template>
	<view class="content">
		<u-sticky offset-top="0" customNavHeight="0" bgColor="#007aff">
			<view class="u-search"><u-search :disabled=true @click="toSearch" shape="square" placeholder="搜索公司/新闻/话题" :show-action="false"></u-search></view>
		</u-sticky>
		<view class="swiper">
			<homeBanner></homeBanner>
		</view>
		<view class="curtab">
			<topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar>
			<!-- 每个tab标题对应的具体组件内容 -->
			<view class="currentTabNews" v-show="currentTabComponent=='currentTabNews'">
				<tabNewsHot></tabNewsHot>
				<tabNewsList></tabNewsList>
			</view>
			
			<view class="currentTabAttention" v-show="currentTabComponent=='currentTabAttention'">
				<tabBlogCategory></tabBlogCategory>
				<tabBlogList></tabBlogList>
			</view>
		</view>
		<view class="float-button">
			<uni-fab
            horizontal="right"
            vertical="bottom"
            @fabClick="trigger"
        	></uni-fab>
		</view>
	</view>
</template>

<script>
import topTabbar from '../../components/topTabbar/topTabbar.vue'
import homeBanner from '../../components/homeBanner/homeBanner.vue'
import tabNewsHot from '../../components/newsComponent/tabNewsHot.vue'
import tabNewsList from '../../components/newsComponent/tabNewsList.vue'
import tabBlogCategory from '../../components/blogComponent/tabBlogCategory.vue'
import tabBlogList from '../../components/blogComponent/tabBlogList.vue'
export default {
	components: {
		topTabbar,
		homeBanner,
		tabNewsHot,
		tabNewsList,
		tabBlogCategory,
		tabBlogList
	},
	data() {
		return {
			searchkeyword: '',
			tabIndex: "currentTabNews",
			tabBars:[
				{
					name: "推荐热点",
					id: "currentTabNews",
					index: 0
				},
				{
					name:"关注话题",
					id:"currentTabAttention",
					index: 1
				},
				
				
			],
			currentTabComponent: "currentTabNews"
		};
	},
	onLoad() {
		console.log(uni.$u.config.v);
	},
	methods: {
		//floatbotton
		trigger(){
			console.log('trigger')
			uni.navigateTo({
				url: '/pages/news/addBlogArticle'
			});
		},
		//tab栏
		TarData(item){
			//设置id，来显示选中那个标签，显示下划线
			this.tabIndex = item.id;
			//显示标签对应的组件内容
			this.currentTabComponent = item.id
		},
		toSearch(){
			console.log('toSearch')
			uni.navigateTo({
				url: '/pages/home/search'
			});
		}
	}
};
</script>

<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';
.content {
	position: relative;
	background-color: $uni-color-backgroundColor;
	.u-search {
		background-color: $uni-color-primary;
		padding: 5px 5px 5px 5px;
	}
	.swiper {
		padding: 0px 0px;
	}

}

</style>
