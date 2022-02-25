<template>
	<view class="wrap">
		<u-navbar title="编辑资料" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-button type="primary" text="更新"></u-button>
            </view>
		</u-navbar>
		<view class="top-card">	
			<view class="avatar">
				<image :src="userInfo.user_avatarimg" mode=""></image>
			</view>
			<view class="right-div">
				<view class="name">{{userInfo.user_name}}</view>
				<view class="accountnum">账号：{{userInfo.user_phone}}</view>
				<view class="perfect">资料完善度99%</view>
			</view>
		</view>
		<view class="mid-card">
			<view class="mid-title">基本信息</view>
            <u-line length="100%" style="margin: 0 auto;"></u-line>
			<view class="item">
				<view class="title">介绍</view>
				<view class="desc"><input v-model="userInfo.user_desc"/></view>
			</view>
			<u-line length="100%" style="margin: 0 auto;"></u-line> 
			<view class="item">
				<view class="title">性别</view>
				<view class="desc"><input v-model="userInfo.user_sex"/></view>
			</view>
			<u-line length="100%" style="margin: 0 auto;"></u-line>
			<view class="item">
				<view class="title">手机</view>
				<view class="desc"><input v-model="userInfo.user_phone"/></view>
			</view>
			<u-line length="100%" style="margin: 0 auto;"></u-line>
			<view class="item">
				<view class="title">邮箱</view>
				<view class="desc"><input v-model="userInfo.user_email"/></view>
			</view>
			<u-line length="100%" style="margin: 0 auto;"></u-line>
			<view class="item">
				<view class="title">生日</view>
				<view class="desc"><input v-model="userInfo.user_birthday"/></view>
			</view>
			<u-line length="100%" style="margin: 0 auto;"></u-line>
			<view class="item">
				<view class="title">行业</view>
				<view class="desc"><input v-model="userInfo.user_industry"/></view>
			</view>

			<u-line length="100%" style="margin: 0 auto;"></u-line>
			<view class="item">
				<view class="title">公司</view>
				<view class="desc"><input v-model="userInfo.user_company_name"/></view>
			</view>
			<u-line length="100%" style="margin: 0 auto;"></u-line>
			<view class="update" style="width: 100px; margin: 0 auto; margin-top: 25px;">
                <u-button type="primary" text="更新"></u-button>
            </view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newsHotDetails",
		data() {
			return {
				userInfo: {
					user_id: '1111111',
					user_name: '杨洋样',
					user_sex: '男',
					user_avatarimg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
					user_desc: '自动驾驶自动驾驶自动驾驾驶',
					user_power: '普通用户',
					user_phone: '123123123',
					user_email: 'XXXXXXXXXXXXXXXX',
					user_birthday: '1990-12-12',
					user_industry: '汽车',
					user_company_name: 'xxx汽车有限公司'
				},
				userData: {
					sex: '男',
					id: '',
					userImg: 'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
					userName: '杨洋样',
					time: 2,
					readNum: 2233,
					contentTitle: '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
					contentText: 'XXXXXXXXXXXXXXXX',
					relatedCompany: '自动驾驶',
					repostNum: 11,
					commentNum: 22,
					likeNum: 99,
					icon: ''
				}
			};
		},
		onShow(){

		},
		methods: {
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			},
			getUserInfo(){
				
			}
		},
	}
</script>

<style lang="scss">
	.wrap{
		background-color: $uni-color-backgroundColor;
	}
	.u-nav-slot {
		.u-button{
			height: 28px;
		}
	}
	.top-card {
		background-color: #ffffff;
		padding: 0 15px;
		margin-top: 44px;
		display: flex;
		.avatar {
			padding: 10px;
			margin-top: 2px;
			image {
				width: 78px;
				height: 78px;
				border-radius: 39px;
			}
		}
		.right-div {
			padding: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.name {
				font-size: large;
				font-weight: 600;
			}
			.accountnum {
				color: #afafaf;
                font-size: 16px;
			}
			.perfect {
				color: #afafaf;
                font-size: 16px;
			}
		}
	}
	.mid-card {
		margin-top: 10px;
		background-color: #ffffff;
        margin-top: 10px;
        .mid-title {
            padding: 10px 20px;
			font-weight: 600;
        }
		.item{
			display: flex;
			flex-direction: row;
			padding: 10px 20px;
			.title {
				width: 80px;
			}
			.desc {
				color: #afafaf;
			}
		}
	}
</style>
