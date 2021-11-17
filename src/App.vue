<template>


  <v-app light>

  <!--侧边栏，直接将读取到的apikey丢进去-->
  <SideMenu :drawer="drawer"  :api_key="api_key" @selectsource="setResource" ></SideMenu>

    <!--顶部工具栏-->
  <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
    <v-toolbar-side-icon @click="drawer = !drawer"  class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">News App</v-toolbar-title>

      <v-icon>mdi-heart</v-icon>

  </v-toolbar>


  <!--中间内容，展示获取的-->
  <v-content>
    <v-container fluid>

      <!--MainContent-->
      <MainContent :articles="articles"></MainContent>

    </v-container>


   </v-content>

    <!--底部-->
   <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <a class="white--text" href="https://github.com/mytiii" target="_blank">mytiii</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>


</template>



<script>

import axios from 'axios' //importing the axios a HTTP library to connects the app with the API
import SideMenu from './components/SideMenu.vue' // import the SideMenu component
import MainContent from './components/MainContent.vue' // import the MainContent component


export default {

  components: {
      SideMenu,
      MainContent
  },

  //返回数据
  data() {
    return {
      drawer: true, //true、false表示开关
      api_key:'c2c643c4011646c98038c89c237f5be2',//api接口密钥
      articles: [],
      errors: []
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

      }


   }

  }
</script>
