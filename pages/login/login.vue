<template>
	<view class="wrap">
		<view class="top">
            <view class="title">企险资讯</view>
            <view class="title-desc">为用户实时了解最新风险信息及相关企业相关风险信息</view>
		</view>

		<view class="mid">
            <view class="item">
                 <u-input
                    v-model="userData.user_phone"
                    placeholder="请输入账号"
                    border="surround"
                    clearable
                ></u-input>
			</view>
             <view class="item">
				<u-input
                    v-model="userData.user_password"
                    placeholder="请输入密码"
                    password = 'password'
                    border="surround"
                    clearable
                ></u-input>
			</view>
            <view class="item">
                    <view>
                        <u-checkbox-group
                            v-model="checkboxValue1"
                            placement="column"
                            @change="checkboxChange"
                        >
                            <u-checkbox
                                :customStyle="{marginBottom: '8px'}"
                                v-for="(item, index) in checkboxList1"
                                :key="index"
                                :label="item.name"
                                :name="item.name"
                            >
                            </u-checkbox>
                        </u-checkbox-group>
                    </view>
                    <view class="contract">《用户协议》《隐私政策》</view>
            </view>
            <view class="item">
				<u-button type="primary" shape="circle" text="登录" @click="toLogin"></u-button>
			</view>
            <view class="item">
				<u-button type="primary" shape="circle" :plain="true" text="注册" @click="toRegister"></u-button>
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
            userInfo: undefined,
			userData:{
                user_phone: null,
                user_password: null
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
    onShow(){
        console.log('onshow从vuex获取RegisterUserDate', this.$store.state.registerUserDate)
        this.userData.user_phone = this.$store.state.registerUserDate.user_phone
        this.userData.user_password = this.$store.state.registerUserDate.user_password
    },
	onLoad() {
		console.log(uni.$u.config.v);
	},
	methods: {
         open() {
            this.$refs.popup.open()
        },
        /**
         * 点击取消按钮触发
         * @param {Object} done
         */
        close() {
            // TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
            // ...
            this.$refs.popup.close()
        },
        checkboxChange(){
            this.checkboxList1[0].disabled ? this.checkboxList1[0].disabled = false : this.checkboxList1[0].disabled = true
            console.log(this.checkboxList1[0].disabled)
        },
        toLogin(){
            if(!this.checkboxList1[0].disabled){
                this.$refs.uToast.show({
                    type: 'error',
                    title: '未勾选用户协议',
                    message: "未勾选用户协议"
                })
                return
            }
            uni.request({
                    url: `${this.$baseUrl}/user/login`,  //这里的lid,page,pagesize只能是数字或字母
                    method: 'POST',
                    data:this.userData,
                    success: (res)=>{
                        console.log(res.data)
                        this.userInfo = res.data.data
                        console.log('this用户信息',this.userInfo)
                        if(res.data.code === 200){
                            uni.setStorageSync('token', res.data.token);	// 将登录token的方式存在手机硬盘中
							uni.setStorageSync('userInfo',res.data.data);	// 将用户信息存储在手机硬盘中
                            this.$refs.uToast.show({
                                type: 'success',
                                title: '登录成功',
                                message: "登录成功",
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
                                complete() {
                                    uni.switchTab({
                                        url: '/pages/home/index'
                                    });
                                }
                            })
                        }else{
                            this.$refs.uToast.show({
                                type: 'error',
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
            
        },
        toRegister(){
            uni.navigateTo({
				url: '/pages/login/register'
			});
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
                color: #3c9cff;
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
