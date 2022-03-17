<template>
	<view class="content">
		<u-navbar title="发表评论" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="close" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-button @click="postData" type="primary" text="发布"></u-button>
            </view>
		</u-navbar>
        <view class="content" style="margin-top: 44px;">
			<u--textarea v-model="commentArticle" placeholder="请输入内容" ></u--textarea>
		</view>
		<view class="toast">
            <u-toast ref="uToast"></u-toast>
        </view>
	</view>
</template>

<script>
import jinEdit from '../../components/jin-edit/jin-edit.vue';
	export default {
		components: {
			jinEdit
		},
		data() {
			return {
				user_id:"",
				commentArticle:"",
				curArticleId:""
			};
		},
		mounted() {
		console.log('发布评论页面 文章id', this.$store.state.curArticleId)
		console.log('getsyncloc',uni.getStorageSync('userInfo'))
		this.user_id = uni.getStorageSync('userInfo').user_id
		this.curArticleId = this.$store.state.curArticleId
		console.log('this.curArticleId',this.curArticleId)
		},
		methods: {
			// 点击发布
			postData(){
				let _this = this
				uni.request({
			          url: `${this.$baseUrl}/comment/add`,  
			          method: 'POST',
					  data:{
						article_id: this.$store.state.curArticleId,
						comment_content: this.commentArticle,
						comment_like_count: 1,
						user_id: this.user_id,
					  },
			          success: (res)=>{
						  console.log('succ',res.data)
						if(res.data.code === 200){
                            this.$refs.uToast.show({
                                type: 'success',
                                title: '评论成功',
                                message: "评论成功",
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
                                complete() {
									// uni.navigateBack({
									// 	delta: 1,
									// 	animationType: 'pop-out',
									// 	animationDuration: 200
									// });
									uni.navigateTo({
										url: '/pages/news/newItemDetails?id='+_this.curArticleId
									});
									console.log('uToast this.curArticleId',_this.curArticleId)
                                }
                            })
                        }else{
                            this.$refs.uToast.show({
                                type: 'console.error();',
                                title: res.data.msg,
                                message: res.data.msg,
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
                                complete() {

                                }
                            })
                        }
					  },
			          fail: (err)=>{
						  console.log(err)
					  }
			
			    })
			},
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
		.item{
			display: flex;
			flex-direction: row;
			padding: 10px 20px;
			.title {
				width: 80px;
			}
			.desc {
				color: #000000;
				font-size: 800;
			}
		}
	}



	
</style>
