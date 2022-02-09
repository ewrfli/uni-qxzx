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
			<view class="itemList">
				<view class="newsItem" v-for="(data, index) in newItemList" @click="toNewDetails">
					<!-- 头部 -->
					<view class="up-block">
						<view class="user-img">
							<image :src="data.userImg" mode=""></image>
						</view>
						<view class="user-content">
							<view class="user-name">
								{{data.userName}}
							</view>
							
							<view class="user-sub">
								<text space="nbsp" class="user-data">{{data.time}}小时前    阅读 {{data.readNum}}</text>
							</view>
						</view>
					</view>
					<!-- 中间 -->
					<view class="mid-block">
						<text space="nbsp">{{data.contentTitle}}</text>
					</view>
					<view class="mid-coverimg">
						<image :src="data.userImg" mode=""></image>
					</view>
					<!-- 底部 -->
					<view class="low-block">
						<view class="companyDiv">
							<text class="companyFont">{{data.relatedCompany}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
							
						</view>
						<view class="threeIcon">
							<view class="threeIcon1">
								<u-icon name="share-square" color="#565656" size="20"></u-icon>
								<text>{{data.repostNum}}</text>
							</view>
							<view class="threeIcon1">
								<u-icon name="chat" color="#565656" size="20"></u-icon>
								<text>{{data.commentNum}}</text>
							</view>
							<view class="threeIcon1">
								<u-icon name="thumb-up" color="#565656" size="20"></u-icon>
								<text>{{data.likeNum}}</text>
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
				newItemList:[
					{
						id: '',
						userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						userName:'userName',
						time:2,
						readNum:2233,
						contentTitle: '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动动驾驶自动驾驶自动动驾驶自动驾驶自动动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
						contentText: 'XXXXXXXXXXXXXXXX',
						relatedCompany: '自动驾驶',
						repostNum:11,
						commentNum:22,
						likeNum: 99,
						icon: ''
					},
					{
						id: '',
						userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						userName:'userName',
						time:2,
						readNum:2233,
						contentTitle: '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
						contentText: 'XXXXXXXXXXXXXXXX',
						relatedCompany: '自动驾驶xxxx',
						repostNum:11,
						commentNum:22,
						likeNum: 99,
						icon: ''
					},
					{
						id: '',
						userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						userName:'userName',
						time:2,
						readNum:2233,
						contentTitle: '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
						contentText: 'XXXXXXXXXXXXXXXX',
						relatedCompany: '自动驾驶',
						repostNum:11,
						commentNum:22,
						likeNum: 99,
						icon: ''
					},
					{
						id: '',
						userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
						userName:'userName',
						time:2,
						readNum:2233,
						contentTitle: '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
						contentText: 'XXXXXXXXXXXXXXXX',
						relatedCompany: '自动驾驶',
						repostNum:11,
						commentNum:22,
						likeNum: 99,
						icon: ''
					},
				]
			};
		},
		methods: {
			toNewDetails(){
				uni.navigateTo({
					url: '/pages/news/newItemDetails'
				});
			},
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
		margin-top: 44px;
		.newsItem {
			padding: 0px 10px;
			background-color: $uni-color-content;
			margin-bottom: 10px;
			.up-block {
				display: flex;
				flex-direction: row;
				align-items: center;
				.user-img {
					image {
						margin-top: 8px; 
						width: 36px; 
						height: 36px; 
						border-radius: 18px;
					}
				}
				.user-content {
					display: flex;
					flex-direction: column;
					margin-left: 6px;
					.user-name {
						
					}
					.user-sub {
						font-size: 12px;
						color: #777777;
					}
				}
			}
			
			.mid-block {
				margin: 6px 6px 6px 6px;
				overflow:hidden; 
				text-overflow:ellipsis;
				display:-webkit-box; 
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2; 
			}
			.mid-coverimg {
				image {
					margin: 2px 0 2px 4px; 
					width: 100px; 
					height: 100px; 
					border-radius: 6px;
				}
			}
			.low-block {
				display: flex;
				flex-direction: column;
				.companyDiv {
					margin-left: 3px;
					.companyFont {
						line-height: 23px;
						font-size: 12px;
						color: #565656;
						display: inline-block;
						padding: 1px 6px;
						border-radius: 4px;
						background-color: #e5e5e5;	
					}
				}	
				.threeIcon {
					font-size: 12px;
					color: #565656;
					margin: 10px 0px;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					.threeIcon1 {
						display: flex;
						flex-direction: row;
						align-items: center;
					}
				}
			}
		}
	}
</style>
