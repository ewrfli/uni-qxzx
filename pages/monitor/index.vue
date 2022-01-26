<template>
	<view class="warp">
		<u-sticky offset-top="0" customNavHeight="0" bgColor="#007aff">
			<view class="u-search"><u-search shape="square" placeholder="搜索企业/老板/新闻" v-model="searchkeyword" :show-action="false"></u-search></view>
		</u-sticky>
		<topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar>
		<!-- 每个tab标题对应的具体组件内容 -->
		<!-- 动态组件 -->
		<component v-bind:is="currentTabComponent"></component>
	</view>
</template>

<script>
import topTabbar from '../../components/topTabbar/topTabbar.vue'
import tabMonitorAdvice from '../../components/monitorComponent/tabMonitorAdvice.vue'
import tabMonitorDaily from '../../components/monitorComponent/tabMonitorDaily.vue'

export default {
	components: {
		topTabbar,
		tabMonitorAdvice,
		tabMonitorDaily
	},
	data() {
		return {
			searchkeyword: '',
			tabIndex: "tabMonitorAdvice",
			tabBars:[
				{
					name: "监控建议",
					id: "tabMonitorAdvice",
					index: 0
				},
				{
					name:"风险监控",
					id:"tabMonitorDaily",
					index: 1
				},
				
				
			],
			currentTabComponent: "tabMonitorAdvice"
			
		};
	},
	onLoad(option) {
	
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
.warp{
	background-color: $uni-color-backgroundColor;
	.u-search {
		background-color: $uni-color-primary;
		padding: 5px 5px 5px 5px;
	}
}
</style>
