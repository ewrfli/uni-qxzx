<template>
	<view class="wrap">
		<view class="top">
            <view class="title">企险资讯</view>
            <view class="title-desc">正在注册</view>
		</view>

		<view class="mid">
            <view class="item">
                 <u-input
                    v-model="userData.account"
                    placeholder="请输入手机号"
                    border="surround"
                    clearable
                ></u-input>
			</view>
             <view class="item">
				<u-input
                    v-model="userData.password"
                    placeholder="请输入密码"
                    password='password'
                    border="surround"
                    clearable
                ></u-input>
			</view>
            <view class="item">
				<u-input
                    v-model="userData.password"
                    placeholder="请再次输入密码"
                    password='password'
                    border="surround"
                    clearable
                ></u-input>
			</view>
            <view class="item">
                 <u-input
                    v-model="userData.name"
                    placeholder="请输入姓名"
                    border="surround"
                    clearable
                ></u-input>
			</view>

            <view class="item">
				<u-button type="primary" shape="circle" text="确认注册" @click="showToast"></u-button>
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
                account: '',
                password: '',
                name: ''
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

        },
        showToast() {
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
