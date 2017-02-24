/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _common = __webpack_require__(1);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _home = __webpack_require__(4);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _list = __webpack_require__(6);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _my = __webpack_require__(9);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _kefu = __webpack_require__(11);
	
	var _kefu2 = _interopRequireDefault(_kefu);
	
	var _detail = __webpack_require__(13);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(16);
	
	var common = __webpack_require__(20);
	
	/*var index = require('./scripts/tpls/commonstyle.html')
	var lists = require('./scripts/tpls/list.html')
	var detail = require('./scripts/tpls/detail.html')
	
	common.render(index)
	
	require('./scripts/views/commonstyle.js')
	require('./scripts/views/list.js')
	require('./scripts/views/detail.js')
	*/
	
	//console.log(VueRouter)
	
	var layout = __webpack_require__(21);
	
	common.render(layout);
	
	var routes = [{
	    path: '/',
	    component: _common2.default,
	    children: [{
	        path: '/',
	        component: _home2.default
	    }, {
	        path: '/list',
	        component: _list2.default
	    }, {
	        path: '/my',
	        component: _my2.default
	    }]
	}, {
	    path: '/kefu',
	    component: _kefu2.default
	}, {
	    path: '/detail',
	    component: _detail2.default
	}];
	
	var router = new VueRouter({
	    routes: routes // （缩写）相当于 routes: routes
	});
	
	var app = new Vue({
	    router: router
	}).$mount('#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  data: function () {
	    return {
	      navindex: 0,
	      nav: [{
	        title: "首页",
	        icon: "&#xe629;",
	        routes: "/"
	      }, {
	        title: "分类",
	        icon: "&#xe612;",
	        routes: "/list"
	      }, {
	        title: "我的",
	        icon: "&#x3575;",
	        routes: "/my"
	      }, {
	        title: "客服",
	        icon: "&#xe613;",
	        routes: "/kefu"
	      }]
	    };
	  },
	  methods: {
	    NavTab: function (i) {
	      this.navindex = i;
	    }
	  }
	
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "L-commonstyle",
	    attrs: {
	      "id": "commonstyle"
	    }
	  }, [_c('header', [_c('ul', [_c('router-link', {
	    attrs: {
	      "to": "/list"
	    }
	  }, [_c('li', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])]), _vm._v(" "), _c('li', [_vm._v("\r\n          优个网\r\n      ")]), _vm._v(" "), _c('li', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('li', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])], 1)]), _vm._v(" "), _c('section', [_c('router-view')], 1), _vm._v(" "), _c('footer', [_c('ul', _vm._l((_vm.nav), function(item, i) {
	    return _c('li', {
	      class: {
	        NavActive: _vm.navindex == i
	      },
	      on: {
	        "click": function($event) {
	          _vm.NavTab(i)
	        }
	      }
	    }, [_c('router-link', {
	      attrs: {
	        "to": item.routes
	      }
	    }, [_c('span', [_c('i', {
	      staticClass: "yo-ico",
	      domProps: {
	        "innerHTML": _vm._s(item.icon)
	      }
	    }), _vm._v(" "), _c('b', [_vm._v(_vm._s(item.title))])])])], 1)
	  }))])])
	},staticRenderFns: []}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "L-home"
	  }, [_vm._v("\r\n\t首页\r\n")])
	},staticRenderFns: []}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(7)
	
	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				ClassIndex: 0,
				listIndex: 0,
				ClassNav: ["跑步装备", "羽毛球用品", "乒乓球用品", "网球用品", "户外用品", "护具|健身", "游泳用品", "足球用品", "篮球用品", "滑雪装备", "排球用品"],
				Classlist: []
			};
		},
	
		methods: {
			navclass: function (index) {
	
				this.ClassIndex = index;
	
				var Indexs = index;
				//console.log(Indexs);
	
				fetch('./mock/list.json').then(response => response.json()).then(res => {
					//console.log(this)
					var that = this;
					that.Classlist = res[Indexs].list;
					//console.log(this.listIndex)
	
					setTimeout(function () {
						var myScroll = new IScroll('#class-scroll', {
							probeType: 3,
							mouseWheel: true
						});
	
						var scrollHeight = 35;
	
						myScroll.scrollBy(0, -scrollHeight);
	
						var head = $('.head img'),
						    topImgHasClass = head.hasClass('up');
						var foot = $('.foot img'),
						    bottomImgHasClass = head.hasClass('down');
	
						myScroll.on('scroll', function () {
							var y = this.y,
							    maxY = this.maxScrollY - y;
							if (y >= 0) {
								!topImgHasClass && head.addClass('up');
								return '';
							}
							if (maxY >= 0) {
								!bottomImgHasClass && foot.addClass('down');
								return '';
							}
						});
	
						myScroll.on('scrollEnd', function () {
							if (this.y >= -scrollHeight && this.y < 0) {
								myScroll.scrollTo(0, -scrollHeight);
								head.removeClass('up');
							} else if (this.y >= 0) {
								head.attr('src', 'images/img/test/ajax-loader.gif');
								//TODO ajax下拉刷新数据
	
								setTimeout(function () {
									myScroll.scrollTo(0, -scrollHeight);
									head.removeClass('up');
									head.attr('src', 'images/img/test/arrow.png');
								}, 100);
							}
	
							var maxY = this.maxScrollY - this.y;
							if (maxY > -scrollHeight && maxY < 0) {
								var self = this;
								myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
								foot.removeClass('down');
							} else if (maxY >= 0) {
								foot.attr('src', 'images/img/test/ajax-loader.gif');
								//TODO ajax上拉加载数据
								var self = this;
	
								fetch('./mock/more.json').then(response => response.json()).then(res => {
									//console.log(that.Classlist)
									//console.log(res[Indexs])
	
									that.Classlist = that.Classlist.concat(res[that.listIndex].list);
	
									myScroll.refresh();
	
									myScroll.scrollTo(0, self.y + scrollHeight);
									foot.removeClass('down');
									foot.attr('src', 'images/img/test/arrow.png');
								});
							}
						});
					}, 1000);
				}).catch(e => console.log("Oops, error", e));
			}
		},
		mounted: function (i) {
	
			var that = this;
	
			fetch('./mock/list.json').then(response => response.json()).then(res => {
				this.Classlist = res[this.listIndex].list;
				//console.log(this.listIndex)
	
	
				setTimeout(function () {
					var myScroll = new IScroll('#class-scroll', {
						probeType: 3,
						mouseWheel: true
					});
	
					var scrollHeight = 35;
	
					myScroll.scrollBy(0, -scrollHeight);
	
					var head = $('.head img'),
					    topImgHasClass = head.hasClass('up');
					var foot = $('.foot img'),
					    bottomImgHasClass = head.hasClass('down');
					myScroll.on('scroll', function () {
						var y = this.y,
						    maxY = this.maxScrollY - y;
						if (y >= 0) {
							!topImgHasClass && head.addClass('up');
							return '';
						}
						if (maxY >= 0) {
							!bottomImgHasClass && foot.addClass('down');
							return '';
						}
					});
	
					myScroll.on('scrollEnd', function () {
						if (this.y >= -scrollHeight && this.y < 0) {
							myScroll.scrollTo(0, -scrollHeight);
							head.removeClass('up');
						} else if (this.y >= 0) {
							head.attr('src', 'images/img/test/ajax-loader.gif');
							//TODO ajax下拉刷新数据
	
							setTimeout(function () {
								myScroll.scrollTo(0, -scrollHeight);
								head.removeClass('up');
								head.attr('src', 'images/img/test/arrow.png');
							}, 100);
						}
	
						var maxY = this.maxScrollY - this.y;
						if (maxY > -scrollHeight && maxY < 0) {
							var self = this;
							myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
							foot.removeClass('down');
						} else if (maxY >= 0) {
							foot.attr('src', 'images/img/test/ajax-loader.gif');
							//TODO ajax上拉加载数据
							var self = this;
	
							fetch('./mock/more.json').then(response => response.json()).then(res => {
								//console.log(that.Classlist)
								//console.log(res[that.listIndex])
	
								that.Classlist = that.Classlist.concat(res[that.listIndex].list);
	
								myScroll.refresh();
	
								myScroll.scrollTo(0, self.y + scrollHeight);
								foot.removeClass('down');
								foot.attr('src', 'images/img/test/arrow.png');
							});
						}
					});
				}, 200);
			}).catch(e => console.log("Oops, error", e));
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "L-classpage",
	    attrs: {
	      "id": "classpage"
	    }
	  }, [_c('nav', [_c('ul', _vm._l((_vm.ClassNav), function(item, index) {
	    return _c('li', {
	      class: {
	        ClassActive: index == _vm.ClassIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.navclass(index)
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('section', [_c('div', {
	    attrs: {
	      "id": "class-scroll"
	    }
	  }, [_c('div', [_vm._m(0), _vm._v(" "), _c('ul', _vm._l((_vm.Classlist), function(item) {
	    return _c('li', [_c('router-link', {
	      attrs: {
	        "to": "/detail"
	      }
	    }, [_c('img', {
	      attrs: {
	        "src": item.ImgSrc,
	        "alt": ""
	      }
	    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))])])], 1)
	  })), _vm._v(" "), _vm._m(1)])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head"
	  }, [_c('img', {
	    attrs: {
	      "src": "images/img/test/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot"
	  }, [_c('img', {
	    attrs: {
	      "src": "images/img/test/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载更多...")])])
	}]}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "L-my"
	  }, [_vm._v("\r\n\t我的\r\n")])
	},staticRenderFns: []}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "L-fefu"
	  }, [_c('router-link', {
	    attrs: {
	      "to": '/'
	    }
	  }, [_vm._v("\r\n\t\t返回\r\n\t")]), _vm._v(" "), _c('p', [_vm._v("客服")])], 1)
	},staticRenderFns: []}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(14)
	
	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				navbtnindex: 0,
				nav: ["销量", "价格", "上架时间"],
				detaillist: []
			};
		},
	
		methods: {
			navbtn: function (i) {
				this.navbtnindex = i;
			}
		},
		mounted: function () {
	
			fetch('./mock/detail.json').then(response => response.json()).then(res => {
				this.detaillist = res[this.navbtnindex].list;
				//console.log(this.listIndex)
	
	
				setTimeout(function () {
					var myScroll = new IScroll('#detail-scroll', {
						probeType: 3,
						mouseWheel: true
					});
	
					var scrollHeight = 35;
	
					myScroll.scrollBy(0, -scrollHeight);
	
					var head = $('.head img'),
					    topImgHasClass = head.hasClass('up');
					var foot = $('.foot img'),
					    bottomImgHasClass = head.hasClass('down');
					myScroll.on('scroll', function () {
						var y = this.y,
						    maxY = this.maxScrollY - y;
						if (y >= 0) {
							!topImgHasClass && head.addClass('up');
							return '';
						}
						if (maxY >= 0) {
							!bottomImgHasClass && foot.addClass('down');
							return '';
						}
					});
	
					myScroll.on('scrollEnd', function () {
						if (this.y >= -scrollHeight && this.y < 0) {
							myScroll.scrollTo(0, -scrollHeight);
							head.removeClass('up');
						} else if (this.y >= 0) {
							head.attr('src', './images/img/test/ajax-loader.gif');
							//TODO ajax下拉刷新数据
	
							setTimeout(function () {
								myScroll.scrollTo(0, -scrollHeight);
								head.removeClass('up');
								head.attr('src', './images/img/test/arrow.png');
							}, 100);
						}
	
						var maxY = this.maxScrollY - this.y;
						if (maxY > -scrollHeight && maxY < 0) {
							var self = this;
							myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
							foot.removeClass('down');
						} else if (maxY >= 0) {
							foot.attr('src', './images/img/test/ajax-loader.gif');
							//TODO ajax上拉加载数据
							var self = this;
	
							fetch('./mock/detail.json').then(response => response.json()).then(res => {
								//console.log(that.Classlist)
								//console.log(res[Indexs])
								that.detaillist = that.detaillist.concat(res[that.navbtnindex].list);
	
								myScroll.refresh();
	
								myScroll.scrollTo(0, self.y + scrollHeight);
								foot.removeClass('down');
								foot.attr('src', './images/img/test/arrow.png');
							});
						}
					});
				}, 1000);
			}).catch(e => console.log("Oops, error", e));
		}
	
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "L-detail",
	    attrs: {
	      "id": "detail"
	    }
	  }, [_c('header', [_c('ul', [_c('li', [_c('router-link', {
	    attrs: {
	      "to": '/list'
	    }
	  }, [_c('span', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('li', [_vm._v("筛选")])])]), _vm._v(" "), _c('nav', [_c('ul', _vm._l((_vm.nav), function(item, i) {
	    return _c('li', {
	      class: {
	        navat: _vm.navbtnindex == i
	      },
	      on: {
	        "click": function($event) {
	          _vm.navbtn(i)
	        }
	      }
	    }, [_vm._v(_vm._s(item))])
	  }))]), _vm._v(" "), _c('section', [_c('div', {
	    attrs: {
	      "id": "detail-scroll"
	    }
	  }, [_c('div', [_vm._m(1), _vm._v(" "), _vm._l((_vm.detaillist), function(item) {
	    return _c('dl', [_c('dt', [_c('img', {
	      attrs: {
	        "src": item.ImgSrc,
	        "alt": ""
	      }
	    })]), _vm._v(" "), _c('dd', [_c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_c('i', [_vm._v("¥ " + _vm._s(item.price))]), _vm._v(" "), _c('b', [_vm._v("(" + _vm._s(item.oldprice) + ")")])]), _vm._v(" "), _c('p', [_c('span', [_c('i', {
	      staticClass: "yo-ico"
	    }, [_vm._v("")]), _vm._v(_vm._s(item.discussnum) + "s")]), _vm._v(" "), _c('span', [_c('i', {
	      staticClass: "yo-ico"
	    }, [_vm._v("")]), _vm._v(_vm._s(item.consultnum))])])])])
	  }), _vm._v(" "), _vm._m(2)], 2)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('input', {
	    attrs: {
	      "type": "text"
	    }
	  }), _c('span', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/img/test/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span')])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/img/test/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span')])
	}]}

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	var common = {
		render: function render(str) {
			var body = document.body;
			body.innerHTML = str + body.innerHTML;
		}
	};
	module.exports = common;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">	<router-view></router-view>  </div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map