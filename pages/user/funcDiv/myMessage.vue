<template>
	<view class="wrap">
		<u-navbar title="监控信息" @leftClick="leftClick" :autoBack="true" :fixed="true">
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
			<tabMonitorDaily></tabMonitorDaily>
		</view>
		<!-- <view class="card">	
			<u-line length="100%" style="margin: 0 auto;"></u-line>
				<view class="tabs-item" v-for="(data, index) in userInfo">
					<view class="item">
						<view class="flexDiv">
							<view class="left-img">
								<image style="width: 36px; height: 36px; border-radius: 18px;" :src="data.user_avatarimg" mode=""></image>
							</view>
							<view class="title">
								<view class="Content-title">
									<view class="Content-title-left">
									{{data.user_name}}
									</view>
								</view>
								<view class="sub-title">
									{{data.user_time}}
								</view>
							</view>
						</view>
						<view class="right-hotIcon">
							<image style="width: 24px; height: 24px;" src="../../../static/message.png" mode=""></image>
						</view>                
					</view> 
					<u-line style="margin: 0 10px;" length="98%"></u-line>     
				</view>
		</view> -->
	</view>
</template>

<script>
import tabMonitorDaily from '../../../components/monitorComponent/tabMonitorDaily.vue' //../../components/monitorComponent/tabMonitorDaily.vue
	export default {
		name:"newsHotDetails",
		components: {
			tabMonitorDaily
		},
		data() {
			return {
				userInfo: [{
					user_id: '1111111',
					user_name: '杨洋样',
					user_sex: '男',
					user_avatarimg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
					user_desc: '自动驾驶自动驾驶自动驾驾驶',
					user_power: '普通用户',
					user_phone: '123123123',
					user_email: 'XXXXXXXXXXXXXXXX',
					user_birthday: '1990-12-12',
					user_time: '18:02',
					user_industry: '汽车',
					user_company_name: 'xxx汽车有限公司'
				},{
					user_id: '222222',
					user_name: '张小亮',
					user_sex: '男',
					user_avatarimg: 'http://127.0.0.1:3002/uploads/20220225/myfile-1645803541042-Snipaste_2022-01-22_22-36-13.jpg',
					user_desc: '自xxxxxxxxx动驾驾驶',
					user_power: '普通用户',
					user_phone: '123123123',
					user_email: '',
					user_birthday: '1990-12-12',
					user_time: '15:40',
					user_industry: '汽车',
					user_company_name: 'xxx汽车有限公司'
				},{
					user_id: '222222',
					user_name: '刘小峰',
					user_sex: '男',
					user_avatarimg: 'http://127.0.0.1:3002/uploads/20220225/myfile-1645803447058-图层16.png',
					user_desc: '自xxxxxxxxx动驾驾驶',
					user_power: '普通用户',
					user_phone: '123123123',
					user_email: '',
					user_birthday: '1990-12-12',
					user_time: '15:40',
					user_industry: '汽车',
					user_company_name: 'xxx汽车有限公司'
				}],
			};
		},
		methods: {
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			}
		},
	}
</script>

<style lang="scss">
	.wrap{
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
			padding: 4px 8px;
			background-color: $uni-color-content;
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
					width: 230px;
					margin-left: 8px;
					overflow:hidden; //超出的文本隐藏
						text-overflow:ellipsis; //溢出用省略号显示
						white-space:nowrap; //溢出不换行
					.Content-title {
						font-size: 14px;
						overflow:hidden; //超出的文本隐藏
						text-overflow:ellipsis; //溢出用省略号显示
						white-space:nowrap; //溢出不换行
					}
					.sub-title {
						color: #afafaf;
						font-size: 10px;
						margin-top: 3px;
					}
				}
			}
			.right-hotIcon {
				margin-top: 12px;
			}
		}
	}
</style>
