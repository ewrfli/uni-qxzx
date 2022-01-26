<template>
    <view class="card">
        <view class="top-title">
            <view class="left-title"> 常用功能 </view>
        </view>

        <view class="icon-func">
            <u-grid :border="false" col="4">
                <u-grid-item
                    v-for="(listItem, listIndex) in iconList"
                    :key="listIndex"
                    @click="clickFunc(listItem.title)"
                >
                    <u-icon
                        :customStyle="{ paddingTop: 40 + 'rpx' }"
                        :name="listItem.name"
                        :size="22"
                    ></u-icon>
                    <text class="grid-text">{{ listItem.title }}</text>
                </u-grid-item>
            </u-grid>
        </view>
    </view>
</template>

<script>
export default {
    name: 'commonFuncDiv',
    data() {
        return {
            iconList: [
                {
                    name: 'photo',
                    title: '应用设置',
                },
                {
                    name: 'lock',
                    title: '编辑资料',
                },
                {
                    name: 'star',
                    title: '我的发布',
                },
                {
                    name: 'hourglass',
                    title: '我的消息',
                },
                {
                    name: 'home',
                    title: '我的关注',
                },
                {
                    name: 'star',
                    title: '我的收藏',
                },
                {
                    name: 'home',
                    title: 'VIP服务',
                },
                {
                    name: 'star',
                    title: '我的粉丝',
                },
            ],
        };
    },
    methods: {
        clickFunc(name) {
            console.log(name)
        },
    },
};
</script>

<style lang="scss">
.card {
    margin-top: 6px;
    padding: 10px 10px 0px 10px;
    background-color: $uni-color-content;
    .top-title {
        padding-left: 14px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .left-title {
            font-size: 16px;
            font-weight: 600;
        }
    }
    .itemList {
        background-color: $uni-color-content;
    }
}
</style>
