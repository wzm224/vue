var  Vue = require('../lib/vue.js');

new Vue({
	el:'#commonstyle',
	data:{
		navindex:0,
		nav:[
		{
			title:"首页",
			icon:"&#xe629;",
			routes:"/"
		},
		{
			title:"分类",
			icon:"&#xe612;",
			routes:"/list"
		},
		{
			title:"我的",
			icon:"&#x3575;",
			routes:"/my"
		},
		{
			title:"客服",
			icon:"&#xe613;",
			routes:"/kefu"
		}
		],

	},

	methods:{
		NavTab:function(i) {
			this.navindex = i
		}
	}
});