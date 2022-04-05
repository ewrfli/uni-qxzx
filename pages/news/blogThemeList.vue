<template>
    <view class="content">
        <u-navbar title="全部话题" @leftClick="leftClick" :autoBack="true" :fixed="true">
            <view class="u-nav-slot" slot="left">
                <u-icon name="arrow-left" size="22" color="#007aff"></u-icon>
            </view>
        </u-navbar>
        <!-- <u-line style="margin-top: 46px;" length="93%"></u-line>  -->
        <view class="tabs" style="margin-top: 44px;">
            <custom-tabs index="0" :animation="true" tabPadding="40" :scrollY="true" :flex="false" @changeIndex="changeIndex">
                <custom-tab-pane v-for="item in topic2" :label="item">
                    <view class="tabs-item" v-for="data in themeList2">
                        <view class="item">
                            <view class="flexDiv" @click="toTagArticle(data.tag_id,data.tag_name)">
                                <view class="left-img">
                                    <image style="width: 36px; height: 36px; border-radius: 4px;" :src="data.tag_coverimg" mode=""></image>
                                </view>
                                <view class="title">
                                    <view class="Content-title">
                                        <view class="Content-title-left">
                                            #{{data.tag_name}}
                                        </view>
                                    </view>
                                    <view class="sub-title">
                                        {{data.tag_desc}}
                                    </view>
                                </view>
                            </view>
                            <view class="right-hotIcon">
                                <u-button v-if="!data.ismystar" type="primary" text="关注" @click="toStar(data.tag_id)"></u-button>
                                <u-button v-else :plain="true" text="已关注" @click="toDelStar(data.tag_id)"></u-button>
                                
                            </view>                
                        </view> 
                        <u-line style="margin: 0 10px;" length="93%"></u-line>     
                    </view>
                </custom-tab-pane>
            </custom-tabs>
        </view>
        <view class="toast">
            <u-toast ref="uToast"></u-toast>
        </view>
    </view>
</template>

<script>
export default {
    name: 'blogThemeList',
    data() {
        return {
            topic2:['我的关注'],
            // topic: ['推荐话题', '我关注的', '最近参与', '行业', '名企', '最新话题'],
            themeList2: [],
            // themeList: [
            //     {
            //         name: '北京华峰车空峰车空科技公司1',
            //         tag: '热门公司1',
            //         prompt: '新增一条公告调研报告',
            //         describe: '',
            //         img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
            //     },
            //     {
            //         name: '2北京华峰车空xx北京华峰车空峰车空科技公司',
            //         tag: '热门公司2',
            //         prompt: '新增一条公告调研报告',
            //         describe: '',
            //         img: 'https://cdn.uviewui.com/uview/goods/2.jpg',
            //     },
            //     {
            //         name: '3北京华峰车空峰车空科技公司',
            //         tag: '热门公司3',
            //         prompt: '新增一条公告调研报告',
            //         describe: '',
            //         img: 'https://cdn.uviewui.com/uview/goods/3.jpg',
            //     },
            //     {
            //         name: '4北京华峰车空峰车空科技公司',
            //         tag: '热门公司4',
            //         prompt: '新增一条公告调研报告',
            //         describe: '1',
            //         img: 'https://cdn.uviewui.com/uview/goods/4.jpg',
            //     },
            // ],
            myStarTag: [],
            userInfo: null,
            user_id: 1,
            TopTitleIndex: 0
        };
    },
    mounted() {
        console.log('App mounted newlist热点榜')
        this.getTopTitle()
        // this.getList(1)
        this.getmyList()
        this.userInfo = uni.getStorageSync('userInfo')
        this.user_id = this.userInfo.user_id
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
            if(index === 0){
                this.themeList2 = []
                this.getmyList()
            }else{
                this.themeList2 = []
                this.getList(index)
            }
            this.TopTitleIndex = index; //存储当前TopTitleIndex
            console.log('改变了index:', index);

        },
        async getTopTitle() {
            uni.request({
                url: `${this.$baseUrl}/tag/list?tag_father_id=0&pageNo=1&pageSize=30`,  //这里的lid,page,pagesize只能是数字或字母
                method: 'GET',
                success: (res)=>{
                    res.data.data.forEach(item => {
                        this.topic2.push(item.tag_name)
                    })
                },
                fail: (err)=>{
                    console.log(err)
                }
        
            })
        },
        getList(id){
            uni.request({
                url: `${this.$baseUrl}/tag/list?tag_father_id=${id}&pageNo=1&pageSize=30`,  //这里的lid,page,pagesize只能是数字或字母
                method: 'GET',
                success: (res)=>{
                    console.log(res.data.data)
                    res.data.data.forEach(item => {
                        if(this.myStarTag.includes(item.tag_id)){ //判断我的收藏tag有没有这个tag 有这则item.ismystar = true
                            item.ismystar = true
                        }else{
                            item.ismystar = false
                        }
                    })
                    this.themeList2 = res.data.data
                    console.log('getList themeList2 ',this.themeList2)
                },
                fail: (err)=>{
                    console.log(err)
                }
        
            })
        },
        getmyList(){
            this.themeList2 = []
            uni.request({
                url: `${this.$baseUrl}/star/mytaglist?user_id=${this.user_id}`,  //这里的lid,page,pagesize只能是数字或字母
                method: 'GET',
                success: (res)=>{
                    console.log(res.data.data)
                    // this.themeList2 = res.data.data
                    res.data.data.forEach(item => {
                        // console.log(item.tag_id)
                        this.myStarTag.push(item.tag_id)
                        this.themeList2.push(item.qx_tag)
                    })
                    this.themeList2.forEach(obj => { //当前列表下为个人收藏的tag
                        obj.ismystar = true
                    })
                    this.myStarTag = [...new Set(this.myStarTag)]
                    console.log('myStarTag',this.myStarTag)
                    console.log('myStarTagthemeList2 ',this.themeList2)
                },
                fail: (err)=>{
                    console.log(err)
                }
        
            })
        },
        toDelStar(date){
            console.log(this.themeList2)
            this.themeList2.forEach(obj => {
                if(date === obj.tag_id){
                    obj.ismystar = false //取消收藏
                }
            })
            console.log('toDelStar',date)
                uni.request({
					url: `${this.$baseUrl}/star/del`,  //这里的lid,page,pagesize只能是数字或字母
					method: 'POST',
					data: {
                        user_id:this.userInfo.user_id,
                        tag_id: date
                    },
					success: (res)=>{
						if(res.data.code == 200){
                            console.log('TopTitleIndex',this.TopTitleIndex)//是否是在个人关注列表下点击取消关注
                            if(this.TopTitleIndex === 0){

                                this.getmyList()//重新从接口获取
                            }
                            this.myStarTag.splice(this.myStarTag.indexOf(date), 1) //如果date在this.myStarTag存在则删除

							this.$refs.uToast.show({
								type: 'success',
								title: '取消关注',
								message: "取消关注",
								iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
							})
						}else{
							this.$refs.uToast.show({
                                type: 'error',
                                title: res.data.msg,
                                message: res.data.msg,
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
                            })
						}
					},
					fail: (err)=>{
						console.log(err)
					}
			
				})
        },
        toStar(date){ //date 是点击按钮 tag_id
            console.log(this.themeList2)
            this.themeList2.forEach(obj => {
                if(date === obj.tag_id){
                    obj.ismystar = true//确认收藏
                }
            })
            console.log('toStar',date,this.userInfo.user_id)
            	uni.request({
					url: `${this.$baseUrl}/star/add`,  //这里的lid,page,pagesize只能是数字或字母
					method: 'POST',
					data: {
                        user_id:this.userInfo.user_id,
                        tag_id: date
                    },
					success: (res)=>{
						if(res.data.code == 200){
                            if(this.myStarTag.indexOf(date) == -1){ ////如果date在this.myStarTag不存在则添加
                                this.myStarTag.push(date)
                            }
							this.$refs.uToast.show({
								type: 'success',
								title: '关注成功',
								message: "关注成功",
								iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
							})

						}else{
							this.$refs.uToast.show({
                                type: 'error',
                                title: res.data.msg,
                                message: res.data.msg,
                                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
                            })
						}
					},
					fail: (err)=>{
						console.log(err)
					}
			
				})

        },
        toTagArticle(id, name){
            console.log('toTagArticle',id)
            uni.navigateTo({
                url: '/pages/news/newTagItemList?id='+id+'&name='+name
            });
        }
    },
};
</script>

<style lang="scss">
.content {
    background-color: $uni-color-backgroundColor;
}
.tab {
    height: 90vh !important;
}


.item {
    padding: 4px 8px;
    background-color: $uni-color-content;
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
            width: 230px;
            margin-left: 8px;
            overflow:hidden; //超出的文本隐藏
                text-overflow:ellipsis; //溢出用省略号显示
                white-space:nowrap; //溢出不换行
            .Content-title {
                font-size: 14px;
                overflow:hidden; //超出的文本隐藏
                text-overflow:ellipsis; //溢出用省略号显示
                white-space:nowrap; //溢出不换行
            }
            .sub-title {
                color: #afafaf;
                font-size: 10px;
                margin-top: 3px;
            }
        }
    }
    .right-hotIcon {
        margin-top: 12px;
        .u-button {
            width: 60px !important;
            height: 30px !important;
        }
    }
}



</style>
