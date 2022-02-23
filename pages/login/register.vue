<template>
	<view class="wrap">
		<view class="top">
            <view class="title">企险资讯</view>
            <view class="title-desc">正在注册</view>
		</view>

		<view class="mid">
            <view class="item">
                 <u-input
                    v-model="userData.user_phone"
                    placeholder="请输入手机号"
                    border="surround"
                    clearable
                ></u-input>
			</view>
             <view class="item">
				<u-input
                    v-model="userData.user_password"
                    placeholder="请输入密码"
                    password='password'
                    border="surround"
                    clearable
                ></u-input>
			</view>
            <view class="item">
				<u-input
                    v-model="userData.user_password2"
                    placeholder="请再次输入密码"
                    password='password'
                    border="surround"
                    clearable
                ></u-input>
			</view>
            <view class="item">
                 <u-input
                    v-model="userData.user_name"
                    placeholder="请输入用户名"
                    border="surround"
                    clearable
                ></u-input>
			</view>

            <view class="item">
				<u-button type="primary" shape="circle" text="确认注册" @click="register"></u-button>
			</view>
		</view>

		<view class="low">
            <view class="contract">《用户协议》</view>
            <view class="contract">《隐私政策》</view>
		</view>

        <view class="toast">
            <u-toast ref="uToast"></u-toast>
        </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
            show: false,
			userData:{
                user_phone: null,
                user_password: null,
                user_password2:null,
                user_name: null
			},
            checkboxValue1:[],
            // 基本案列数据
            checkboxList1: [{
                    name: '我已阅读并同意',
                    disabled: false
                }
            ],
		};
	},
	onLoad() {
		console.log(uni.$u.config.v);
	},
	methods: {
        register(){
            console.log(this.userData)
            if(this.userData.user_phone === null || this.userData.user_password === null || this.userData.user_name === null){
                this.$refs.uToast.show({
                    type: 'error',
                    title: '用户名手机密码不能为空',
                    message: "用户名手机密码不能为空",
                })
                return
            }
            else if (String(this.userData.user_password).length < 6){
                this.$refs.uToast.show({
                    type: 'error',
                    title: '密码位数不符合规定',
                    message: "密码位数不符合规定",
                })
                return
            }
            else if (!(this.userData.user_password ===  this.userData.user_password2)){
                this.$refs.uToast.show({
                    type: 'error',
                    title: '两次密码输入不相同',
                    message: "两次密码输入不相同",
                })
                return
            }
            else{
                uni.request({
                    url: `${this.$baseUrl}/user/register`,  //这里的lid,page,pagesize只能是数字或字母
                    method: 'POST',
                    data:{
                        user_name : this.userData.user_name,
                        user_phone : this.userData.user_phone,
                        user_password : this.userData.user_password
                    },
                    success: (res)=>{
                        console.log('注册成功信息',res.data)
                        if(res.data.code === 200){
                            this.$store.commit('setRegisterUserDate', res.data.data);// 将注册成功信息存vuex
                            this.$refs.uToast.show({
                                type: 'success',
                                title: '注册成功',
                                message: "注册成功",
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
                                complete() {
                                    uni.navigateTo({
                                        url: '/pages/login/login'
                                    });
                                }
                            })
                        }else{
                            this.$refs.uToast.show({
                                type: 'console.error();',
                                title: res.data.msg,
                                message: res.data.msg,
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
                                complete() {

                                }
                            })
                        }
                    },
                    fail: (err)=>{
                        console.log(err)
                    }
        
            })
                this.toLogin()
            }
        },
        toLogin() {
            this.$refs.uToast.show({
                type: 'success',
                title: '注册成功',
                message: "正在跳转登录界面",
                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
                complete() {
                    uni.navigateTo({
                        url: '/pages/login/login'
                    })
                }
            })
        }
	}
};
</script>

<style lang="scss">

.wrap {
    .top{
        padding: 60px 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title{
            font-size: 30px;
            font-weight: 800;
        }
        .title-desc{
            margin-top: 10px;
        }
    }

    .mid{
        .item{
            display: flex;
			flex-direction: row;
            justify-content: center;
			padding: 10px 20px;
            .u-input{
                padding: 5px 18px !important;
                height: 30px;
                border-radius: 30px;
                border: 1px solid #c0c4cc;
            }

            .u-button{
                width: 98%;
            }
			.title {
                font-size: 20px;
				width: 80px;
			}
			.desc {
				color: #afafaf;
			}
            .contract {
                font-size: 15px;
            }
        }
    }

    .low{
        padding-top: 170px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .contract{
            color: #3c9cff;
        }
    }
}
</style>
