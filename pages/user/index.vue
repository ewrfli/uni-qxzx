<template>
	<view class="wrap">
		<view class="top">
			<view class="avatar-div">
					<view class="user-img">
						<image :src="userInfo.user_avatarimg " mode="" v-if="userInfo"></image>
						<image src="../../static/unlogin.png" v-else></image>
					</view>
					<view class="user-content">
						<view class="user-name" v-if="userInfo">
							{{userInfo.user_name}}
						</view>
						<view class="user-name" v-else>
							未登录
						</view>

						<view class="user-sub">
							<text space="nbsp" class="user-data">普通用户 未认证</text>
						</view>
					</view>
					<view class="userhomepage" @click="toUserHomePage"><view class="touser">个人主页></view></view>
			</view>
			<view class="tips-div">
				<view class="div1">
					<text style="color: #37a4fd;">{{totalTips[0]}}</text>
					<text class="div1-text">企业认证</text>
				</view>
				<view class="div1">
					<text class="data-text">{{totalTips[1]}}</text>
					<text class="div1-text">监控动态</text>
				</view>
				<view class="div1">
					<text class="data-text">{{totalTips[2]}}</text>
					<text class="div1-text">我的发布</text>
				</view>
				<view class="div1">
					<text class="data-text">{{totalTips[3]}}</text>
					<text class="div1-text">消息通知</text>
				</view>
			</view>
		</view>

		<view class="mid">
			<view class="vip-div">
				<vipBanner></vipBanner>
			</view>
			<view class="banner-div">
				<!-- <homeBanner></homeBanner> -->
			</view>
		</view>
		<view class="low">
			<commonFuncDiv :indexPage="indexPage"></commonFuncDiv>
		</view>
	</view>
</template>

<script>
import commonFuncDiv from '../../components/userComponent/commonFuncDiv.vue'
import homeBanner from '../../components/homeBanner/homeBanner.vue'
import vipBanner from '../../components/homeBanner/vipBanner.vue'
export default {
	components: {
		vipBanner,
		homeBanner,
		commonFuncDiv
    },
	data() {
		return {
			indexPage:'',
			userData:{
				id: '',
				userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
				userName:'杨洋样',
				time:2,
				readNum:2233,
				contentTitle: '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
				contentText: 'XXXXXXXXXXXXXXXX',
				relatedCompany: '自动驾驶',
				repostNum:11,
				commentNum:22,
				likeNum: 99,
				icon: ''
			},
			userInfo:undefined,
			totalTips: ['未认证', 123 ,22, 33],
			title: 'Hello'
		};
	},
	onShow(){
		console.log('当前页面',this.$mp.page.route)
		this.indexPage = this.$mp.page.route
		this.userInfo = uni.getStorageSync('userInfo')
	},
	onLoad() {
		console.log(uni.$u.config.v);
	},
	mounted() {
		console.log('getsyncloc',uni.getStorageSync('userInfo'))
		// this.userInfo = uni.getStorageSync('userInfo')
	},
	methods: {
		toUserHomePage(){
			uni.navigateTo({
				url: '/pages/user/userHomePage'
			});
		}
	}
};
</script>

<style lang="scss">

.wrap {
	.top{
		.avatar-div {
			padding: 10px 18px;
			background-color: #eaf4fe;
			display: flex;
			flex-direction: row;
			align-items: center;
			.user-img {
				image{
					margin-left: 10px;
					margin-top: 8px; 
					width: 50px; 
					height: 50px; 
					border-radius: 25px;
				}
			}
			.user-content {
				height: 42px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 10px;
				.user-name {
					font-weight: 800;
				}
				.user-sub {
					font-size: 12px;
					color: #777777;
				}
			}
			.userhomepage{
				flex-grow: 1;//这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
				display: flex;//将它设置为flex,就可以单独对他进行主轴右对齐
				justify-content: flex-end;
				.touser{
					width: 68px;
					height: 20px;
					font-size: 14px;
					color: #777777;
				}
				
			}
		}
		.tips-div {
			background-color: #eaf4fe;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			color: #303133;
			border-radius: 5px;
			.div1{
				height: 55px;
				text-align: center;
				.data-text{
					font-weight: 600;
				}
				.div1-text {
					display: block; 
					margin-top: 5px;
					font-size: 15px;
				}
			}
		}
	}
	.mid{
		.vip-div{
			padding: 2px 2px;
		}
		.banner-div{
			padding: 0px 3px;
		}
	}
	.low{

	}
}
</style>
