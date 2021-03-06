// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'font-awesome/css/font-awesome.css'
import '@/assets/css/base.less'

Vue.config.productionTip = false

//----------- mint-ui --------
import { TabContainer,TabContainerItem,Loadmore,Spinner } from 'mint-ui';
//滑动内容
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
//上下拉加载
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)

import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(HappyScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
