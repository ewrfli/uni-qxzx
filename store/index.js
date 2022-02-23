import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        curArticleId: 0, //当前文章id
        hasLogin: false, // 登录状态
        userInfo: {}, // 用户信息
        registerUserDate:{} //用户注册成功信息
    },
    mutations: {
        setHasLogin(state, value){
            state.hasLogin = value
            console.log('设置vuex state的值',state.hasLogin)
        },
        setCurArticleId(state, value){
            state.curArticleId = value
            console.log('设置vuex state curArticleId的值',state.curArticleId)
        },
        setRegisterUserDate(state, value){
            state.registerUserDate = value
            console.log('设置vuex state registerUserDate',state.registerUserDate)
        }

    },
    actions: {},
    getters: {}
})