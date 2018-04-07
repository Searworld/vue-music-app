import Vue from 'vue'
import Router from 'vue-router'

// 配置路由
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      component:require('../components/recommend/recommend.vue')
    },
    {
      path: '/singer',
      component: require('../components/singer/singer.vue')
    },
    {
      path: '/rank',
      component:require('../components/rank/rank.vue')
    },
    {
      path: '/search',
      component:require('../components/search/search.vue')
    }
  ]
})
