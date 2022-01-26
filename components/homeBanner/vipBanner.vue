<template>
	<view class="banner">
        <view class="left-div">
            <view class="title">VIP会员</view>
            <view class="sub-title">您的会员已过期，请尽快续费</view>
        </view>
        <view class="right-div">
            <u-button type="primary" color="linear-gradient(to right, #f19b51, #ee7f31)" text="立即开通"></u-button>
        </view>
	</view>
</template>

<script>
	export default {
		name:"vipBanner",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
.banner{
    border-radius: 5px;
    background-color: #f7dcba;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    .title{
        font-size: 18px;
        font-weight: 900;
        color: #94632e;
    }
    .sub-title{
        font-size: 14px;
        font-weight: 600;
        color: #94632e
    }
    .u-button {
        height: 34px;
    }
}
</style>
