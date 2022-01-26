<template>
	<view class="content">
		<u-navbar title="发表讨论" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="close" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-button type="primary" text="发布"></u-button>
            </view>
		</u-navbar>
        <view class="content" style="margin-top: 44px;">
            <u--textarea v-model="value1" placeholder="请输入内容" ></u--textarea>
        </view>
	</view>
</template>

<script>
	export default {
		name:"addBlogArticle",
		data() {
			return {
                value1: '',
			};
		},
		methods: {
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
    				animationDuration: 200
				});
			}
		},
	}
</script>

<style lang="scss">
    .u-button{
        width: 46px;
        height: 26px;
    }
	.content{
		background-color: $uni-color-backgroundColor;

	}



	
</style>
