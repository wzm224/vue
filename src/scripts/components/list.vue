<template id = "">
<div class="L-classpage" id="classpage">

	<nav>
		<ul>
			<li v-on:click="navclass(index)" :class="{ClassActive:index == ClassIndex}"  v-for="(item,index) in ClassNav">{{item}}</li>
		</ul>
	</nav>
	<section>

        <div id="class-scroll">
          <div>

            <div class="head">
              <img src="/images/img/test/arrow.png" width="40" height="40"/>
              <span>下拉刷新...</span>
            </div>

				<ul>
					<li v-for="item in Classlist">
						<router-link to="/detail">
						<img :src="item.ImgSrc" alt="">
						<p>{{item.title}}</p>
						</router-link>
					</li>
				</ul>

            <div class="foot">
              <img src="/images/img/test/arrow.png" width="40" height="40"/>
              <span>上拉加载更多...</span>
            </div>

          </div>

        </div>
	</section>
</div>
</template>

<script>
module.exports = {
    data: function () {
      return {
			ClassIndex:0,
			listIndex:0,
			ClassNav:[
				"跑步装备",
				"羽毛球用品",
				"乒乓球用品",
				"网球用品",
				"户外用品",
				"护具|健身",
				"游泳用品",
				"足球用品",
				"篮球用品",
				"滑雪装备",
				"排球用品"
			],
			Classlist:[]
      }
    },

	methods:{
		navclass:function(index){

			this.ClassIndex = index

			var Indexs = index;
			//console.log(Indexs);

			fetch('/api/list').then(response => response.json())
  			.then(res => {
  			//console.log(this)
  			var that = this;
  			that.Classlist=res[Indexs].list
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

	                fetch('/api/more')
	                .then(response => response.json())
	                .then(res => {
	                  //console.log(that.Classlist)
	                  //console.log(res[Indexs])

	                  that.Classlist = that.Classlist.concat(res[that.listIndex].list);

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
	},
	mounted:function (i){

		var that  =  this

		fetch('/api/list').then(response => response.json())
  		.then(res => {
  			this.Classlist=res[this.listIndex].list
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

	                fetch('/api/more')
	                .then(response => response.json())
	                .then(res => {
	                  //console.log(that.Classlist)
	                  //console.log(res[that.listIndex])

	                  that.Classlist = that.Classlist.concat(res[that.listIndex].list);

	                  myScroll.refresh();

	                  myScroll.scrollTo(0, self.y + scrollHeight);
	                  foot.removeClass('down');
	                  foot.attr('src', '/images/img/test/arrow.png');
	                })
	            }
	        })
	      }, 200);

	      
  		})
  		.catch(e => console.log("Oops, error", e))

	}
  }
</script>
