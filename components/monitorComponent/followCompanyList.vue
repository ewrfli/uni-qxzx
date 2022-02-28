<template>
    <view class="content">
        <!-- <u-line style="margin-top: 46px;" length="93%"></u-line>  -->
        <view class="tabs" style="margin-top: 2px;">
            <custom-tabs index="0" :animation="true" tabPadding="40" :scrollY="true" :flex="false" @changeIndex="changeIndex">
                <custom-tab-pane v-for="item in topic2" :label="item">
                    <view class="tabs-item" v-for="data in themeList2">
                        <view class="item" @click="toCompanyDetails(data.company_id)">
                            <view class="flexDiv">
                                <view class="left-img">
                                    <image style="width: 36px; height: 36px; border-radius: 4px;" :src="data.company_coverimg" mode=""></image>
                                </view>
                                <view class="title">
                                    <view class="Content-title">
                                        <view class="Content-title-left">
                                            {{data.company_name}}
                                        </view>
                                    </view>
                                    <view class="sub-title">
                                        {{data.company_desc}}
                                    </view>
                                </view>
                            </view>
                            <view class="right-hotIcon">
                                <u-button v-if="data.xx" type="primary" text="关注"></u-button>
                                <u-button v-else :plain="true" text="已关注"></u-button>
                                
                            </view>                
                        </view> 
                        <u-line style="margin: 0 10px;" length="93%"></u-line>     
                    </view>
                </custom-tab-pane>
            </custom-tabs>
        </view>
    </view>
</template>

<script>
import {mixin} from "../../utils/mixin.js"
export default {
	mixins:[mixin], //混入文件
    name: 'followCompanyList',
    data() {
        return {
            current: 0,
            swiperCurrent: 0,
            tabsHeight: 0,
            dx: 0,
            topic2:['我的关注'],
            themeList2: []
        };
    },
    mounted() {
        // console.log('followCompanyList mounted',this.token)//使用mixin里date
        this.getTopTitle()
        this.getmyList()
    },
    methods: {
		toCompanyDetails(id){
			console.log('toCompanyDetails',id)
			uni.navigateTo({
				url: '/pages/monitor/company?id='+id
			});
		},
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
            console.log('改变了index:', index);
        },
        async getTopTitle() { //tab标签栏
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
        getList(id){  //公司列表
            uni.request({
                url: `${this.$baseUrl}/company/list?company_tag_id=${id}&pageNo=1&pageSize=10`,  //这里的lid,page,pagesize只能是数字或字母
                method: 'GET',
                success: (res)=>{
                    console.log(res.data.data)
					this.themeList2 = res.data.data
                    console.log('this.getList ',this.themeList2)
                },
                fail: (err)=>{
                    console.log(err)
                }
        
            })
        },
        getmyList(){ //我关注的公司
            uni.request({
                url: `${this.$baseUrl}/star/mycompanylist?user_id=1`,  //这里的lid,page,pagesize只能是数字或字母
                method: 'GET',
                success: (res)=>{
                    console.log(res.data.data)
                    // this.themeList2 = res.data.data
                    res.data.data.forEach(item => {
                        // console.log(item)
                        this.themeList2.push(item.qx_company)
                    })
                    console.log('this.getmyList ',this.themeList2)
                },
                fail: (err)=>{
                    console.log(err)
                }
        
            })
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
