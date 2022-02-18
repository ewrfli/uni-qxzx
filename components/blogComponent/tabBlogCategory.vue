<template>
	<view class="ComponentMA">
		<view class="top-title">
			<view class="left-title">
				关注的话题
			</view>
			<view class="right-title" @click="toBlogThemeList">
				全部
			</view>
		</view>
		
		<view style="margin-top: 6px;" class="itemList">
			    <u-scroll-list :indicator="false">
					<view class="itemCard" v-for="(item, index) in MonitorAdviceList2" :key="index">
						<view class="topDiv">							
							<image :src="item.tag_coverimg"></image>
							<view class="text">
								{{item.tag_name}}
							</view>
						</view>
					</view>
			    </u-scroll-list>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabBlogCategory",
		data() {
			return {
				MonitorAdviceList2: null,
				 MonitorAdviceList: [
					{
						name: "北京华峰车空峰车空科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/1.jpg"
					}, 
					{
						name: "北京华峰车空xx北京华峰车空峰车空科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/2.jpg"
					}, 
					{
						name: "北京华峰车空峰车空科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/3.jpg"
					}, 
					{
						name: "北京华峰车空峰车空科技公司",
						tag: "热门公司",
						prompt: "新增一条公告调研报告",
						describe: "",
						img: "https://cdn.uviewui.com/uview/goods/4.jpg"
					}]
			};
		},
		created() {
			this.getList()
		},
		methods: {
			toBlogThemeList(){
				uni.navigateTo({
					url: '/pages/news/blogThemeList'
				});
			},
			getList(){
			    uni.request({
			          url: `${this.$baseUrl}/tag/list?tag_name=&pageNo=1&pageSize=20`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						  console.log('话题列表tag/list',res.data.data)
						  this.MonitorAdviceList2 = res.data.data
						  console.log('this.newItemList2话题列表',this.MonitorAdviceList2)
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
	
	.ComponentMA {
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

		.itemCard {
			background-color: $uni-color-content;
			position: relative;
			.topDiv {
				width: 100px; 
				height: 100px;
				margin: 5px;
				border-radius: 8px;
				background-color: #c0c0c0;
				box-shadow: rgba(0,0,0,.2) 1px 0px 5px;
				position: relative;
				
				image{
					width: 100px; 
					height: 100px; 
					border-radius: 8px;	
					
				}
				.text {
					position: absolute;
					bottom: 6px;
					width: 93px; 
					height: 40px; 
					padding: 0 8px;
					color: white;
					text-overflow: ellipsis;
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2; 
					
				}
				
			}
			

		}
	}	
</style>
