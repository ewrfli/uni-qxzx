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
				<view class="newsItem" v-for="(data, index) in newItemList2" @click="toNewDetails(data.article_id)">
					<!-- 头部 -->
					<!-- <view class="up-block">
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
					</view> -->
					<!-- 中间 -->
					<view class="mid-block" >
						<view class="title">
							<text class="article-title" space="nbsp">{{data.article_title}}</text> 
							<u-icon class="star" name="star-fill" color="#F8BA02" size="20"></u-icon>
						</view> 
						<view class="time">{{data.updatedAt}}</view>
						<view class="article-desc" space="nbsp">{{data.article_desc}}</view>
						<view class="mid-coverimg" v-if="data.article_coverimg">
							<image :src="data.article_coverimg" mode=""></image>
						</view>
					</view>

					<!-- 底部 -->
					<view class="low-block">
						<view class="companyDiv">
							<text class="companyFont">{{data.article_tag}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
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
		</view>
	</view>
</template>

<script>
	export default {
		name:"newsHotDetails",
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
						contentTitle: '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动动驾驶自动驾驶自动动驾驶自动驾驶自动动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
						contentText: 'XXXXXXXXXXXXXXXX',
						relatedCompany: '自动驾驶',
						repostNum:11,
						commentNum:22,
						likeNum: 99,
						icon: ''
					}
				],
				userInfo: null,
            	user_id: 1,
			};
		},
		mounted() {
			this.userInfo = uni.getStorageSync('userInfo')
        	this.user_id = this.userInfo.user_id
			this.getmyList(this.user_id)
		},
		methods: {
			toNewDetails(id){
				uni.navigateTo({
					url: '/pages/news/newItemDetails?id='+id
				});
			},
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			},
			getmyList(id){
				this.newItemList2 = []
				uni.request({
					url: `${this.$baseUrl}/star/myarticlelist?user_id=${id}`,  //这里的lid,page,pagesize只能是数字或字母
					method: 'GET',
					success: (res)=>{
						console.log(res.data.data)
						// this.themeList2 = res.data.data
						let mystartartid = []
						res.data.data.forEach(item => {
							console.log(item.article_id)
							mystartartid.push(item.article_id)
							this.newItemList2.push(item.qx_article)
						})
						this.$store.commit('setMyStarArtIdList', mystartartid);// 将star art id存vuex
						console.log('vuex star id', this.$store.state.myStarArtIdList) //从vuex获取
						console.log('mystar mystartartid', mystartartid)
						console.log('mystar this.newItemList2 ',this.newItemList2)
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
	.wrap{
		height: 100vh;
		background-color: $uni-color-backgroundColor;
	}
	.card {
		margin-top: 52px;
		.newsItem {
			padding: 10px 10px 0;
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
				.title{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
				.time{		
					margin-top: 2px;			
					font-size: 12px;
					color: #777777;
				}
				.article-desc{
					margin: 5px 0 10px 0;
					font-size: 15px;
					color: #2b2b2b;
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2; 
				}
				.mid-coverimg {
					image {
						margin: 2px 0 2px 0px; 
						width: 100px; 
						height: 100px; 
						border-radius: 6px;
					}
				}
			}

			.low-block {
				display: flex;
				flex-direction: column;
				.companyDiv {
					margin-left: 6px;
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
