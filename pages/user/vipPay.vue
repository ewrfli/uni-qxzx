<template>
	<view class="wrap">
		<u-navbar title="支付VIP" @leftClick="leftClick" :autoBack="true" :fixed="true">
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

            <view class="top-div">
				<view class="img-div"><image src="../../static/bannner/banner1.png" mode=""></image></view>
                <view class="price-div">
                    <view class="text">￥{{price}}.00</view>
                    <view class="number">订单号:54653123154131</view>
                </view>
            </view>    
            
            <view class="meal-div">
                 <view class="item-div">
                        <view class="left">
                            <view class="Icon"> <image src="../../static/VIP/VIP-01.png" mode=""></image></view>
                            <view class="Text"> 1个月VIP </view>
                        </view>
                        <view class="right">
                             <radio class="radio" color="#EE8437" style="transform:scale(0.9)" value="58" :checked="mealbianhao === 58" @click="mealRadio(58)" />
                        </view>
                </view>
                <u-line style="margin: 0 10px;" length="100%"></u-line>
                 <view class="item-div">
                        <view class="left">
                            <view class="Icon"> <image src="../../static/VIP/VIP-02.png" mode=""></image></view>
                            <view class="Text"> 1季度VIP </view>
                        </view>
                        <view class="right">
                             <radio class="radio" color="#EE8437" style="transform:scale(0.9)" value="138" :checked="mealbianhao === 138" @click="mealRadio(138)" />
                        </view>
                </view>
                <u-line style="margin: 0 10px;" length="100%"></u-line>
                 <view class="item-div">
                        <view class="left">
                            <view class="Icon"> <image src="../../static/VIP/VIP-03.png" mode=""></image></view>
                            <view class="Text"> 1整年VIP </view>
                        </view>
                        <view class="right">
                             <radio class="radio" color="#EE8437" style="transform:scale(0.9)" value="538" :checked="mealbianhao === 538" @click="mealRadio(538)" />
                        </view>
                </view>
                <u-line style="margin: 0 10px;" length="100%"></u-line>
            </view>

            <view class="pay-div">
                <!-- <radio-group @change="radioChange"> -->
                    <view class="item-div">
                        <view class="left">
                            <view class="Icon"> <image src="../../static/pay/wxpay.png" mode=""></image></view>
                            <view class="Text"> 微信支付 </view>
                        </view>
                        <view class="right">
                             <radio class="radio" style="transform:scale(0.8)" value="1" :checked="bianhao === 1" @click="radio(1)" />
                        </view>
                    </view>
                    <u-line style="margin: 0 10px;" length="100%"></u-line>
                    <view class="item-div">
                        <view class="left">
                            <view class="Icon"> <image style="width: 34px; height: 34px; margin-left: 2px;" src="../../static/pay/zfbpay.png" mode=""></image></view>
                            <view class="Text"> 支付宝支付 </view>
                        </view>
                        <view class="right">
                             <radio class="radio" style="transform:scale(0.8)" value="2" :checked="bianhao === 2" @click="radio(2)" />
                        </view>
                    </view>
                    <u-line style="margin: 0 10px;" length="100%"></u-line>
                                        <view class="item-div">
                        <view class="left">
                            <view class="Icon"> <image src="../../static/pay/jifpay.png" mode=""></image></view>
                            <view class="Text"> 积分支付 </view>
                        </view>
                        <view class="right">
                             <radio class="radio" style="transform:scale(0.8)" value="3" :checked="bianhao === 3" @click="radio(3)" />
                        </view>
                    </view>
                    <u-line style="margin: 0 10px;" length="100%"></u-line>
                <!-- </radio-group> -->
                
            </view>

            <view class="bottom-div">
                <button class="pay"  @click="showModal">确认支付:￥{{price}}.00</button>
            </view>
            <view >
                <u-modal showCancelButton="true" closeOnClickOverlay="true" :show="show" :title="title" @confirm="toconfirm" @cancel="tocancel">
                    <u-code-input v-model="codevalue"></u-code-input>
                </u-modal>
            </view>
	</view>
</template>

<script>
import vipBanner from '../../components/homeBanner/vipBanner.vue'
	export default {
		name:"newsHotDetails",
		components: {
			vipBanner
		},
		data() {
			return {
                title:'请输入应用安全密码',
                show:false,
                codevalue:'',
                price:"58",
                mealbianhao:58,
                bianhao:1,
                radiolist1: [{
                    name: '苹果',
                    disabled: false
                    },
                    {
                    name: '香蕉',
                    disabled: false
                    },
                    {
                    name: '橙子',
                    disabled: false
                    }, {
                    name: '榴莲',
                    disabled: false
                    }
                ],
                // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
                radiovalue1: '苹果',
			};
		},
		methods: {
            toconfirm(){
                this.show = false;
                this.codevalue=''
            },
            tocancel(){
                this.show = false;
                this.codevalue=''
            },
            showModal() {
                this.show = true;
            },
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			},
            groupChange(n) {
                console.log('groupChange', n);
            },
            radioChange(n) {
                console.log('radioChange', n);
            },
            radioChangewx(n) {
                console.log('radioChange', n);
            },
            radio(e){
                this.bianhao=e
            },
            mealRadio(e){
                this.mealbianhao=e
                this.price = e
                console.log('mealRadio',e)

            }
		},
	}
</script>

<style lang="scss">
	.wrap{
        height: 100vh;
		background-color: $uni-color-backgroundColor;
	}
	// .card {
    //     background-color: $uni-color-content;
    //     margin: 50px 6px 0;
        .top-div {
            background-color: $uni-color-content;
            margin: 50px 0 15px 0;
            .img-div {
                margin: 8px 0px;
                image{
                    width: 100%; 
                    height: 120px; 
                    border-radius: 2px;
                }
            }
            .price-div{
                padding-bottom: 10px;
                .text{
                    font-size: 34px;
                    text-align: center;
                }
                .number{
                    color: rgb(110, 110, 110);
                    text-align: center;
                }
            }
        }
        .meal-div{
            background-color: $uni-color-content;
            margin: 5px 0;
            .item-div{
                padding: 6px 0 0 0;
                display: flex;
                justify-content: space-between;
                .left{
                    margin-left: 10px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    .Text{
                        font-size: 16px;
                        color: #F0984E;
                        font-weight: 600;
                        margin-left: 8px;
                        line-height: 38px;
                    }
                    image{
                       width: 38px;
                       height: 38px;
                    }
                }
                .right{
                    .radio{
                        margin-top: 6px;
                    }
                }
            }

        }
        .pay-div{
            background-color: $uni-color-content;
            margin: 10px 0;
            .item-div{
                padding: 6px 0 0 0;
                display: flex;
                justify-content: space-between;
                .left{
                    margin-left: 5px;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    .Text{
                        margin-left: 5px;
                        line-height: 40px;
                    }
                    image{
                       width: 40px;
                       height: 40px;
                    }
                }
                .right{
                    .radio{
                        margin-top: 10px;
                    }
                }
            }

        }

        .bottom-div{
            position: fixed;
            bottom: 0;
            .pay{
                width: 100vw;
                text-align: center;
                color: #fff;
                background-color: #007AFF;
            }
        }
	// }
</style>
