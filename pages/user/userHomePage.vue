<template>
    <view class="wrap">
        <view class="top">
            <view class="navbar">
                <view class="left-div" @click="leftClick">
                    <u-icon name="arrow-left" size="22" color="#999999"></u-icon>
                </view>
            </view>
            <view class="avatar-div">
                <view class="user-img">
                    <image v-if="userInfo" :src="userInfo.user_avatarimg" mode=""></image>
                    <image src="../../static/unlogin.png" v-else></image>
                </view>
                <view class="user-operation">
					<view class="opera star"><u-icon style="display: inline-block;" name="thumb-up" size="22" color="#999999"></u-icon><span class="data">9</span></view>
					<view class="opera toedit" @click="toEditUserData">编辑资料</view>
				</view>
				
            </view>
            <view class="user-content">
                <view class="user-name" v-if="userInfo">
                    {{ userInfo.user_name }}
                </view>
                <view class="user-name" v-else>
							未登录
				</view>
                <view class="user-sub">
                    <text space="nbsp" class="user-data">普通用户 未认证</text>
                </view>
                <view class="user-info">
                    <text space="nbsp" class="user-data">自我介绍</text>
                </view>
            </view>
        </view>

        <view class="mid">
            <u-line length="98%" style="margin: 10px auto;"></u-line>
            <view class="info profession">
                <u-icon name="coupon" size="40"></u-icon>
                <view class="data">
                    <span class="title">生日</span>
                    <span class="detail">去完善></span>
                </view>
            </view>
            <view class="info company">
                <u-icon name="calendar" size="40"></u-icon>
                <view class="data">
                    <span class="title">公司</span>
                    <span class="detail">去完善></span>
                </view>
            </view>
            <view class="info school">
                <u-icon name="bookmark" size="40"></u-icon>
                <view class="data">
                    <span class="title">邮箱</span>
                    <span class="detail">去完善></span>
                </view>
            </view>
        </view>

        <view class="low">
            <view class="low-title">我参与的话题</view>
            <u-line length="100%" style="margin: 0 auto;"></u-line>
            <view class="tabs-item" v-for="data in themeList2">
                <view class="item">
                    <view class="flexDiv">
                        <view class="left-img">
                            <image style="width: 36px; height: 36px; border-radius: 4px;" :src="data.tag_coverimg" mode=""></image>
                        </view>
                        <view class="title">
                            <view class="Content-title">
                                <view class="Content-title-left">
                                    #{{data.tag_name}}
                                </view>
                            </view>
                            <view class="sub-title">
                                {{data.tag_desc}}
                            </view>
                        </view>
                    </view>
                    <!-- <view class="right-hotIcon">
                        <u-button v-if="data.describe" :plain="true" text="已关注"></u-button>
                        <u-button v-else type="primary" text="关注"></u-button>
                    </view>                 -->
                </view> 
                <u-line style="margin: 0 10px;" length="93%"></u-line>     
            </view>            
        </view>
    </view>
</template>

<script>
import commonFuncDiv from '../../components/userComponent/commonFuncDiv.vue';
import homeBanner from '../../components/homeBanner/homeBanner.vue'; //vipBanner
import vipBanner from '../../components/homeBanner/vipBanner.vue';
export default {
    components: {
        vipBanner,
        homeBanner,
        commonFuncDiv,
    },
    data() {
        return {
            userInfo:undefined,
            userData: {
                id: '',
                userImg:
                    'https://img.36krcdn.com/20200410/v2_6905947498bc4ec0af228afed409f771_img_png',
                userName: '杨洋样',
                time: 2,
                readNum: 2233,
                contentTitle:
                    '自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶自动驾驶',
                contentText: 'XXXXXXXXXXXXXXXX',
                relatedCompany: '自动驾驶',
                repostNum: 11,
                commentNum: 22,
                likeNum: 99,
                icon: '',
            },
            themeList2:[],
            themeList: [
                {
                    name: '北京华峰车空峰车空科技公司1',
                    tag: '热门公司1',
                    prompt: '新增一条公告调研报告',
                    describe: '',
                    img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
                },
                {
                    name: '2北京华峰车空xx北京华峰车空峰车空科技公司',
                    tag: '热门公司2',
                    prompt: '新增一条公告调研报告',
                    describe: '',
                    img: 'https://cdn.uviewui.com/uview/goods/2.jpg',
                },
                {
                    name: '3北京华峰车空峰车空科技公司',
                    tag: '热门公司3',
                    prompt: '新增一条公告调研报告',
                    describe: '',
                    img: 'https://cdn.uviewui.com/uview/goods/3.jpg',
                },
                {
                    name: '4北京华峰车空峰车空科技公司',
                    tag: '热门公司4',
                    prompt: '新增一条公告调研报告',
                    describe: '1',
                    img: 'https://cdn.uviewui.com/uview/goods/4.jpg',
                }
            ],
            totalTips: ['未认证', 123, 22, 33],
            title: 'Hello',
        };
    },
    onShow(){
		console.log('当前页面',this.$mp.page.route)
		this.indexPage = this.$mp.page.route
		this.userInfo = uni.getStorageSync('userInfo')
        this.getmyList()
	},
    onLoad() {
        console.log(uni.$u.config.v);
    },
    methods: {
        leftClick() {
            // uni.navigateBack({
            //     delta: 1,
            //     animationType: 'pop-out',
            //     animationDuration: 200,
            // });
            uni.switchTab({
				url: '/pages/user/index'
			});
        },
        toEditUserData() {
            uni.navigateTo({
				url: '/pages/user/editUserData'
			});
        },
        getmyList(){
            uni.request({
                url: `${this.$baseUrl}/star/mytaglist?user_id=1`,  //这里的lid,page,pagesize只能是数字或字母
                method: 'GET',
                success: (res)=>{
                    console.log(res.data.data)
                    // this.themeList2 = res.data.data
                    res.data.data.forEach(item => {
                        // console.log(item)
                        this.themeList2.push(item.qx_tag)
                    })
                    console.log('this.themeList2 ',this.themeList2)
                },
                fail: (err)=>{
                    console.log(err)
                }
        
            })
        }
    },
};
</script>

<style lang="scss">
.wrap {
    background-color: $uni-color-backgroundColor;
    .top {
        padding: 0 10px 0 18px;
        background: linear-gradient(0deg, #ffffff 0%, #d5e5ff 100%);
        .navbar {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 40px;
            .left-div {
            }
        }
        .avatar-div {
            display: flex;
            flex-direction: row;
			justify-content: space-between;
            align-items: center;
            .user-img {
                image {	
                    margin-top: 8px;
                    width: 50px;
                    height: 50px;
                    border-radius: 25px;
                }
            }
            .user-operation {
                flex-grow: 1; //这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
                display: flex; //将它设置为flex,就可以单独对他进行主轴右对齐
                justify-content: flex-end;
				.opera {
					text-align: center;
					background-color: #fbfdff;
                    color: #777777;
					border: #d6d6d6 solid 1px;
					border-radius: 20px;
					height: 28px;
					line-height: 28px;
				}
                .star {
                    width: 58px;
                    font-size: 16px;
					margin-right: 10px;
					.data{
						margin-top: 3px;
					}
					.u-icon{
						margin-top: 3px;
					}
                }
				.toedit{
					width: 76px;
                    font-size: 14px;
				}
            }
        }

		.user-content{
			margin-top: 10px;
			.user-name{
				font-size: 19px;
				font-weight: 800;
			}
			.user-sub{
				margin: 5px 0;
				font-size: 14px;
				color: #999999;
			}
			.user-info{
				font-size: 14px;
				color: #999999;
			}
		}

        .tips-div {
            background-color: #eaf4fe;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            color: #303133;
            border-radius: 5px;
            .div1 {
                height: 55px;
                text-align: center;
                .data-text {
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
    .mid {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        justify-content: center;
        // align-items: center;
        .info {
            display: flex;
            flex-direction: row;
            margin-bottom: 8px;
            .data{
                margin-left: 8px;
                display: flex;
                flex-direction: column;
                .title{
                    margin-bottom: 5px;
                }
                .detail{
                    font-size: 14px;
					color: #777777;
                }
            }
        }
    }
    .low {
        background-color: $uni-color-content;
        margin-top: 10px;
        .low-title {
            padding: 10px 10px;
        }
        .item {
            padding: 0px 8px 4px;
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
                    margin-top: 1px;
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
                .u-button {
                    width: 60px !important;
                    height: 30px !important;
                }
            }
        }
    }
}
</style>
