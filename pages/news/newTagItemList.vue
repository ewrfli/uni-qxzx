<template>
	<view class="card">
        <u-navbar :title="titleName" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-icon name="share-square" size="22" color="#007aff"></u-icon>
            </view>
		</u-navbar>
		<view class="top-title">
			<view class="left-title">
				资讯列表
			</view>
			<view class="right-title">
				查看全部
			</view>
		</view>
		<view class="itemList" v-if="newItemList2.length>0">
			<view class="newsItem" v-for="(data, index) in newItemList2 || newItemList" @click="toNewDetails(data.article_id)">
				<!-- 头部 -->
				<view class="up-block">
					<view class="user-img">
						<image :src="data.qx_user ? data.qx_user.user_avatarimg : '../../static/qxzxlogo.png'" mode=""></image>
						<!-- <u-icon class="user-v" name="level" color="#007aff" size="20"></u-icon> -->
					</view>
					<view class="user-content">
						<view class="user-name">
							{{data.qx_user ? data.qx_user.user_name : '企险资讯'}}
							<u-icon class="username-v" name="level" color="#007aff" size="20"></u-icon>
						</view>
						<view class="user-sub">
							<text space="nbsp" class="user-data">{{data.updatedAt}}    阅读 {{data.article_read_count}}</text>
						</view>
					</view>
				</view>
				<!-- 中间 -->
				<view class="mid-block">
					<view class="article-title" style="font-weight: 600; margin-bottom: 4px;">{{data.article_title}}</view>
					<text space="nbsp">{{data.article_desc}}</text>
				</view>
				<!-- 底部 -->
				<view class="low-block">
					<view class="companyDiv">
						<text v-if="data.article_tag" class="companyFont">{{data.article_tag}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
						<text v-if="data.article_company" class="companyFont">{{data.article_company}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
					</view>
					<view class="threeIcon">
						<view class="threeIcon1">
							<u-icon name="share-square" color="#565656" size="20"></u-icon>
							<text>{{data.article_repost_count}}</text>
						</view>
						<view class="threeIcon1">
							<u-icon name="chat" color="#565656" size="20"></u-icon>
							<text>{{data.article_comment_count}}</text>
						</view>
						<view class="threeIcon1">
							<u-icon name="thumb-up" color="#565656" size="20"></u-icon>
							<text>{{data.article_like_count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
        <view class="listNull" v-else>暂无数据</view>
	</view>
</template>

<script>
	export default {
		name:"tabNewsList",
		data() {
			return {
                titleName: '话题资讯',
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
					}
				]
			};
		},
		onShow() {
			console.log('App Show newTagItemList')
			// this.getList()
		},
        onLoad(option){
            console.log('onLoad',option.id,option.name)
            this.titleName = option.name
            this.getList(option.id)
        },
		mounted() {
			console.log('App mounted newTagItemList')
			// this.getList()
		},
		methods: {
            leftClick(){
				let pages = getCurrentPages(); // 当前页面
				let beforePage = pages[pages.length - 2]; // 前一个页面
				uni.navigateBack({
					delta: 1,
					success: function() {
						beforePage.$vm.refreshRequest(); // 执行前一个页面的刷新
					}
				});
				// uni.switchTab({
				// 	url: '/pages/home/index'
					
				// })
				
			},
			toNewDetails(id){
				console.log(id)
				uni.navigateTo({
					url: '/pages/news/newItemDetails?id='+id
				});
			},
			getList(tag_id){
			    uni.request({
			          url: `${this.$baseUrl}/article/list?article_tag_id=${tag_id}&pageNo=1&pageSize=30`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log(res.data.data)
						  res.data.data.forEach(item => {
							  	this.newItemList2.push(item)
						  })
						  console.log('this.newItemList2资讯列表',this.newItemList2)
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
        .listNull{
            text-align: center;
            color: #007AFF;
            margin-top: 110px;
            font-size: 20px;
        }
		.top-title {
			padding: 10px 10px 10px;
			background-color: $uni-color-content;
			margin-bottom: 4px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.left-title {
				font-size: 16px;
				font-weight: 800;
			}
			.right-title {
				margin-top: 2px;
				font-size: 12px;
				color: #007AFF;
			}
		}
		.itemList {
			
		}
		.newsItem {
			padding: 0px 10px;
			background-color: $uni-color-content;
			margin-bottom: 10px;
			.up-block {
				display: flex;
				flex-direction: row;
				align-items: center;
				.user-img {
					position: relative;
					image{
						border: #007AFF solid 1px;
						margin-top: 8px; 
						width: 36px; 
						height: 36px; 
						border-radius: 4px;
					}
					.user-v{
						position: absolute;
						bottom: 10px;
						left: 22px;
					}
				}
				.user-content {
					display: flex;
					flex-direction: column;
					margin-left: 6px;
					.user-name {
						display: flex;
						flex-direction: row;
						.username-v {
							margin-top: 1px;
						}
					}
					.user-sub {
						font-size: 12px;
						color: #777777;
					}
				}
			}
			
			.mid-block {
				margin: 6px 6px 6px 6px;
			}
			
			.low-block {
				display: flex;
				flex-direction: column;
				.companyDiv {
					.companyFont {
						margin-right: 4px;
						line-height: 23px;
						font-size: 12px;
						color: #007AFF;
						display: inline-block;
						padding: 1px 6px;
						border-radius: 2px;
						background-color: #dfeeff;	
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
