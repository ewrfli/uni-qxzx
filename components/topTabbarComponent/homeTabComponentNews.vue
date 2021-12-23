<template>
	<view class="card">
		<view class="top-title">
			<view class="left-title">
				热点榜
			</view>
			<view class="right-title">
				查看全部
			</view>
		</view>
		
		<view class="itemList">
			<view class="item" v-for="(data, index) in itemList">
				<view class="flexDiv">
					<view class="left-img">
						 <image style="width: 36px; height: 36px; border-radius: 4px;" :src="data.img" mode=""></image>
					</view>
					<view class="title">
						<view class="Content-title">
							<view class="Content-title-left">
								{{data.topTitle}}
							</view>
							<!-- <view class="top-title-right-hotIcon">
								<u-icon name="photo" color="#F63A34" size="20"></u-icon>
							</view> -->
						</view>
						<view class="sub-title">
							{{data.subTitle}}
						</view>
					</view>
				</view>
				<view class="right-hotIcon">
					<u-icon name="photo" color="#F63A34" size="20"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeTabComponentNews",
		data() {
			return {
				itemList:[
					{
						id: '',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么自动驾驶诉讼不断为什',
						subTitle: '自动驾驶？',
						icon: ''
					},
					{
						id: '',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么xx驾驶诉讼不断',
						subTitle: '自动x驾驶？',
						icon: ''
					},
					{
						id: '',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					},
					{
						id: '',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.card {
		padding: 10px 10px;
		.top-title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.left-title {
				font-size: 14px;
			}
			.right-title {
				font-size: 12px;
				color: #007AFF;
			}
		}
		.item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.flexDiv {
				margin-top: 10px;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				.left-img {
				}
				.title {
					margin-left: 8px;
					.Content-title {
						font-size: 14px;
					}
					.sub-title {
						font-size: 10px;
						margin-top: 3px;
					}
				}
			}
			.right-hotIcon {
				margin-top: 11px;
			}
		}
	}
</style>
