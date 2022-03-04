<template>
	<view class="warp">
        <view class="content">
            <view class="navbar">
                <view class="left-div" @click="leftClick">
                    <u-icon name="arrow-left" size="22" color="#999999"></u-icon>
                </view>
            </view>
            <view class="top-div">
                <view class="left-div">
                    <view class="logo-img">
                        <image v-if="companyItem" :src="companyItem.company_coverimg" mode=""></image>
                        <image src="../../static/unlogin.png" v-else></image>
                    </view>
                    <view class="name-div">
                        <view class="company-name">{{ companyItem.company_name }}</view>
                        <view class="company-sub">
                            <view class="company-tag">{{ companyItem.company_tag_name }}</view>
                            <view class="company-tag">{{ companyItem.company_tag_name+'2' }}</view>
                            <view class="company-follownum">浏览量：{{ companyItem.company_follow_num }}</view>
                        </view>
                    </view>
                </view>
                <view class="right-div">
                    <view class="authen-name"><u-icon style="margin:2px 4px 0px 8px;" name="checkmark-circle-fill" size="18" color="#F3AE3D"></u-icon>已认证</view>
                </view>
                
            </view>
            <view class="company-content">
                <view class="company-desc">
                    <text space="nbsp" class="user-data">公司简介：{{!companyItem ? '暂无' : companyItem.company_desc}}啊就是罚款时代上次啊上帝啊是大奶上帝DS发上次u啊还是牛超死叉；是从i啊是从iA：HS哦i吃；oh SAI偶灰常ASIOH</text>
                </view>
                <view class="tips-div">
                    <view class="div1">
                        <text class="div1-text">法定代表人</text>
                        <text style="color: #007AFF;">{{companyItem.company_people}}</text>
                    </view>
                    <view class="div1">
                        <text class="div1-text">注册资本</text>
                        <text style="font-weight: 600;">{{companyItem.company_money}}万</text>
                    </view>
                    <view class="div1">
                        <text class="div1-text">成立日期</text>
                        <text style="font-weight: 600;">{{companyItem.company_date}}</text>
                    </view>
                    <!-- <view class="div1">
                        <text class="div1-text">利好</text>
                        <text style="color: #00aa00;">{{data.totalTips[3]}}</text>
                    </view> -->
                </view>
            </view>
        </view>
        <!-- 监控日报 -->
        	<view class="ComponentMonitorDaily">
                <view class="item-card" v-for="(value, key) in newDateRiskList" :key="key">
                    <view class="top-div">
                        <view class="left-title">
                            追踪日报<text style="font-size: 14px; color: #000000; ">{{value[0]}}</text>
                        </view>
                        <view class="right-title">
                            共<text style="font-size: 14px; color: #000000;">{{value[1].length}}</text>条动态
                        </view>
                    </view>
                    
                    <view class="tips-div">
                        <view class="div1">
                            <text class="div1-text">风险</text>
                            <text style="color: #ff0000;">11</text>
                        </view>
                        <view class="div1">
                            <text class="div1-text">警示</text>
                            <text style="color: #ffaa00;">22</text>
                        </view>
                        <view class="div1">
                            <text class="div1-text">提示</text>
                            <text style="color: #515256;">33</text>
                        </view>
                        <!-- <view class="div1">
                            <text class="div1-text">利好</text>
                            <text style="color: #00aa00;">{{data.totalTips[3]}}</text>
                        </view> -->
                    </view>
                    
                    <view class="content-div">
                        <view class="item" v-for="(item, index) in value[1]">   
                            <view class="flexDiv">
                                <view class="left-img">
                                    <image style="width: 36px; height: 36px; border-radius: 4px;" :src="item.risk_coverimg" mode=""></image>
                                </view>
                                <view class="title">
                                    <view class="Content-title">
                                        <view class="Content-title-left">
                                            {{item.risk_name}}
                                        </view>
                                    </view>
                                    <view class="sub-title">
                                        {{item.risk_desc}}<text class="item-tips-text">1</text>条
                                    </view>
                                </view>
                            </view>
                            <view class="right-hotIcon">
                                <image style="width: 16px; height: 16px;" src="../../static/message.png" mode=""></image>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
	</view>
</template>

<script>
import newItemComment from "../../components/newItemComment/newItemComment.vue";
	export default {
		components: {

		},
		data() {
			return {
				companyid: null,
                companyItem: {
                    company_category_name: '',
                    company_content:  '',
                    company_coverimg:  '',
                    company_date:  '',
                    company_desc:  '',
                    company_follow_num:  '',
                    company_id:  '',
                    company_money:  '',
                    company_name:  '',
                    company_people:  '',
                    company_tag_id:  '',
                    company_tag_name:  '',
                    createdAt:  '',
                    qx_risks:  ''
                },
                listData:[
					{
						date: '2022-02-23',
						totalTips: [0, 1 ,12, 23],
						content: [
							{
								name: "北京xxxxx科技公司",
								tips: [0, 1 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/4.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 2 ,21, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/3.jpg"
							}
						]
					},
										{
						date: '2022-02-23',
						totalTips: [0, 1 ,12, 23],
						content: [
							{
								name: "北京xxxxx科技公司",
								tips: [0, 1 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/4.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 2 ,21, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/3.jpg"
							}
						]
					},
					{
						date: '2022-2-22',
						totalTips: [0, 1 ,22, 33],
						content: [
							{
								name: "杭州xxxxxx科技公司",
								tips: [0, 1 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/1.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 11 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/2.jpg"
							},
							{
								name: "上海xxxxxx科技公司",
								tips: [0, 11 ,2, 3],
								tag: "热门公司",
								prompt: "新增一条公告调研报告",
								describe: "",
								img: "https://cdn.uviewui.com/uview/goods/2.jpg"
							}
						]
					}
				],
                qx_risks:[],
                risk_date:[],
                newDateRiskList:{}
			};
		},
		onLoad(option){
			// const order = JSON.parse(decodeURIComponent(option.order));
			this.companyid = option.id
			// console.log('this.newid 资讯详情',option,this.newid)
			this.getList(option.id)
			// this.$store.commit('setCurArticleId', option.id);//把setCurArticleId 传到 vuex 再到 comment子组件
		},
		methods: {
			leftClick(){
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				});
			},
			getList(id){
				let _this = this
			    uni.request({
			          url: `${this.$baseUrl}/company/findone?company_id=${id}`,  //这里的lid,page,pagesize只能是数字或字母
			          method: 'GET',
			          success: (res)=>{
						//   console.log(res.data.data)
							this.companyItem = res.data.data
                            this.qx_risks = res.data.data.qx_risks
                            let risk_date = []
                            res.data.data.qx_risks.map( item =>{
                                if(!risk_date.includes(item.risk_date)){
                                    risk_date.push(item.risk_date)
                                }
                            }) //日期提取 去重 ['2022-02-28', '2022-02-27']
                            this.risk_date = risk_date

                            let newDateRiskList = new Map();
                            risk_date.map( item => {
                                let arrysameRiskList = []
                                this.qx_risks.map( obj => {
                                    if(item == obj.risk_date){
                                        arrysameRiskList.push(obj)
                                        newDateRiskList.set(item, arrysameRiskList)
                                    }
                                })
                            })
                            
                            this.newDateRiskList = newDateRiskList
                            console.log('newDateRiskList', this.newDateRiskList)
                            console.log('risk_date', this.risk_date)
						    console.log('风险详细',this.qx_risks)
					  },
			          fail: (err)=>{
						  console.log(err)
					  }
			
			    })
			
			}
		},
	}
</script>

<style lang="scss">
	.warp{
		background-color: $uni-color-backgroundColor;
		height: 100vh;
        .content {
            // padding: 0 0 0 18px;
            background: linear-gradient(0deg, #ffffff 0%, #d5e5ff 100%);
            .navbar {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 40px;
                .left-div {
                }
            }
            .top-div {
                padding-left: 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .left-div{
                    display: flex;
                    .logo-img {
                        margin-right: 10px;
                        image {	
                            margin-top: 8px;
                            width: 50px;
                            height: 50px;
                            border-radius: 4px;
                        }
                    }
                    .name-div{
                        margin-top: 5px;
                        .company-name{
                            font-size: 18px;
                            font-weight: 800;
                        }
                        .company-sub{
                            margin-top: 4px;
                            display: flex;
                            .company-tag{
                                margin-right: 6px;
                                line-height: 23px;
                                font-size: 12px;
                                color: #82BC8C;
                                display: inline-block;
                                padding: 1px 6px;
                                border-radius: 2px;
                                background-color: rgb(224, 247, 229);
                            }
                            .company-follownum{
                                margin-left: 10px;
                                margin-top: 4px;
                                font-size: 12px;
                                color: #858585;
                            }
                        }
                    }
                }

                .right-div {
                    margin-top: -36px;
                    // flex-grow: 1; //这三个元素只有它在有空余空间时可伸缩，也就是它占据了所有剩余空间
                    display: flex; //将它设置为flex,就可以单独对他进行主轴右对齐
                    // justify-content: flex-end;
                    .authen-name {
                        display: flex; 
                        width: 76px;
                        font-size: 14px;
                        text-align: center;
                        background-color: #FCF2DB;
                        color: #F3AE3D;
                        font-weight: 800;
                        border: #d6d6d6 solid 1px;
                        border-radius: 20px 0 0 20px;
                        height: 27px;
                        line-height: 28px;
                    }
                }
            }

            .company-content{
                margin-top: 10px;
                .company-desc{
                    padding-left: 12px;
                    margin-bottom: 10px;
                    font-size: 14px;
                    color: #999999;
                }
            }

            .tips-div {
                padding-bottom: 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                color: #303133;
                border-radius: 5px;
                .div1 {
                    height: 55px;
                    text-align: center;
                    .data-text {
                        font-weight: 600;
                    }
                    .div1-text {
                        display: block;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        font-size: 15px;
                    }
                }
            }
        }
        
        .ComponentMonitorDaily {
            margin-top: 10px;
            .item-card {
                padding: 0 10px 10px;
                background-color: #ffffff;
                margin-bottom: 10px;
                .top-div {
                    padding: 5px 0px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #838386;
                }
                .tips-div {
                    background-color: #f4f4f4;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    color: #303133;
                    border-radius: 5px;
                    .div1{
                        height: 50px;
                        text-align: center;
                        .div1-text {
                            display: block; 
                            margin-top: 5px;
                            font-size: 14px;
                        }
                    }
                }
                
                .content-div {
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
                                    font-size: 14px;
                                }
                                .sub-title {
                                    color: #838386;
                                    font-size: 10px;
                                    margin-top: 3px;
                                    .item-tips-text {
                                        color: #000000;
                                    }
                                }
                            }
                        }
                        .right-hotIcon {
                            margin-top: 11px;
                        }
                    }
                }
            }
        }
	}
	
</style>
