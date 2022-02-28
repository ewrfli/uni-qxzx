<template>
	<view class="warp">
		<u-sticky offset-top="0" customNavHeight="0" bgColor="#007aff">
			<view class="u-search"><u-search :disabled=true @click="toSearch" shape="square" placeholder="搜索公司/新闻/话题" :show-action="false"></u-search></view>
			<topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar>
		</u-sticky>
		<view class="curtab" v-if="islogin">
			<!-- <topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar> -->
			<!-- 每个tab标题对应的具体组件内容 v-show="currentTabComponent=='currentAdvice'"-->
			<view v-show="currentTabComponent=='currentAdvice'" class="currentTabNews">
				<tabMonitorAdvice></tabMonitorAdvice>
				<tabMonitorDaily></tabMonitorDaily>
			</view>

			<view v-show="currentTabComponent=='currentDaily'" class="currentTabNews">
				<followCompanyList></followCompanyList>
			</view>


		</view>

		<view class="nologin" v-else>  
			<view class="showmsg">需登录才能查看</view>
			<view class="tologin">
				<u-button type="primary" shape="circle" text="登录" @click="toLogin"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
import topTabbar from '../../components/topTabbar/topTabbar.vue'
import tabMonitorAdvice from '../../components/monitorComponent/tabMonitorAdvice.vue'
import tabMonitorDaily from '../../components/monitorComponent/tabMonitorDaily.vue'
import followCompanyList from '../../components/monitorComponent/followCompanyList.vue'
export default {
	components: {
		topTabbar,
		tabMonitorAdvice,
		tabMonitorDaily,
		followCompanyList
	},
	data() {
		return {
			islogin : false,
			searchkeyword: '',
			tabIndex: "currentAdvice",
			tabBars:[
				{
					name: "监控日报",
					id: "currentAdvice",
					index: 0
				},
				{
					name:"监控列表",
					id:"currentDaily",
					index: 1
				},
				
				
			],
			currentTabComponent: "currentAdvice"
			
		};
	},
	onShow(){
		this.islogin = uni.getStorageSync('token')//判断用户是否登录
	},
	onLoad(option) {
	
	},
	methods: {
		toLogin(){
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
		TarData(item){
			//设置id，来显示选中那个标签，显示下划线
			this.tabIndex = item.id;
			//显示标签对应的组件内容
			this.currentTabComponent = item.id
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
.warp{
	background-color: $uni-color-backgroundColor;
	.u-search {
		background-color: $uni-color-primary;
		padding: 5px 5px 5px 5px;
	}
	.nologin {
		height: 52vh;
		margin-top: 50%;
		.showmsg{
			font-size: 20px;
			color: #3c9cff;
			text-align: center;
			margin-bottom: 30px;
		}
		.tologin{
			.u-button{
                width: 36%;
            }
		}
	}
}
</style>
