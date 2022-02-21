import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        curArticleId: 0,
        hasLogin: false, // 登录状态
        userInfo: {}, // 用户信息
    },
    mutations: {
        setHasLogin(state, value){
            state.hasLogin = value
            console.log('设置vuex state的值',state.hasLogin)
        },
        setCurArticleId(state, value){
            state.curArticleId = value
            console.log('设置vuex state curArticleId的值',state.curArticleId)
        }
    },
    actions: {},
    getters: {}
})