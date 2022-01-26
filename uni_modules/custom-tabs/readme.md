- <a href="#c1" title="概要">概要</a>
- <a href="#c2" title="注意事项">注意事项</a>
- <a href="#c3" title="支持平台">支持平台</a>
- <a href="#c4" title="使用说明">使用说明</a>
- <a href="#c5" title="属性说明">属性说明</a>
- <a href="#c6" title="方法说明">方法说明</a>
- <a href="#c7" title="关注我，不迷路">关注我，不迷路</a>

<div id="c1"></div>

### 一、概要
1. 我在做项目的过程中用到了tab切换，本想着去插件市场找一个直接现用，后面发现找到的tab切换并不是我想要的那种使用方式，于是我结合了iview中Tab切换的方式打造了这个插件，可能还有很多还需要完善的地方，再接再厉！
2. 该组件适用于小程序，app-vue需要用的话，我暂时没有测试，最好是做进一步的优化，否则可能会有性能的问题。
3. 该插件同时兼容了VUE2和VUE3编译。
4. 如果发现组件有BUG或者不完善可以留言交流。
5. git地址：https://gitee.com/my_dear_li_pan/my-uni-modules.git
6. uniapp插件市场：https://ext.dcloud.net.cn/plugin?id=6177

<div id="c2"></div>

### 二、注意事项
1. 该插件使用的预编译，需要自行安装scss/sass插件。
2. 该插件同时兼容了VUE2和VUE3，所以hbuilderX 需要更新到3.2.2及其以上。
3. 遵循uni_modules规范插件。
4. 脚手架项目是否可用，暂未测试。

<div id="c3"></div>

### 三、支持平台
微信小程序、百度小程序、支付宝小程序、字节小程序、QQ小程序、H5、app等平台。

<div id="c4"></div>

### 四、使用说明
```
<template>
	<view>
		<custom-tabs index="0" :animation="true" tabPadding="40" :scrollY="true" :flex="false" @changeIndex="changeIndex">
			<custom-tab-pane label="标签一">
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
				<view style="height: 100px;">内容1</view>
			</custom-tab-pane>
			<custom-tab-pane label="标签二">内容2</custom-tab-pane>
			<custom-tab-pane label="标签三3">内容3</custom-tab-pane>
			<custom-tab-pane label="标签四44">内容4</custom-tab-pane>
			<custom-tab-pane label="标签五555">内容5</custom-tab-pane>
			<custom-tab-pane label="标签六6666">内容6</custom-tab-pane>
			<custom-tab-pane label="标签七77777">内容7</custom-tab-pane>
		</custom-tabs>
	</view>
</template>
<script>
	export default {
		// #ifdef VUE2
		methods: {
			changeIndex(index) {
				console.log('改变了index:', index)
			}
		},
		// #endif
		// #ifdef VUE3
		setup() {
			function changeIndex(index) {
				console.log('改变了index:', index)
			}
			return {
				changeIndex
			}
		}
		// #endif
	}
</script>
<style scoped lang="scss">
</style>
```

<div id="c5"></div>

### 五、属性说明
名称|类型|是否必填|默认值|可选值|说明
-|-|-|-|-|-|-|
index|[Number,String]|否|0|0到(tab总数-1)|显示某一项tab的下标
animation|[Boolean]|否|true|true/false|切换动画
tabPadding|[Number,String]|否|20|根据自己的需求|tab选项的左右padding值
scrollY|[Boolean]|否|false|true/false|是否允许y轴滚动，未开启组件随着页面而滚动
flex|[Boolean]|否|false|true/false|开启后，tab栏居中显示

<div id="c6"></div>

### 六、方法说明
名称|说明
-|-|
changeIndex|切换回调，返回index下标

<div id="c7"></div>

### 关注我，不迷路

##### 小伙伴，用你可爱的小手，点个赞，关注我了解更多知识！！！

如果任何疑问的可以在评论区留言或者私聊。

也可以扫下面二维码加我wx，备注‘地区-名字-技术类型’，我会拉进我的微信技术分享群。注意：必须备注清楚哈。

也可以加QQ群交流：568984539，加群备注‘地区-名字-技术类型’。

![image](https://docimg3.docs.qq.com/image/PK4epbCF3eQv9gOkcmWTew.png?w=164&h=169)

更多前端、uniapp、nodejs等相关知识可关注我个人博客：https://blog.csdn.net/qq_42961150?spm=1011.2124.3001.5343





