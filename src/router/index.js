import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '../components/Home.vue';
import List from '../components/List.vue'

export default new Router({
  routes: [
    {
      path:'/home',
      name:Home,
      component:Home
    },
    {
      path:'/list',
      name:List,
      component:List
    }
  ]
})
