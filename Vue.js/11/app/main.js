// 导入Vue框架
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
// 导入app.vue组件
import App from './app.vue';
import Index from './views/index.vue';
import About from './views/about.vue';
import VueBus from './vue-bus';
import { resolve } from 'url';

Vue.use(VueBus);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  // Vuex的配置
  state: {
    count: 0,
    list: [1,5,8,10,30,50]
  },
  getters: {
    filteredList: state => {
      return state.list.filter(item => item < 10);
    },
    listCount: (state, getters) => {
      return getters.filteredList.length;
    }
  },
  mutations: {
    
    increment(state, n = 5){
      state.count += n;
    },
    /*
    increment(state, params){
      state.count += params.count;
    },
    */
    decrease(state){
      state.count --;
    }
  },
  actions: {
    increment(context){
      context.commit('increment');
    },
    asyncIncrement(context){
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('increment');
          resolve();
        }, 3000)
      })
    }
  }
});

const Routers = [
  {
    path: '/index',
    meta: {title: '首页'},
    component: (resolve) => require(['./views/index.vue'], resolve)
  },
  {
    path: '/about', 
    meta: {title: '关于'},
    component: About
  },
  {
    path: '/user/:id',
    meta: {title: '个人主页'},
    component: (resolve) => require(['./views/user.vue'], resolve)},
  {path: '*', redirect: '/index'}
];

const RouterConfig = {
  // 使用HTML5的History路由模式
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})

// 创建Vue根实例
new Vue({
  el: '#app',
  router: router,
  // 使用Vuex
  store: store,
  render: h => {
    return h(App)
  }
});