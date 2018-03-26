import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Search from '@/components/search'
import Video from '@/components/video'
import Atten from '@/components/attention'
import User from '@/components/user'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    alias: '/index'
  }, {
    path: '/video',
    name: 'Video',
    component: Video
  }, {
    path: '/attention',
    name: 'Atten',
    component: Atten
  }, {
    path: '/user',
    name: 'User',
    component: User
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/test',
    name: 'Test',
    component: Test
  }, {
    path: "*",
    redirect: {
      path: '/'
    }
  }, {
    path: '*',
    redirect: (to) => {
      return '/home'
    }
  }]
})
