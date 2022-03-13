<template>
	<view class="ComponentMonitorDaily">
		<view class="item-card" v-for="(data, index) in listData">
			<view class="top-div">
				<view class="left-title">
					追踪日报<text style="font-size: 14px; color: #000000; ">{{data.date}}</text>
				</view>
				<view class="right-title">
					共<text style="font-size: 14px; color: #000000;">{{data.totalTips[0] + data.totalTips[1] + data.totalTips[2] + data.totalTips[3]}}</text>条动态
				</view>
			</view>
			
			<view class="tips-div">
				<view class="div1">
					<text class="div1-text">风险</text>
					<text style="color: #ff0000;">{{data.totalTips[0]}}</text>
				</view>
				<view class="div1">
					<text class="div1-text">警示</text>
					<text style="color: #ffaa00;">{{data.totalTips[1]}}</text>
				</view>
				<view class="div1">
					<text class="div1-text">提示</text>
					<text style="color: #515256;">{{data.totalTips[2]}}</text>
				</view>
				<!-- <view class="div1">
					<text class="div1-text">利好</text>
					<text style="color: #00aa00;">{{data.totalTips[3]}}</text>
				</view> -->
			</view>
			
			<view class="content-div">
				<view class="item" v-for="(item, index) in data.content">
					<view class="flexDiv">
						<view class="left-img">
							 <image style="width: 36px; height: 36px; border-radius: 4px;" :src="item.img" mode=""></image>
						</view>
						<view class="title">
							<view class="Content-title">
								<view class="Content-title-left">
									{{item.name}}
								</view>
							</view>
							<view class="sub-title">
								开庭公告<text class="item-tips-text">{{item.tips[0]}}</text>条
								法律诉讼<text class="item-tips-text">{{item.tips[1]}}</text>条
								立案信息<text class="item-tips-text">{{item.tips[2]}}</text>条
								其他<text class="item-tips-text">{{item.tips[3]}}</text>条
							</view>
						</view>
					</view>
					<view class="right-hotIcon">
						<image style="width: 16px; height: 16px;" src="../../static/message.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeTabComponentMonitorDaily",
		data() {
			return {
				listData:[
					{
						date: '2022-02-23',
						totalTips: [0, 1 ,12, 23],
						content: [
							{
								name: "北京xxxxx科技公司",
								tips: [0, 1 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/4.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 2 ,21, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/3.jpg"
							}
						]
					},
										{
						date: '2022-02-23',
						totalTips: [0, 1 ,12, 23],
						content: [
							{
								name: "北京xxxxx科技公司",
								tips: [0, 1 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/4.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 2 ,21, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/3.jpg"
							}
						]
					},
					{
						date: '2022-2-22',
						totalTips: [0, 1 ,22, 33],
						content: [
							{
								name: "杭州xxxxxx科技公司",
								tips: [0, 1 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/1.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 11 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/2.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 11 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/2.jpg"
							}
						]
					}
				]
			};
		},
		onLoad(){
			this.getList()
		},
		methods: {
			getList(){
				uni.request({
			          url: `${this.$baseUrl}/risk/findall`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log('risk',res.data.data)
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
.ComponentMonitorDaily {
	margin-top: 10px;
	.item-card {
		padding: 0 10px 10px;
		background-color: #ffffff;
		margin-bottom: 10px;
		.top-div {
			padding: 5px 0px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 14px;
			color: #838386;
		}
		.tips-div {
			background-color: #f4f4f4;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			color: #303133;
			border-radius: 5px;
			.div1{
				height: 50px;
				text-align: center;
				.div1-text {
					display: block; 
					margin-top: 5px;
					font-size: 14px;
				}
			}
		}
		
		.content-div {
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
							color: #838386;
							font-size: 10px;
							margin-top: 3px;
							.item-tips-text {
								color: #000000;
							}
						}
					}
				}
				.right-hotIcon {
					margin-top: 11px;
				}
			}
		}
	}
}
</style>
