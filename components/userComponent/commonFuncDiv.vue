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
                    <image style="padding: 8px 0 6px 0; width: 38px; height: 38px;" :src="listItem.iconSrc" mode=""></image>
                    <text class="grid-text"  style="font-size: 14px;">{{ listItem.title }}</text>
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
                    page: 'pages/user/funcDiv/setting',
                    iconSrc: '../../static/funcdiv/set.png'
                },
                {
                    name: 'lock',
                    title: '编辑资料',
                    page: 'pages/user/editUserData',
                    iconSrc: '../../static/funcdiv/data.png'
                },
                {
                    name: 'star',
                    title: '我的发布',
                    page: 'pages/user/funcDiv/myPublish',
                    iconSrc: '../../static/funcdiv/publich.png'
                },
                {
                    name: 'hourglass',
                    title: '我的消息',
                    page: 'pages/user/funcDiv/myMessage',
                    iconSrc: '../../static/funcdiv/message.png'
                },
                {
                    name: 'home',
                    title: '我的关注',
                    page: 'pages/user/funcDiv/myAttention',
                    iconSrc: '../../static/funcdiv/collection.png'
                },
                {
                    name: 'star',
                    title: '我的收藏',
                    page: 'pages/user/funcDiv/myCollection',
                    iconSrc: '../../static/funcdiv/attention.png'
                },
                {
                    name: 'home',
                    title: 'VIP服务',
                    page: 'pages/user/funcDiv/vipServe',
                    iconSrc: '../../static/funcdiv/1Vip.png'
                },
                {
                    name: 'star',
                    title: '我的好友',
                    page: 'pages/user/funcDiv/myFriend',
                    iconSrc: '../../static/funcdiv/fins.png'
                },
            ],
        };
    },
    onShow(){
        
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
