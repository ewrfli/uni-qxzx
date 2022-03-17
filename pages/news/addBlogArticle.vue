<template>
	<view class="content">
		<u-navbar title="发表讨论" @leftClick="leftClick" :autoBack="true" :fixed="true">
			<view class="u-nav-slot" slot="left">
                <u-icon name="close" size="22" color="#007aff"></u-icon>
            </view>
			<view class="u-nav-slot" slot="right">
                <u-button @click="editOk" type="primary" text="发布"></u-button>
            </view>
		</u-navbar>
        <view class="content" style="margin-top: 44px;">
			<view class="item">
				<view class="title">标题：</view>
				<view class="desc"><input v-model="articleDate.article_title"/></view>
			</view>
			<view class="item">
				<view class="title">标签：</view>
				<view class="desc"><input v-model="articleDate.article_tag"/></view>
			</view>
            <u-line length="100%" style="margin: 0 auto;"></u-line>
			<jinEdit 
				ref="jinedit"
				@editOk="editOk"
				uploadFileUrl="http://127.0.0.1:3002/upload/img"
				fileKeyName="myfile"
			></jinEdit>
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
				value1:'',
                articleDate:{
					article_category: "用户发布",
					article_category_id: null,
					article_comment_count: null,
					article_company: null,
					article_company_id: null,
					article_content: "",
					article_coverimg: "",
					article_desc: "",
					article_like_count: 1,
					article_read_count: 1,
					article_repost_count: 1,
					article_tag: "",
					article_tag_id: null,
					article_title: "",
					article_visible_power: null,
					user_id: "",
					user_name: null
				}
			};
		},
		mounted() {
		console.log('getsyncloc',uni.getStorageSync('userInfo'))
		this.articleDate.user_id = uni.getStorageSync('userInfo').user_id
		// this.user_id = uni.getStorageSync('userInfo').user_id
		// this.userInfo = uni.getStorageSync('userInfo')
		},
		methods: {
			// 点击发布
			async editOk(res) {
				this.articleDate.article_content = res.html
				this.articleDate.article_desc = res.text
				this.articleDate.article_coverimg = this.$refs.jinedit.showImgurl
				console.log(res);
				console.log(this.articleDate)
				console.log(this.$refs.jinedit.showImgurl)//获取子组件data
				await this.postData(this.articleDate)
			},
			postData(articleDate){
				uni.request({
			          url: `${this.$baseUrl}/article/add`,  
			          method: 'POST',
					  data:articleDate,
			          success: (res)=>{
						  console.log('succ',res.data)
						if(res.data.code === 200){
                            this.$refs.uToast.show({
                                type: 'success',
                                title: '发布成功',
                                message: "发布成功",
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
                                complete() {
									uni.navigateBack({
										delta: 1,
										animationType: 'pop-out',
										animationDuration: 200
									});
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
