<template>
  <div id="app">
    <div class="main">
    <router-view/>
    </div>
    <div class="footer">
    <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
  import MyFooter from "./components/footer.vue";

  export default {
    components: {
      MyFooter
    },
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  html,body{
    height:100%;margin:0;padding:0;
  }
  .footer{
    position:absolute;bottom:0px;left:0px;width: 100%;
  }
</style>
