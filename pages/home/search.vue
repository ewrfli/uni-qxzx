<template>
	<view class="warp">
		<u-sticky offset-top="0" customNavHeight="0" bgColor="#007aff">
			<view class="u-search"><u-search shape="square" placeholder="搜索企业/老板/新闻" v-model="searchkeyword" :show-action="false"></u-search></view>
		</u-sticky>
		<NewsHotList></NewsHotList>
	</view>
</template>

<script>
import NewsHotList from '../../components/newsComponent/NewsHotList.vue'
export default {
	components: {
		NewsHotList
	},
	data() {
		return {
            searchkeyword: '',
			
		};
	},
	onShow(){

	},
	onLoad(option) {
	
	},
	methods: {


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
