<template>
	<view class="wrap">
		<u-navbar title="我的收藏" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view
                class="u-nav-slot"
                slot="left"
            >
                <u-icon
                    name="arrow-left"
                    size="22"
					color="#007aff"
                ></u-icon>

            </view>
		
		</u-navbar>
		<view class="card">	

		</view>
	</view>
</template>

<script>
	export default {
		name:"newsHotDetails",
		data() {
			return {

			};
		},
		methods: {
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			}
		},
	}
</script>

<style lang="scss">
	.content{
		background-color: $uni-color-backgroundColor;
	}
	.card {
		margin: 50px 6px 0;
		padding: 0px 10px 0px 10px;
		background-color: $uni-color-content;
		.u-navbar__content {
			background-color: aqua !important;
		}
		.itemList {
			background-color: $uni-color-content;
		}
		.item {
			// background-color: antiquewhite;
			border-bottom: 0.5px solid $uni-border-color;
			height: 36px;
			line-height: 28px;
			margin-top: 10px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;

			.left-icon {
				.u-icon{
					margin-top: 6px;
				}
			}
			.title {
				margin-left: 8px;
				.Content-title {
					font-size: 16px;
				}

			}
		}
	}
</style>
