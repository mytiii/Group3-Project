<template>
    <router-view></router-view>
</template>



<script>

  import axios from 'axios' //importing the axios a HTTP library to connects the app with the API
  import SideMenu from './components/SideMenu.vue' // import the SideMenu component
  //import Login from "./Pages/Login";
  import MainContent from './components/MainContent.vue'
  import LoginRegister from "./components/LoginRegister";
  import Login from "./Pages/Login"; // import the MainContent component


  export default {

    components: {
      Login,
      LoginRegister,
      SideMenu,
      MainContent
    },

    //返回数据
    data() {
      return {
        drawer: true, //true、false表示开关
        api_key:'c2c643c4011646c98038c89c237f5be2',//api接口密钥
        articles: [],
        errors: [],
        LoginShow:false
      }
    },

    //创建使用api接口网址
    created () {
      axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key)
        .then(response => {
          this.articles = response.data.articles
          console.log('data:')
          console.log(response.data.articles)
            .catch(e => {
              this.errors.push(e)
            })
        })
    },


    methods: {

      setResource(source){
        //取资源
        axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
          .then(response => {
            //this.articles = response.data.articles
            this.articles = response.data.articles
            console.log('Source Articles:')
            console.log(response.data.articles) //返回articles
          })
          .catch(e => {
            this.errors.push(e)
          })

      },
      adjustDrawer(drawer){
        SideMenu.drawer=!SideMenu.drawer;
      },
      ShowLogin(){
        this.$router.push('./test')
      },




    }

  }
</script>
