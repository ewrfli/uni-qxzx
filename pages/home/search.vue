<template>
	<view class="warp">
		<u-sticky offset-top="0" customNavHeight="0" bgColor="#007aff">
			<view class="u-search"><u-search shape="square" placeholder="搜索资讯/关键词" v-model="searchkeyword" :show-action="false" @search="toSearch" @clear="toClear"></u-search></view>
		</u-sticky>
		<NewsHotList v-if="!searchArticleList"></NewsHotList>

		<view v-else class="searchArticleList">
			<view class="item" v-for="(data, index) in searchArticleList" @click="toNewDetails(data.article_id)">
				<view class="flexDiv">
					<view class="left-img">
						 <image style="width: 36px; height: 36px; border-radius: 4px;" :src="data.article_coverimg" mode=""></image>
					</view>
					<view class="title">
						<view class="Content-title">
							<view class="Content-title-left">
								{{data.article_title}}
							</view>
							<!-- <view class="top-title-right-hotIcon">
								<u-icon name="photo" color="#F63A34" size="20"></u-icon>
							</view> -->
						</view>
						<view class="sub-title">
							{{data.article_desc}}
						</view>
					</view>
				</view>
				<view class="right-hotIcon">
					<image style="width: 20px; height: 20px;" src="../../static/search.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import NewsHotList from '../../components/newsComponent/NewsHotList.vue'
export default {
	components: {
		NewsHotList
	},
	data() {
		return {
            searchkeyword: '',
			searchArticleList: null
			
		};
	},
	onShow(){

	},
	onLoad(option) {
	
	},
	methods: {
		toNewDetails(id){
			console.log(id)
			uni.navigateTo({
				url: '/pages/news/newItemDetails?id='+id
			});
		},
		toClear(){
			console.log('toClear')
			this.searchArticleList = null
		},
		toSearch(value){
			if(!value.trim()){
				console.log('kong',value)
				this.searchArticleList = null
			}else{
				console.log('ssss',value)
				this.getArticle(value)
			}
			
		},
		getArticle(value){
			uni.request({
					url: `${this.$baseUrl}/search?title=${value}`,  //这里的lid,page,pagesize只能是数字或字母
					method: 'GET',
					success: (res)=>{
						console.log('sss',res.data.data)
						this.searchArticleList = res.data.data
					},
					fail: (err)=>{
						console.log(err)
					}
		
			})
		}

	}
};
</script>

<style lang="scss">
.warp{
	background-color: $uni-color-backgroundColor;
	.u-search {
		background-color: $uni-color-primary;
		padding: 5px 5px 5px 5px;
	}
	.searchArticleList{
		padding: 2px 8px 2px 8px;
	}
	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.flexDiv {
			margin-top: 10px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			.left-img {
			}
			.title {
				margin-left: 8px;

				.Content-title {
					width: 300px;
					font-size: 14px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.sub-title {
					width: 180px;
					font-size: 10px;
					margin-top: 3px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
		.right-hotIcon {
			margin-top: 11px;
		}
	}
}
</style>
