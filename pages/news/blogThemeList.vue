<template>
    <view class="content">
        <u-navbar title="全部话题" @leftClick="leftClick" :autoBack="true" :fixed="true">
            <view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="22" color="#007aff"></u-icon>
            </view>
        </u-navbar>
        <view class="wrap" style="margin-top: 44px;">
            <custom-tabs index="0" :animation="true" tabPadding="40" :scrollY="true" :flex="false" @changeIndex="changeIndex">
                <custom-tab-pane v-for="item in themeList" :label="item.tag">
                    <view style="height: 100px;">{{item.name}}</view>
                </custom-tab-pane>
            </custom-tabs>
        </view>
    </view>
</template>

<script>
export default {
    name: 'newItemDetails',
    data() {
        return {
            list: [
                {
                    name: '配电图',
                },
                {
                    name: '最大容量',
                },
                {
                    name: '电力参数',
                },
            ],
            current: 0,
            swiperCurrent: 0,
            tabsHeight: 0,
            dx: 0,
            topic: ['推荐话题', '我关注的', '最近参与', '行业', '名企', '最新话题'],
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
                    describe: '',
                    img: 'https://cdn.uviewui.com/uview/goods/4.jpg',
                },
            ],
        };
    },
    methods: {
        leftClick() {
            uni.navigateBack({
                delta: 1,
                animationType: 'pop-out',
                animationDuration: 200,
            });
        },
        // tab栏切换
        changeIndex(index) {
            console.log('改变了index:', index);
        },
    },
};
</script>

<style lang="scss">
.content {
    background-color: $uni-color-backgroundColor;
}

.newsItem {
    margin: 50px 5px;
    padding: 0px 10px 10px;
    background-color: $uni-color-content;
    margin-bottom: 10px;
    .up-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        .user-img {
            image {
                margin-top: 8px;
                width: 36px;
                height: 36px;
                border-radius: 18px;
            }
        }
        .user-content {
            display: flex;
            flex-direction: column;
            margin-left: 6px;
            .user-name {
            }
            .user-sub {
                font-size: 12px;
                color: #777777;
            }
        }
        .attention-div {
            flex-grow: 1; //这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
            display: flex; //将它设置为flex,就可以单独对他进行主轴右对齐
            justify-content: flex-end;
            .icon {
                width: 42px;
                height: 20px;
                font-size: 14px;
                padding: 1px 4px;
                color: #007aff;
                border: 1px solid #007aff;
                border-radius: 4px;
            }
        }
    }

    .mid-block {
        margin: 6px 6px 6px 6px;
    }

    .low-block {
        margin: 0 5px;
        display: flex;
        flex-direction: column;
        .companyDiv {
            display: flex;
            justify-content: space-between;
            .companyFont {
                line-height: 23px;
                font-size: 12px;
                color: #565656;
                display: inline-block;
                padding: 1px 6px;
                border-radius: 4px;
                background-color: #e5e5e5;
            }
            .star {
                color: #565656;
            }
        }
    }
}

.comment {
    padding: 0px 5px 10px;
    font-size: 14px;
    .title {
        background-color: $uni-color-content;
        padding: 10px 10px 10px;
    }
    .list-card {
        margin-top: 4px;

        .item {
            background-color: $uni-color-content;
            margin-bottom: 5px;
            padding-bottom: 7px;
            .up-block {
                padding-left: 10px;
                display: flex;
                flex-direction: row;
                align-items: center;
                .user-img {
                    image {
                        margin-top: 8px;
                        width: 32px;
                        height: 32px;
                        border-radius: 16px;
                    }
                }
                .user-content {
                    display: flex;
                    flex-direction: column;
                    margin-left: 6px;
                    .user-name {
                    }
                    .user-sub {
                        font-size: 12px;
                        color: #777777;
                    }
                }
                .attention-div {
                    flex-grow: 1; //这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
                    display: flex; //将它设置为flex,就可以单独对他进行主轴右对齐
                    justify-content: flex-end;
                    .icon {
                        width: 42px;
                        height: 20px;
                        font-size: 14px;
                        padding: 1px 4px;
                        color: #007aff;
                        border: 1px solid #007aff;
                        border-radius: 4px;
                    }
                }
            }
            .mid-block {
                margin: 6px 20px;
            }
            .low-block {
                padding: 0 20px;
                display: flex;
                flex-direction: column;
                .bottom-Div {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    line-height: 23px;
                    .time {
                        line-height: 24px;
                        color: #565656;
                    }
                    .answer {
                        margin-right: 146px;
                        color: #007aff;
                    }
                    .star {
                        line-height: 24px;
                        color: #565656;
                    }
                }
            }
        }
    }
}
</style>
