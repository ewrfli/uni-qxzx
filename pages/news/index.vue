<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<homeTabComponentNews></homeTabComponentNews>
	</view>
</template>

<script>
import homeTabComponentNews from '../../components/topTabbarComponent/homeTabComponentNews.vue'
export default {
	components: {
		homeTabComponentNews,
	},
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {
		console.log(uni.$u.config.v);
	},
	methods: {}
};
</script>

<style lang="scss">
@import '@/uni_modules/uview-ui/index.scss';
.content {

}

</style>
