import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article.vue'
import Postlist from '@/components/Postlist.vue'
import UserInfo from '@/components/UserInfo.vue'
import SlideBar from '@/components/SlideBar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main: Postlist
      }
    },
    {
      path:'/topic/:id&name=:loginname',
      name: 'topic_detail',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      path:'/user/:loginname',
      name: 'user',
      components: {
        main: UserInfo
      }
    }
  ]
})
