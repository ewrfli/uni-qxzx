<template>
	<view class="card">
		<view class="top-title">
			<view class="left-title">
				资讯热榜
			</view>
			<view class="right-title" @click="toNewsHotDetails">
				查看全部
			</view>
		</view>
		
		<view class="itemList">
			<view class="item" v-for="(data, index) in newItemList2">
				<view class="flexDiv">
					<view class="left-img">
						 <image style="width: 36px; height: 36px; border-radius: 4px;" :src="data.article_coverimg" mode=""></image>
					</view>
					<view class="title">
						<view class="Content-title">
							<view class="Content-title-left">
								{{data.article_title}}
							</view>
							<!-- <view class="top-title-right-hotIcon">
								<u-icon name="photo" color="#F63A34" size="20"></u-icon>
							</view> -->
						</view>
						<view class="sub-title">
							{{data.article_desc}}
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
		name:"tabNewsHot",
		data() {
			return {
				newItemList2:[],
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
		},
		mounted() {
			console.log('App mounted newlist热点榜')
			this.getList()
		},
		methods: {
			toNewsHotDetails(){
				console.log('toNewsHotDetails热点榜')
				uni.navigateTo({
					url: '/pages/news/newsHotDetails'
				});
			},
			getList(){
			    uni.request({
			          url: `${this.$baseUrl}/article/list?article_category=热点榜&pageNo=1&pageSize=30`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log(res.data.data)
						  res.data.data.forEach(item => {
							  	this.newItemList2.push(item)
						  })
						  console.log('this.newItemList2热点榜',this.newItemList2)
					  },
			          fail: (err)=>{
						  console.log(err)
					  }
			
			    })
			
			}
		}
	}
</script>

<style lang="scss">
	.card {
		margin-top: 6px;
		padding: 10px 10px 0px 10px;
		background-color: $uni-color-content;
		.top-title {

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.left-title {
				font-size: 16px;
				font-weight: 800;
			}
			.right-title {
				font-size: 12px;
				color: #007AFF;
			}
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
