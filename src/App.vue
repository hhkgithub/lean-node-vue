<!--suppress ALL -->
<template>
  <div class="content">
    <NavMenu></NavMenu>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <Pfooter ref="footer"></Pfooter>
  </div>
</template>

<script>
  import NavMenu from  './components/NavMenu'
  import Pfooter from  './components/Pfooter'
  export default {
    name: 'Main',
    components: {
      NavMenu,
      Pfooter
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      //'$route': 'initfooter'
    },
    mounted(){
      //this.initfooter()
    },
    methods: {
      initfooter(){
        this.init(this.$route.path,this.$refs.footer.$el)
      }
    }
  }
</script>

<style>
  body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eff2f7;
    text-align: center;
    font-size: 14px;
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 1024px;
  }
  .view{
    height: 100%;
    padding: 0 10%;
    padding-bottom: 50px
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
    cursor: pointer;
  }
  .t-center{
    text-align: center;
  }
  .t-left{
    text-align: left;
  }
  .t-right{
    text-align: right;
  }
  .t-indent{
    text-indent:25px;
  }
  .t-fontsize12{
    font-size: 12px;
  }
  .t-fontsize13{
    font-size: 13px;
  }
  .t-fontsize14{
    font-size: 14px;
  }
  .t-fontsize16{
    font-size: 16px;
  }
  .t-fontweight{
    font-weight: bold;
  }
  .t-lineheight{
    line-height: 24px;
  }
  .margin-top-20{
    margin-top: 20px;
  }
</style>
