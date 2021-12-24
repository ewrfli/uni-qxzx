<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<homeTabComponentNewsHot></homeTabComponentNewsHot>
	</view>
</template>

<script>
import homeTabComponentNewsHot from '../../components/topTabbarComponent/homeTabComponentNewsHot.vue'
export default {
	components: {
		homeTabComponentNewsHot,
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
