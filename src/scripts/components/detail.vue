<template id="">
<div class="L-detail" id="detail">

	<header>
		<ul>		
			<li>
			<router-link :to="'/list'">
			<span class="yo-ico">&#xe6a7;</span>
			</router-link>
			</li>
			<li><input type="text"><span class="yo-ico">&#xe600;</span></li>
			<li>筛选</li>
		</ul>
	</header>
	<nav>
		<ul>
			<li v-on:click="navbtn(i)" :class="{navat:navbtnindex==i}" v-for="(item,i) in nav">{{item}}</li>
		</ul>
	</nav>

	<section>

		<div id="detail-scroll">
          <div>

            <div class="head">
              <img src="/images/img/test/arrow.png" width="40" height="40"/>
              <span></span>
            </div>
				
				<dl v-for="item in detaillist">
					<dt><img :src="item.ImgSrc" alt=""></dt>
					<dd>
						<p>{{item.title}}</p>
						<p>
						<i>¥&nbsp{{item.price}}</i>
						<b>({{item.oldprice}})</b>
						</p>
						<p>
						<span><i class="yo-ico">&#xe637;</i>{{item.discussnum}}s</span>
						<span><i class="yo-ico">&#xe6eb;</i>{{item.consultnum}}</span>
						</p>				
					</dd>
				</dl>

            <div class="foot">
              <img src="/images/img/test/arrow.png" width="40" height="40"/>
              <span></span>
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
		navbtnindex:0,
		nav:[
			"销量",
			"价格",
			"上架时间"
		],
		detaillist:[]
      }
    },

	methods:{
		navbtn:function(i){
			this.navbtnindex = i
		}
	},
	mounted:function (){

		fetch('./mock/detail.json').then(response => response.json())
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
	                foot.removeClass('down')
	            } else if (maxY >= 0) {
	                foot.attr('src', './images/img/test/ajax-loader.gif');
	                //TODO ajax上拉加载数据
	                var self = this;

	                fetch('./mock/detail.json')
	                .then(response => response.json())
	                .then(res => {
	                  //console.log(that.Classlist)
	                  //console.log(res[Indexs])
	                  that.detaillist = that.detaillist.concat(res[that.navbtnindex].list);

	                  myScroll.refresh();

	                  myScroll.scrollTo(0, self.y + scrollHeight);
	                  foot.removeClass('down');
	                  foot.attr('src', './images/img/test/arrow.png');
	                })
	            }
	        })
	      }, 1000);
	      
  		})
  		.catch(e => console.log("Oops, error", e))

	}


  }
</script>
