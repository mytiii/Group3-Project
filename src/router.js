//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用Login页面
import page1  from './Pages/Login';
//Register
import page2  from './Pages/Register';
import Login from "./Pages/Login";
import Register from "./Pages/Register";

//定义routes路由的集合，数组类型
const routes=[
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {path:'/Pages/Login',component:Login},
  {path:"/Pages/Register",component:Register},
  {path:"",component:Login}
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
  routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
