<template id="">  
<div class="L-commonstyle" id="commonstyle">
  <header>
    <ul>
      <router-link to="/list">
      <li class="yo-ico">&#xe6dc;</li>
      </router-link>
      <li>
          优个网
      </li>
      <li class="yo-ico">&#xe600;</li>
      <li class="yo-ico">&#xe62d;</li>
    </ul>
  </header>
  <section>
    <router-view></router-view>
  </section>
  <footer>
    <ul>
      <li v-on:click="NavTab(i)" :class="{NavActive:navindex==i}" v-for="(item,i) in nav">
        <router-link :to="item.routes">
          <span>
            <i class="yo-ico" v-html="item.icon"></i>
            <b>{{item.title}}</b>
          </span>
        </router-link>
      </li>
    </ul>
  </footer>

</div>
</template>

<script>
  module.exports = {
    data:function(){
      return {
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
          ]
      }
    },
        methods:{
          NavTab:function(i) {
            this.navindex = i
          }
        }


  }
</script>
