

 export const mixin={
    data() {
        return { 
            token: null
        }
    },
    mounted() {
        this.token = uni.getStorageSync('token')//将localStorage放mixin里 this.token使用
    }, 
    methods: {
        getMixin(){
            console.log('getMixingetMixingetMixingetMixin',this.token)
            return this.token
        }

    }
}