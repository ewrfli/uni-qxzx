<template>
	<view class="content">
			<view class="comment">
				<view class="title"><text>评论动态</text></view>
				<view class="list-card">
					<view class="item" v-for="(data, index) in commentItem2">

						<view class="up-block">
							<view class="user-img">
								<image :src="data.qx_user.user_avatarimg" mode=""></image>
							</view>
							<view class="user-content">
								<view class="user-name">
									{{data.qx_user.user_name}}
								</view>
							</view>
						</view>

						<view class="mid-block">
							<text space="nbsp">{{data.comment_content}}</text>
						</view>

						<view class="low-block">
							<view class="bottom-Div">
								<text class="time">{{data.updatedAt}} </text>
								<text class="answer">回复 </text>
								<text class="star">
									<u-icon style="display: inline-block;" name="thumb-up" color="#565656" size="19"></u-icon>
									<span style="line-height: 23px;">{{data.comment_like_count}}</span>
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
        props: {

        },
		name:"newItemDetails",
		data() {
			return {
				articleid: null,
                commentItem2:[],
				commentItem: [{
					id: '',
					userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
					coverImg:'',
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
        mounted() {
            console.log('评论列表组件', this.$store.state.curArticleId)
			this.getCommentList(this.$store.state.curArticleId)
        },
		methods: {
			getCommentList(id){
			    uni.request({
			          url: `${this.$baseUrl}/comment/curarticle?id=${id}`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log(res.data.data)
							this.commentItem2 = res.data.data
						  
						  console.log('this.commentItem2详情',this.commentItem2)
					  },
			          fail: (err)=>{
						  console.log(err)
					  }
			
			    })
			
			}
		},
	}
</script>

<style lang="scss">
	.content{
		background-color: $uni-color-backgroundColor;

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
