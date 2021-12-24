<template>
	<view class="content">
		<topTabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></topTabbar>
		<!-- 每个tab标题对应的具体组件内容 -->
		<component v-bind:is="currentTabComponent"></component>
	</view>
</template>

<script>
import topTabbar from '../../components/topTabbar/topTabbar.vue'
import homeTabComponentNewsHot from '../../components/topTabbarComponent/homeTabComponentNewsHot.vue'
import homeTabComponentMonitor from '../../components/topTabbarComponent/homeTabComponentMonitor.vue'
import homeTabComponentTest from '../../components/topTabbarComponent/homeTabComponentTest.vue'
export default {
	components: {
		topTabbar,
		homeTabComponentNewsHot,
		homeTabComponentMonitor,
		homeTabComponentTest
	},
	data() {
		return {
			tabIndex: "homeTabComponentNewsHot",
			tabBars:[
				{
					name: "资讯头条",
					id: "homeTabComponentNewsHot"
				},
				{
					name:"风险监控",
					id:"homeTabComponentMonitor"
				},
				
				
			],
			currentTabComponent: "homeTabComponentNewsHot"
			
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
@import '@/uni_modules/uview-ui/index.scss';
.content {
	.tabs {
		
	}
}
</style>
