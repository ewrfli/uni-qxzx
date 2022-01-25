<template>
	<view class="content">
		<u-navbar title="资讯详情" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-icon name="share-square" size="22" color="#007aff"></u-icon>
            </view>
		</u-navbar>

			<view class="newsItem" v-for="(data, index) in newsItem">
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
							<text space="nbsp" class="user-data">{{data.time}}    阅读 {{data.readNum}}</text>
						</view>
					</view>
					<view class="attention-div"><view class="icon">+关注</view></view>
				</view>
				<!-- 中间 -->
				<view class="mid-block">
					<text space="nbsp">{{data.contentTitle}}</text>
					<image :src="data.userImg" mode=""></image>
				</view>
				<!-- 底部 -->
				<view class="low-block">
					<view class="companyDiv">
						<text class="companyFont">{{data.relatedCompany}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
						<text class="star">
							<u-icon style="display: inline-block; margin-left: 4px;" name="thumb-up" color="#565656" size="20"></u-icon>
							{{data.likeNum}}
						</text>
					</view>

				</view>
			</view>

			<view class="comment">
				<view class="title"><text>评论动态</text></view>
				<view class="list-card">
					<view class="item" v-for="(data, index) in commentItem">

						<view class="up-block">
							<view class="user-img">
								<image :src="data.userImg" mode=""></image>
							</view>
							<view class="user-content">
								<view class="user-name">
									{{data.userName}}
								</view>
							</view>
						</view>

						<view class="mid-block">
							<text space="nbsp">{{data.contentTitle}}</text>
						</view>

						<view class="low-block">
							<view class="bottom-Div">
								<text class="time">{{data.time}} </text>
								<text class="answer">回复 </text>
								<text class="star">
									<u-icon style="display: inline-block;" name="thumb-up" color="#565656" size="19"></u-icon>
									<span style="line-height: 23px;">{{data.likeNum}}</span>
								</text>
							</view>
						</view>
						
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		name:"newItemDetails",
		data() {
			return {
				newsItem: [{
					id: '',
					userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
					userName:'userName',
					time:'2022-01-25 08:00',
					readNum:2233,
					contentTitle: '自动驾驶自动驾 驶自动驾驶自动驾 驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
					contentText: 'XXXXXXXXXXXXXXXX',
					relatedCompany: '自动驾驶',
					repostNum:11,
					commentNum:22,
					likeNum: 99,
					icon: ''
				}],
				commentItem: [{
					id: '',
					userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
					userName:'userName',
					time:'2022-01-25 08:00',
					readNum:2233,
					contentTitle: '自动驾驶自驾驶自自动驶自驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
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
					time:'2022-01-25 08:00',
					readNum:2233,
					contentTitle: '自动驾驶自驾驶自自动驶自驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
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
					time:'2022-01-25 08:00',
					readNum:2233,
					contentTitle: '自动驾驶自驾驶自自动驶自驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
					contentText: 'XXXXXXXXXXXXXXXX',
					relatedCompany: '自动驾驶',
					repostNum:11,
					commentNum:22,
					likeNum: 99,
					icon: ''
				}],
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

		.newsItem {
			margin: 50px 5px;
			padding: 0px 10px 10px;
			background-color: $uni-color-content;
			margin-bottom: 10px;
			.up-block {
				display: flex;
				flex-direction: row;
				align-items: center;
				.user-img {
					image{
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
				.attention-div{
					flex-grow: 1;//这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
    				display: flex;//将它设置为flex,就可以单独对他进行主轴右对齐
    				justify-content: flex-end;
					.icon{
						width: 42px;
						height: 20px;
						font-size: 14px;
						padding: 1px 4px;
						color: #007aff;
						border: 1px solid #007aff;
						border-radius: 4px;
					}
					
				}
			}
			
			.mid-block {
				margin: 6px 6px 6px 6px;
			}
			
			.low-block {
				margin: 0 5px;
				display: flex;
				flex-direction: column;
				.companyDiv {
					display: flex;
					justify-content: space-between;
					.companyFont {
						line-height: 23px;
						font-size: 12px;
						color: #565656;
						display: inline-block;
						padding: 1px 6px;
						border-radius: 4px;
						background-color: #e5e5e5;	
					}
					.star{
						color: #565656;
					}
				}	
			}
			
		}

		.comment{
			padding: 0px 5px 10px;
			font-size: 14px;
			.title{
				background-color: $uni-color-content;
				padding: 10px 10px 10px;
			}
			.list-card{
				margin-top: 4px;
				
				.item{
					background-color: $uni-color-content;
					margin-bottom: 5px;
					padding-bottom: 7px;
					.up-block {
						padding-left: 10px;
						display: flex;
						flex-direction: row;
						align-items: center;
						.user-img {
							image{
								margin-top: 8px; 
								width: 32px; 
								height: 32px; 
								border-radius: 16px;
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
						.attention-div{
							flex-grow: 1;//这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
							display: flex;//将它设置为flex,就可以单独对他进行主轴右对齐
							justify-content: flex-end;
							.icon{
								width: 42px;
								height: 20px;
								font-size: 14px;
								padding: 1px 4px;
								color: #007aff;
								border: 1px solid #007aff;
								border-radius: 4px;
							}
							
						}
					}
					.mid-block {
						margin: 6px 20px;
					}
					.low-block {
						padding: 0 20px;
						display: flex;
						flex-direction: column;
						.bottom-Div {
							display: flex;
							justify-content: space-between;
							font-size: 12px;
							line-height: 23px;
							.time {
								line-height: 24px;
								color: #565656;
							}
							.answer {
								margin-right: 146px;
								color: #007aff;
							}
							.star{
								line-height: 24px;
								color: #565656;
							}
						}	
					}
				}
			}
		}
	
</style>
