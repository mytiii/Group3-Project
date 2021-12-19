// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import AOS from "aos";
import "aos/dist/aos.css";
import router from './router/router.js'
import test from './test.vue'
import Login from "./Pages/Login";
import axios from 'axios';
Vue.prototype.$http = axios


Vue.use(Vuetify)


Vue.config.productionTip = false

//定义routes路由的集合，数组类型
const routes=[
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {path:'/Pages/Login',component:Login},
  {path:'/test',component:test},
  {path:'',component:App}
]

new Vue({
  el: '#app',
  created() {
    AOS.init({ disable: "phone" });
  },
  router,
  components: { App,test},
  template: '<App/>'
})
