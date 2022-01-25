<template>
	<view class="content">
		<u-navbar title="热门榜单" @leftClick="leftClick" :autoBack="true" :fixed="true">
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
			<view class="itemList">
				<view class="item" v-for="(data, index) in itemList" :key="data.id">
						<view class="left-icon">
							<u-icon name="arrow-up-fill"></u-icon>
						</view>
						<view class="title">
							<view class="Content-title">
								<view class="Content-title-left">
									{{data.topTitle}}
								</view>
							</view>
						</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newsHotDetails",
		data() {
			return {
				itemList:[
					{
						id: '0',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么自动驾驶诉讼不断为什',
						subTitle: '自动驾驶？',
						icon: ''
					},
					{
						id: '1',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么xx驾驶诉讼不断',
						subTitle: '自动x驾驶？',
						icon: ''
					},
					{
						id: '2',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					},
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					,
					{
						id: '3',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					
				]
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
