<template>
	<view class="content">
		<u-navbar title="资讯详情" @leftClick="leftClick" @rightClick="rightClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-icon name="share-square" size="22" color="#007aff"></u-icon>
            </view>
		</u-navbar>

			<view class="newsItem">
				<!-- 头部 -->
				<view class="up-block" @click="toUserPage(newsItem2.qx_user)">
					<view class="user-img">
						<!--  v-for="(user, index) in data.qx_user" -->
						<image :src="newsItem2.qx_user ? newsItem2.qx_user.user_avatarimg : '../../static/qxzxlogo.png'" mode=""></image>
					</view>
					<view class="user-content">
						<view class="user-name">
							{{newsItem2.qx_user ? newsItem2.qx_user.user_name : '企险资讯'}}
							<u-icon class="username-v" name="level" color="#007aff" size="20"></u-icon>
						</view>
						
						<view class="user-sub">
							<text space="nbsp" class="user-data">{{newsItem2.updatedAt}}    阅读 {{newsItem2.article_read_count}}</text>
						</view>
					</view>
					<view class="attention-div"><view class="icon">+关注</view></view>
				</view>
				<!-- 中间 -->
				<view class="mid-block">
					<view style="font-weight: 600; font-size: 22px; margin-bottom: 6px;"><text space="nbsp">{{newsItem2.article_title}}</text></view>
					<rich-text style="color: #3b3b3b;" :nodes="newsItem2.article_content"></rich-text>
					<!-- <text space="nbsp">{{data.contentTitle}}</text> -->
					<!-- <image :src="data.coverImg" mode=""></image> -->
				</view>
				<!-- 底部 -->
				<view class="low-block">
					<view class="companyDiv">
						<span>
							<text @click="toTags(newsItem2.article_tag_id, newsItem2.article_tag)" v-if="newsItem2.article_tag" class="companyFont">{{newsItem2.article_tag}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
							<text @click="toCompany(newsItem2.article_company_id)" v-if="newsItem2.article_company" class="companyFont">{{newsItem2.article_company}}<u-icon style="display: inline-block; margin-left: 4px;" name="arrow-right" color="#565656" size="12"></u-icon></text>
						</span>

						<text class="star" >
							<u-icon v-if="isStar" @click="toDelStar" class="star" style="display: inline-block; margin-left: 4px;" name="star-fill" color="#F8BA02" size="20"></u-icon>
							<u-icon v-else @click="toStar" class="star" style="display: inline-block; margin-left: 4px;" name="star" color="#565656" size="20"></u-icon>
						</text>
						<text v-if="!like" class="like" @click="toLike">
							<u-icon style="display: inline-block; margin-left: 4px;" name="thumb-up" color="#565656" size="20"></u-icon>
							{{newsItem2.article_like_count || 0}}
						</text>
						<text v-else class="like" style="color: #007AFF;" @click="toLike">
							<u-icon style="display: inline-block; margin-left: 4px;" name="thumb-up" color="#007AFF" size="20"></u-icon>
							{{newsItem2.article_like_count+1 || 0}}
						</text>
					</view>

				</view>
			</view>

			<view class="comment">
				<newItemComment ref="newItemComment"></newItemComment>
			</view>

			<view class="float-button">
				<uni-fab
				horizontal="right"
				vertical="bottom"
				@fabClick="trigger"
				></uni-fab>
			</view>

			<uni-popup ref="popup" type="share" background-color="#fff">
				<uni-popup-share title="分享到"></uni-popup-share>
			</uni-popup>
	</view>
</template>

<script>
import newItemComment from "../../components/newItemComment/newItemComment.vue";
	export default {
		components: {
			newItemComment
		},
		data() {
			return {
				show: false,
				isStar: false,
				like: false,
				newid: null,
				newsItem2:{
					qx_user: {}
				},
				newsItem: [{
					id: '',
					userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
					coverImg:'',
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
				userInfo: null,
            	user_id: 1,
			};
		},
		onLoad(option){
			// const order = JSON.parse(decodeURIComponent(option.order));
			this.newid = option.id
			// console.log('this.newid 资讯详情',option,this.newid)
			this.getnewList(option.id)
			this.$store.commit('setCurArticleId', option.id);//把setCurArticleId 传到 vuex 再到 comment子组件
		},
		mounted() {
			this.userInfo = uni.getStorageSync('userInfo')
        	this.user_id = this.userInfo.user_id
			this.getMyStarArt()
			console.log('获取vuex star id', this.$store.state.myStarArtIdList) //从vuex获取
		},
		methods: {
			toUserPage(id){ //去作者页
				console.log('toUserPage', id.user_id)
				uni.navigateTo({
					url: '/pages/user/userHomePage?id=' + id.user_id
				});
			},
			toTags(id, name){
				uni.navigateTo({
					url: '/pages/news/newTagItemList?id='+id+'&name='+name
				});
			},
			toCompany(id){
				console.log('company',id)
				uni.navigateTo({
					url: '/pages/monitor/company?id='+id
				});
			},
			//获取当前用户收藏文章列表
			getMyStarArt(){
				uni.request({
			          url: `${this.$baseUrl}/star/myarticlelist?user_id=${this.user_id}`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  let mystartartid = []
						  res.data.data.forEach(item => {
							  	console.log(item.article_id)
								mystartartid.push(item.article_id)
						  });
							if(mystartartid.includes(Number(this.$store.state.curArticleId))){//判断当前文章是否在用户收藏列表里	mystartartid.includes(Number(this.$store.state.curArticleId))
								console.log('已收藏',mystartartid.includes(Number(this.$store.state.curArticleId)))
								this.isStar = true

							}else{
								console.log('未收藏')
								this.isStar = false
							}			  
							this.$store.commit('setMyStarArtIdList', mystartartid);// 将star art id存vuex
							console.log('获取vuex star id', this.$store.state.myStarArtIdList , this.$store.state.curArticleId) //从vuex获取
					  },
			          fail: (err)=>{
						  console.log(err)
					  }
			
			    })
			},
			toStar(){
				console.log('toStar',Number(this.$store.state.curArticleId))
            	uni.request({
					url: `${this.$baseUrl}/star/add`, 
					method: 'POST',
					data: {
                        user_id:this.userInfo.user_id,
                        article_id: Number(this.$store.state.curArticleId)
                    },
					success: (res)=>{
						if(res.data.code == 200){
							this.isStar = true //更改页面显示
							this.$refs.uToast.show({
								type: 'success',
								title: '收藏成功',
								message: "收藏成功",
								iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
							})

						}else{
							this.$refs.uToast.show({
                                type: 'error',
                                title: res.data.msg,
                                message: res.data.msg,
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
                            })
						}
					},
					fail: (err)=>{
						console.log(err)
					}
			
				})
			},
			toDelStar(){
				console.log('toDelStar',Number(this.$store.state.curArticleId))
				uni.request({
					url: `${this.$baseUrl}/star/del`, 
					method: 'POST',
					data: {
                        user_id:this.userInfo.user_id,
                        article_id: Number(this.$store.state.curArticleId)
                    },
					success: (res)=>{
						if(res.data.code == 200){
							this.isStar = false //更改页面显示
							this.$refs.uToast.show({
								type: 'success',
								title: '取消收藏',
								message: "取消收藏",
								iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
							})

						}else{
							this.$refs.uToast.show({
                                type: 'error',
                                title: res.data.msg,
                                message: res.data.msg,
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
                            })
						}
					},
					fail: (err)=>{
						console.log(err)
					}
			
				})
			},
			toLike(){
				uni.request({
			          url: `${this.$baseUrl}/article/like?id=${this.$store.state.curArticleId}`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						//   console.log(res.data.data)
						  this.like = true
						//   console.log('this.newsItem2详细',this.newsItem2)
					  },
			          fail: (err)=>{
						  console.log(err)
					  }
			
			    })
			},
			//刷新
			refreshRequest(){
				console.log('refreshRequest',this.$store.state.curArticleId)
				this.$refs.newItemComment.refreshRequest()
				// this.getnewList(this.$store.state.curArticleId)
			},
			//floatbotton
			trigger(){
				console.log('trigger')
				uni.navigateTo({
					url: '/pages/news/addComment'
				});
			},
			leftClick(){
				let pages = getCurrentPages(); // 当前页面
				let beforePage = pages[pages.length - 2]; // 前一个页面
				uni.navigateBack({
					delta: 1,
					success: function() {
						beforePage.$vm.refreshRequest(); // 执行前一个页面的刷新
					}
				});
			},

			rightClick(e){
				console.log('rightClick')
				this.$refs.popup.open('bottom')
			},
			getnewList(id){
				let _this = this
			    uni.request({
			          url: `${this.$baseUrl}/article/details?id=${id}`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						//   console.log(res.data.data)
							this.newsItem2 = res.data.data
						  
						//   console.log('this.newsItem2详细',this.newsItem2)
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
		height: 66vh
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
						border: #007AFF solid 1px;
						margin-top: 8px; 
						width: 36px; 
						height: 36px; 
						border-radius: 2px;
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
						margin-right: 4px;
						line-height: 23px;
						font-size: 12px;
						color: #007AFF;
						display: inline-block;
						padding: 1px 6px;
						border-radius: 4px;
						background-color: #dfeeff;		
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
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
							.like{
								line-height: 24px;
								color: #565656;
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
