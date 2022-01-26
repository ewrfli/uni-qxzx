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
                    <image :src="userData.userImg" mode=""></image>
                </view>
                <view class="user-operation">
					<view class="opera star"><u-icon style="display: inline-block;" name="thumb-up" size="22" color="#999999"></u-icon><span class="data">9</span></view>
					<view class="opera toedit">编辑资料</view>
				</view>
				
            </view>
            <view class="user-content">
                <view class="user-name">
                    {{ userData.userName }}
                </view>
                <view class="user-sub">
                    <text space="nbsp" class="user-data">普通用户 未认证</text>
                </view>
                <view class="user-info">
                    <text space="nbsp" class="user-data">自我介绍自我介绍自我介绍</text>
                </view>
            </view>
        </view>

        <view class="mid"> </view>
        <view class="low"> </view>
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

            totalTips: ['未认证', 123, 22, 33],
            title: 'Hello',
        };
    },
    onLoad() {
        console.log(uni.$u.config.v);
    },
    methods: {
        leftClick() {
            uni.navigateBack({
                delta: 1,
                animationType: 'pop-out',
                animationDuration: 200,
            });
        },
        toUserHomePage() {},
    },
};
</script>

<style lang="scss">
.u-navbar--fixed {
    position: fixed !important;
    left: 0 !important;
    right: 0 !important;
    top: 0 !important;
    z-index: 11 !important;
    border-bottom: rgb(226, 226, 226) solid 0px !important;
}
.wrap {
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
        .vip-div {
            padding: 3px 3px;
        }
        .banner-div {
            padding: 0px 3px;
        }
    }
    .low {
    }
}
</style>
