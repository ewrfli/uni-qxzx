<template>
	<view class="ComponentMA">
		<view class="top-title">
			<view class="left-title">
				企业排行
			</view>
			<view class="right-title">
				查看
			</view>
		</view>
		
		<view class="itemList">
			    <u-scroll-list :indicator="false">
					<view class="itemCard" v-for=" item in [1,2,3,4]">

						<view class="Card">
                            <view class="topDiv">
                                <view class="card-title">本地优质企业</view>
                                <view class="card-sub">TOP 10</view>
                            </view>

							<view class="midDiv" v-for="(item, index) in companyList" :key="index">
								<view class="img">
									<image :src="item.img"></image>
								</view>
                                <view class="img">
									<image :src="item.img"></image>
								</view>
                                <text class="name">
                                    {{item.name}}
                                </text>
							</view>

							<view class="bottomDiv">
								查看全部>
							</view>
						</view>
					</view>     
			    </u-scroll-list>
		</view>
	</view>
</template>

<script>
	export default {
		name:"companyRankList",
		data() {
			return {
				 companyList: [
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

			.Card {
				margin: 10px 10px 0px 0px;
				background-color: #ffffff;
				width: 240px;
                border: #a2c3fa solid 1px;
				border-radius: 5px;
				box-shadow: rgba(0,0,0,.2) 1px 0px 5px;
				.topDiv {
                    padding: 8px 0px 4px;
                    background-color: #6397f6;
                    border-radius: 5px 5px 0 0;
                    box-shadow: rgba(0,0,0,.2) 2px -3px 7px;
                    color: #ffffff;
                    display: flex;
					flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .card-title{
                        font-size: 15px;
                    }
                    .card-sub{
                        color: #a7c5f9;
                        font-size: 16px;
                    }
                }
				.midDiv {
                    margin-top: 5px;
					background-color: #ffffff;
					display: flex;
					flex-direction: row;
                    justify-content: center;
                    .img{
						image{
							width: 20px; 
							height: 20px; 
							border-radius: 4px; 
							margin: 3px 2px; 
						}
					}
					.name {
						padding: 4px 13px 0px 4px;
						text-overflow: ellipsis;
						overflow: hidden;
                        white-space: nowrap;
						height: 20px;
                        line-height: 20px;
                        font-size: 14px;
					}
				}
				
				.bottomDiv {
					font-size: 14px;
					text-align: center;
					color: #007AFF;
					padding: 5px 10px 5px 10px;
					background-color: rgba($color: #ffffff, $alpha: .2);
					border-radius: 0px 0px 5px 5px;
				}
			}
			

		}
	}	
</style>
