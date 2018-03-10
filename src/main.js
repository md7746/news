// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'font-awesome/css/font-awesome.css'
import '@/assets/css/base.css'

//----------- mint-ui --------
import { TabContainer,TabContainerItem,Tabbar,TabItem,InfiniteScroll,Loadmore,Spinner } from 'mint-ui';
//滑动内容
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
//底部菜单选项
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
//定义滚动
Vue.use(InfiniteScroll);
//上下拉加载
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
