import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import TopicDetail from '@/views/TopicDetail.vue'
import UserDetail from '@/views/UserDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/topic/:id&name=:loginname',
      name: 'topic_detail',
      component: TopicDetail
    },
    {
      path:'/user/:loginname',
      name: 'user',
      component: UserDetail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
