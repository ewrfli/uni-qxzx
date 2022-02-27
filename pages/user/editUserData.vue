<template>
	<view class="wrap">
		<u-navbar title="编辑资料" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-button type="primary" text="更新" @click="updateUserInfo"></u-button>
            </view>
		</u-navbar>
		<view class="top-card">	
			<view class="avatar">
				<image :src="userInfo ? userInfo.user_avatarimg : '../../static/unlogin.png'" mode=""></image>
				<u-button style="height: 20px; width: 60px;" type="primary" text="上传" @click="chooseImage"></u-button>
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
				<view class="title">姓名</view>
				<view class="desc"><input v-model="userInfo.user_name"/></view>
			</view>
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
                <u-button type="primary" text="更新" @click="updateUserInfo"></u-button>
            </view>
		</view>
		<view class="toast">
            <u-toast ref="uToast"></u-toast>
        </view>
	</view>
</template>

<script>
	export default {
		name:"newsHotDetails",
		data() {
			return {
				fileList1: [],
				localStorageUserInfo:{},
				userInfo: {
				}
			};
		},
		onShow(){
			this.localStorageUserInfo = uni.getStorageSync('userInfo')
			console.log(this.localStorageUserInfo.user_id)
			this.getUserInfo()
		},
		methods: {	
			// 新增图片
			chooseImage(event) {
				let token = uni.getStorageSync('token')
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://127.0.0.1:3002/upload/img',							
							name: 'myfile',
							header:{Authorization: 'Bearer ' + token},
							filePath: tempFilePaths[0],
							formData: {
								'myfile': 'myfile'
							},
							success: (uploadFileRes) => {
								this.userInfo.user_avatarimg = JSON.parse(uploadFileRes.data).path
								console.log(JSON.parse(uploadFileRes.data).path);
								console.log(this.userInfo)
							}
						});
					}
				});
			},
			uploadFilePromise(url) {
				let token = uni.getStorageSync('token')
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://127.0.0.1:3002/upload/img', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'myfile',
						header:{Authorization: 'Bearer ' + token},
						formData: {
							myfile: 'myfile'
						},
						success: (res) => {
							setTimeout(() => {
								resolve('上传成功',res.data.data)
							}, 100)
						}
					});
				})
			},
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			},
			getUserInfo(){
				let token = uni.getStorageSync('token')
				uni.request({
					url: `${this.$baseUrl}/user/findone?user_id=${this.localStorageUserInfo.user_id}`,  //这里的lid,page,pagesize只能是数字或字母
					method: 'GET',
					header:{Authorization: 'Bearer ' + token},
					success: (res)=>{
						console.log(res.data.data)
						this.userInfo = res.data.data
						console.log('findonethis.success ',this.userInfo)
						uni.setStorageSync('userInfo',this.userInfo);	// 将用户信息存储在手机硬盘中
					},
					fail: (err)=>{
						console.log(err)
					}
			
				})
			},
			updateUserInfo(){
				let token = uni.getStorageSync('token')
				uni.request({
					url: `${this.$baseUrl}/user/update?user_id=${this.localStorageUserInfo.user_id}`,  //这里的lid,page,pagesize只能是数字或字母
					method: 'POST',
					header: {Authorization: 'Bearer ' + token},
					data: this.userInfo,
					success: (res)=>{
						if(res.data.code == 200){
							this.$refs.uToast.show({
								type: 'success',
								title: '修改成功',
								message: "修改成功",
								iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
							})
							console.log('修改成功',res.data.data)
							this.userInfo = res.data.data
							this.getUserInfo()


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
