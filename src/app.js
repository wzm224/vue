require('./styles/usage/app.scss')

var common = require('./scripts/utils/util.common.js')

/*var index = require('./scripts/tpls/commonstyle.html')
var lists = require('./scripts/tpls/list.html')
var detail = require('./scripts/tpls/detail.html')

common.render(index)

require('./scripts/views/commonstyle.js')
require('./scripts/views/list.js')
require('./scripts/views/detail.js')
*/

//console.log(VueRouter)

var layout = require('./scripts/tpls/layout.html')

common.render(layout)

import index from "./scripts/components/common.vue"
import home from "./scripts/components/home.vue"
import list from "./scripts/components/list.vue"
import my from "./scripts/components/my.vue"
import kefu from "./scripts/components/kefu.vue"

import detail from "./scripts/components/detail.vue"



const routes = [
{
    path: '/',
    component: index,
    children:[
        {
        path: '/',
        component: home
        },
        {
        path: '/list',
        component: list
        },
        {
            path: '/my',
            component: my
        }
    ]
},
{
    path: '/kefu',
    component: kefu
},
{
    path: '/detail',
    component: detail
}
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const app = new Vue({
	router
}).$mount('#app')

