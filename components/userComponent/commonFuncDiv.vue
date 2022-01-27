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
                    @click="clickFunc(listItem.page)"
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
                    page: 'pages/user/funcDiv/setting'
                },
                {
                    name: 'lock',
                    title: '编辑资料',
                    page: 'pages/user/editUserData'
                },
                {
                    name: 'star',
                    title: '我的发布',
                    page: 'pages/user/funcDiv/myPublish'
                },
                {
                    name: 'hourglass',
                    title: '我的消息',
                    page: 'pages/user/funcDiv/myMessage'
                },
                {
                    name: 'home',
                    title: '我的关注',
                    page: 'pages/user/funcDiv/myAttention'
                },
                {
                    name: 'star',
                    title: '我的收藏',
                    page: 'pages/user/funcDiv/myCollection'
                },
                {
                    name: 'home',
                    title: 'VIP服务',
                    page: 'pages/user/funcDiv/vipServe'
                },
                {
                    name: 'star',
                    title: '我的好友',
                    page: 'pages/user/funcDiv/myFriend'
                },
            ],
        };
    },
    methods: {
        clickFunc(page) {
            uni.navigateTo({
                url: '/'+page
            })
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
