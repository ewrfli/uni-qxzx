import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        curArticleId: 0, //当前文章id
        hasLogin: false, // 登录状态
        userInfo: {}, // 用户信息
        registerUserDate:{}, //用户注册成功信息
        myStarArtIdList: [] //用户当前收藏的文章id
    },
    mutations: {
        setHasLogin(state, value){  //
            state.hasLogin = value
            console.log('设置vuex state的值',state.hasLogin)
        },
        setCurArticleId(state, value){  //文章详情页面id同步到下面评论组件
            state.curArticleId = value
            console.log('设置vuex state curArticleId的值',state.curArticleId)
        },
        setRegisterUserDate(state, value){  //注册信息同步到login页面
            state.registerUserDate = value
            console.log('设置vuex state registerUserDate',state.registerUserDate)
        },
        setMyStarArtIdList(state, value){  //同步资讯详情与我的收藏页面 收藏id
            state.myStarArtIdList = value
            console.log('设置vuex state myStarArtIdList',state.myStarArtIdList)
        }



    },
    actions: {},
    getters: {}
})