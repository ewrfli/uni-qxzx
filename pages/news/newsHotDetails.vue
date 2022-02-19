<template>
	<view class="content">
		<u-navbar title="热门榜单" @leftClick="leftClick" :autoBack="true" :fixed="true">
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
				<view class="item" v-for="(data, index) in itemList2" :key="data.article_id">
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
	</view>
</template>

<script>
	export default {
		name:"newsHotDetails",
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
			this.getList()
		},
		methods: {
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			},
			toNewDetails(id){
				console.log(id)
				uni.navigateTo({
					url: '/pages/news/newItemDetails?id='+id
				});
			},
			getList(){
			    uni.request({
			          url: `${this.$baseUrl}/article/list?article_category=&pageNo=1&pageSize=30`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log(res.data.data)
						  res.data.data.forEach(item => {
							  	this.itemList2.push(item)
						  })
						  console.log('this.newItemList2资讯列表热门榜单',this.itemList2)
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
