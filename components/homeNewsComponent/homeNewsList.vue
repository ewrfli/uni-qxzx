<template>
	<view class="card">
		<view class="top-title">
			<view class="left-title">
				实时快讯
			</view>
			<view class="right-title">
				查看全部
			</view>
		</view>
		<view class="itemList">
			<view class="borderDiv">
				<view class="newsItem" v-for="(data, index) in newItemList2 || newItemList" @click="toNewDetails(data.article_id)">
					<!-- 头部 -->
					<view class="up-block">
						<view class="news-title">
							<view class="item-title">
								{{data.article_title}}
							</view>
						</view>

						<view class="news-sub">
							<view class="point"></view>
							<view class="news-times">
								<text space="nbsp" class="user-data">{{data.article_updatedAt}}    热度 {{data.article_read_count}}</text>
							</view>
						</view>
					</view>
					<!-- 中间 -->
					<view class="mid-block">
						<text class="contentText" space="nbsp">{{data.article_desc}}</text>
						<view class="coverimg" v-if="data.article_coverimg">
							<image style="margin-top: 8px; width: 350px; height: 160px; border-radius: 2px;" :src="data.article_coverimg" mode=""></image>
						</view>
					</view>
					<!-- 底部 -->
					<view class="low-block">
						<view class="companyDiv">
							<text class="companyFont">{{data.article_tag}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
							<text class="companyFont">{{data.article_company}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabNewsList",
		data() {
			return {
				newItemList2:[],
				newItemList:[
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
		onShow() {
			console.log('App Show newlist')
			// this.getList()
		},
		mounted() {
			console.log('App mounted newlist')
			this.getList()
		},
		methods: {
			toNewDetails(id){
				console.log(id)
				uni.navigateTo({
					url: '/pages/news/newItemDetails?id='+id
				});
			},
			getList(){
			    uni.request({
			          url: `${this.$baseUrl}/article/list?article_category=实时快讯&pageNo=1&pageSize=30`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log(res.data.data)
						  res.data.data.forEach(item => {
							  	this.newItemList2.push(item)
						  })
						  console.log('this.newItemList2',this.newItemList2)
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
	.card {
		margin-top: 10px;
		.top-title {
			padding: 10px 10px 10px;
			background-color: $uni-color-content;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.left-title {
				font-size: 14px;
			}
			.right-title {
				margin-top: 2px;
				font-size: 12px;
				color: #007AFF;
			}
		}
		.itemList {
			padding-left: 14px;
		}
		.borderDiv{
			border-left: 0.5px solid #93bfee;
		}
		.point {
			width: 6px;
			height: 6px;
			border-radius: 3px;
			top: 11px;
			left: -19px;
			background-color: #007aff;
    		position: relative;
		}
		.newsItem {
			padding: 0px 10px;
			background-color: $uni-color-content;
			margin-bottom: 26px;
			margin-left: 6px;
			.up-block {
				.news-title {
					margin: 5px 0 0 0;
					font-weight: 800;
				}
				.news-sub {
					.news-times {
						font-size: 13px;
						color: #777777;
					}
				}
			}
			
			.mid-block {
				margin: 6px 6px 10px 3px;
				.contentText{
					color: #313131;
				}
			}
			
			.low-block {
				display: flex;
				flex-direction: column;
				.companyDiv {
					.companyFont {
						margin-right: 6px;
						line-height: 23px;
						font-size: 12px;
						color: #007AFF;
						display: inline-block;
						padding: 1px 6px;
						border-radius: 4px;
						background-color: #dfeeff;	
					}
				}	

			}
		}

	}
</style>
