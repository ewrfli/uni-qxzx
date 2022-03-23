<template>
	<view class="ComponentMA">
		<view class="top-title">
			<view class="left-title">
				推荐追踪
			</view>
			<view class="right-title">
				一键追踪
			</view>
		</view>
		
		<view class="itemList">
			    <u-scroll-list :indicator="false">
					<view class="itemCard" @click="toCompany(item.company_id)" v-for="(item, index) in MonitorAdviceList2" :key="index">
						<view class="close">
							x
						</view>
						<view class="Card" >
							<view class="topDiv">
								<view class="img">
									<image style="" :src="item.company_coverimg"></image>
								</view>
								<view class="content">
									<text class="name">
										{{item.company_name}}
									</text>
									<view class="tag">
										{{item.tag_name}}
									</view>
									<view class="prompt">
										新增一条公告调研报告
									</view>
								</view>
							</view>
							<view class="bottomDiv">
								查看并追踪
							</view>
						</view>
					</view>
					
					
			        <!-- <view v-for="(item, index) in list" :key="index">
			            <image style="width: 36px; height: 36px; border-radius: 4px;" :src="item.thumb"></image>
			        </view> -->
			    </u-scroll-list>
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeTabComponentMonitorAdvice",
		data() {
			return {
				MonitorAdviceList2:[],
				 MonitorAdviceList: [
					{
						name: "北京xxxxx科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/1.jpg"
					}, 
					{
						name: "天津华峰车空xx北京华峰车空峰车空科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/2.jpg"
					}, 
					{
						name: "杭州xxxxxx科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/3.jpg"
					}, 
					{
						name: "宁波xxxxxxx科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/4.jpg"
					}, 
					{
						name: "上海xxxxx科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/5.jpg"
					}]
			};
		},
		mounted(){
			this.getList()
		},
		methods: {
			toCompany(id){
				console.log(id)
				uni.navigateTo({
					url: '/pages/monitor/company?id='+id
					
				});
			},
			getList(){
				uni.request({
			          url: `${this.$baseUrl}/company/hlist?company_name=&pageNo=1&pageSize=6`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log('monitor advice',res.data.data)
						  this.MonitorAdviceList2 = res.data.data
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
	
	.ComponentMA {
		margin-top: 10px;
		padding: 10px 10px 0px 10px;
		background-color: $uni-color-content;
		
		.top-title {

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.left-title {
				font-size: 14px;
			}
			.right-title {
				font-size: 12px;
				color: #007AFF;
			}
		}

		.itemCard {
			background-color: $uni-color-content;
			position: relative;
			.close {
				position: absolute;
				right: 15px;
				top: 10px;
				color: #7e8186;
				font-size: 14px;
				
			}
			.Card {
				margin: 10px 10px 0px 0px;
				background-color: #ffffff;
				width: 160px;
				border-radius: 5px;
				box-shadow: rgba(0,0,0,.2) 1px 0px 5px;
				
				.topDiv {
					background-color: #ffffff;
					display: flex;
					flex-direction: row;
					.img{
						image{
							width: 34px; 
							height: 34px; 
							border-radius: 4px; 
							margin: 9px 5px 5px; 
						}
					}
					.content {
						padding: 4px 13px 0px 4px;
						text-overflow: ellipsis;
						overflow: hidden;
						height: 78px;
						.name {
							font-size: 14px;
							white-space: nowrap;
						}
						.tag {
							line-height: 10px;
							font-size: 10px;
							line-height: 18px;
							color: #7e8186;
						}
						.prompt {
							padding: 5px 0;
							font-size: 12px;
							line-height: 14px;
							width: 90px;
						}
					}
				}
				
				.bottomDiv {
					font-size: 14px;
					text-align: center;
					color: #007AFF;
					padding: 5px 10px 5px 10px;
					background-color: rgba($color: #6cacff, $alpha: .2);
					border-radius: 0px 0px 5px 5px;
				}
			}
			

		}
	}	
</style>
