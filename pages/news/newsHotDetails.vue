<template>
	<view class="content">
		<u-navbar title="推荐热点" @leftClick="leftClick" :autoBack="true" :fixed="true">
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
			<NewsHotList></NewsHotList>
		</view>
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
				itemList2:[],
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
						id: '4',
						img: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						topTitle: '为什么aa驾驶诉讼不断',
						subTitle: '自动a驾驶？',
						icon: ''
					}
					
				]
			};
		},
		mounted() {
			console.log('App mounted newlist')
		},
		methods: {
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			}
		}
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
						font-weight: 600;
						font-size: 14px;
					}
					.sub-title {
						width: 180px;
						font-size: 10px;
						margin-top: 3px;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						
					}
				}
			}
			.right-hotIcon {
				margin-top: 11px;
			}
		}
	}
</style>
