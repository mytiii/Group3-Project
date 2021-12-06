<template>
  <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
    <!--点下后实现开关-->
   <!-- <v-toolbar-side-icon @click="adjustdrawer(source)"  class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">News App</v-toolbar-title>-->






    <v-icon>mdi-heart</v-icon>

  </v-toolbar>
</template>

<script>

    export default {




      name: "LoginRegister",
      /*drawer触发器*/
      adjustDrawer(source){
        this.$emit('adjustdrawer',source)
      }

    }



</script>

<style scoped>

</style>
