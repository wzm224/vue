var  Vue = require('../lib/vue.js');

new Vue({

	el:"#detail",
	data:{
		navbtnindex:0,
		nav:[
			"销量",
			"价格",
			"上架时间"
		],
		detaillist:[]
	},

	methods:{
		navbtn:function(i){
			this.navbtnindex = i
		}
	},

	mounted:function (){

		fetch('/api/detail').then(response => response.json())
  		.then(res => {
  			this.detaillist=res[this.navbtnindex].list
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
	                head.attr('src', '/images/img/test/ajax-loader.gif');
	                //TODO ajax下拉刷新数据

	                setTimeout(function () {
	                    myScroll.scrollTo(0, -scrollHeight);
	                    head.removeClass('up');
	                    head.attr('src', '/images/img/test/arrow.png');
	                }, 100);
	            }

	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -scrollHeight && maxY < 0) {
	                var self = this;
	                myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
	                foot.removeClass('down')
	            } else if (maxY >= 0) {
	                foot.attr('src', '/images/img/test/ajax-loader.gif');
	                //TODO ajax上拉加载数据
	                var self = this;

	                fetch('/api/detail')
	                .then(response => response.json())
	                .then(res => {
	                  //console.log(that.Classlist)
	                  //console.log(res[Indexs])
	                  that.detaillist = that.detaillist.concat(res[that.navbtnindex].list);

	                  myScroll.refresh();

	                  myScroll.scrollTo(0, self.y + scrollHeight);
	                  foot.removeClass('down');
	                  foot.attr('src', '/images/img/test/arrow.png');
	                })
	            }
	        })
	      }, 1000);
	      
  		})
  		.catch(e => console.log("Oops, error", e))

	}



})