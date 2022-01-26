<template>
	<view class="tab-pane">
		<slot></slot>
	</view>
</template>
<script>
	export default {
		props: ['label'],
		// #ifdef VUE2
		created() {
			uni.$emit('getTabLabel', this.label);
		}
		// #endif
		// #ifdef VUE3
		setup(props, context) {
			uni.$emit('getTabLabel', props.label);
		}
		// #endif
	}
</script>
<style scoped>
	.tab-pane {
		width: 750rpx;
		flex-shrink: 0;
	}
</style>
