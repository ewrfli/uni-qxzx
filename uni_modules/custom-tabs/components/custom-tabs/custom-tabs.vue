<template>
	<view :class="['tab','tab-scrollY-'+scrollY]">
		<scroll-view :class="['tab-bar','tab-bar-flex-'+flex]" scroll-x="true" :scroll-into-view="scrollId" scroll-with-animation>
			<view v-for="(item,index) in tabList" class="tab-bar-item" :class="{'active':tabIndex===index}" :id="`tab_${index}`" :style="{'padding':`0 ${tabPadding}rpx`}" :key="index" @click="tabChange(index)">
				<text class="txt">{{item}}</text>
			</view>
		</scroll-view>
		<view class="tab-cont" :style="{'transform':`translateX(${translateX}%)`,'transition':`transform ${transition}s ease-in-out`}">
			<slot></slot>
		</view>
	</view>
</template>
<script>
	// #ifdef VUE3
	import { reactive, toRefs } from 'vue';
	// #endif
	export default {
		name: "tabs",
		props: ['index', 'tabPadding', 'animation', 'scrollY', 'flex'],
		// #ifdef VUE3
		emits: ['changeIndex'],
		setup(props, context) {
			const data = reactive({
				tabList: [],
				tabIndex: props.index ? +props.index : 0,
				translateX: -100 * (+props.index),
				transition: props.animation === false ? 0 : .2,
				scrollId: 'tab_0',
				tabPadding: props.tabPadding ? props.tabPadding : 20
			});
			const tabChange = (index) => {
				if (data.tabIndex == index) return false;
				data.tabIndex = index;
				data.translateX = -100 * data.tabIndex;
				data.scrollId = `tab_${index-1}`;
				context.emit('changeIndex', index);
			}
			uni.$on('getTabLabel', (val) => {
				data.tabList.push(val);
				if (data.timeId) clearTimeout(data.timeId);
				data.timeId = setTimeout(() => {
					// 移除全局监听
					uni.$off('getTabLabel');
				}, 1000)
			})
			setTimeout(() => {
				data.scrollId = `tab_${props.index-1}`;
			}, 100)
			return {
				...toRefs(data),
				tabChange
			}
		}
		// #endif
		// #ifdef VUE2
		data() {
			return {
				tabList: [],
				tabIndex: 0,
				translateX: 0,
				transition: .2,
				scrollId: 'tab_0',
				start: 0
			}
		},
		created() {
			this.tabIndex = this.index ? +this.index : 0;
			this.translateX = -100 * (+this.index);
			this.transition = this.animation === false ? 0 : .2;
			this.tabPadding = this.tabPadding ? this.tabPadding : 20;
			this.$nextTick(() => {
				this.scrollId = `tab_${this.tabIndex-1}`;
			})
			uni.$on('getTabLabel', (val) => {
				this.tabList.push(val);
				if (this.timeId) clearTimeout(this.timeId);
				this.timeId = setTimeout(() => {
					// 移除全局监听
					uni.$off('getTabLabel');
				}, 1000)
			})
		},
		methods: {
			tabChange(index) {
				if (this.tabIndex == index) return false;
				this.tabIndex = index;
				this.translateX = -100 * this.tabIndex;
				this.scrollId = `tab_${index-1}`;
				this.$emit('changeIndex', index);
			}
		}
		// #endif
	}
</script>
<style>
	/*每个页面公共css */
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	/* #ifdef H5 */
	.tab-bar.tab-bar-flex-true .uni-scroll-view-content {
		display: flex;
		justify-content: center;
	}
	/* #endif */
	/* #ifndef H5 */
	.tab-bar.tab-bar-flex-true {
		text-align: center;
	}
	/* #endif */
</style>
<style scoped lang="scss">
	.tab {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;

		&-scrollY-true {
			height: 100vh;
		}

		.tab-bar {
			background-color: #ffffff;
			height: 72rpx;
			white-space: nowrap;
			margin-bottom: 12rpx;

			&-item {
				display: inline-block;
				height: 70rpx;
				line-height: 70rpx;
				font-size: 30rpx;
				color: #222;
				text-align: center;

				&.active {
					position: relative;
					color: #007AFF;
				}

				&.active::after {
					content: '';
					width: 80rpx;
					height: 4rpx;
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					background: #007AFF;
				}
			}
		}

		.tab-cont {
			display: flex;
		}
	}
</style>
