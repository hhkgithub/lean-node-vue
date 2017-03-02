/**
* Created by hhkmac on 2017/1/4.
*/
<template>
  <div class="nav">
      <el-row>
        <el-col :span="12">
          <div class="logo">
            <a href=""><img src="/static/images/logo1.png" alt="" width="" height="60px" style="vertical-align: middle"></a>
          </div>
        </el-col>
        <el-col :span="12">
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/products">产品中心</el-menu-item>
            <el-menu-item index="/business">主营业务</el-menu-item>
            <el-menu-item index="/wanmujidi">万亩基地</el-menu-item>
            <el-menu-item index="/news">公司动态</el-menu-item>
            <el-menu-item index="/aboutus">关于我们</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    <el-row style="padding: 0 10%" v-show="isIndex">
      <el-col>
        <div class="margin-top-20">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: item.path }" v-for="item in breadcrumbs">{{item.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    name: 'NavMenu',
    data(){
      return {
        breadcrumbs:[],
        isIndex:false
      }
    },
    watch: {
      '$route': 'breadcrumb'
    },
    created(){
      this.breadcrumb()
    },
    methods:{
      breadcrumb(){
        if('/' == this.$route.path || '/index' == this.$route.path){
          this.isIndex = false
        }else {
          this.isIndex = true
        }
        this.breadcrumbs = []
        this.breadcrumbs = this.breadcrumbs.concat(this.$route.matched)
        for(var i = 0; i < this.breadcrumbs.length;i++){
          if(undefined == this.breadcrumbs[i].name){
            this.breadcrumbs.splice(i, 1);
          }else {
            //console.log(this.breadcrumbs[i])
          }
        }
      }
    }
  }
</script>
<style>
  .nav{
    overflow: hidden;
  }
  .el-menu{
    background-color: #304a6f;
  }
  .el-menu-item{
    font-weight: bold;
    color: white;
    display: list-item;
  }
  .logo{
    background-color: #304a6f;
    height: 60px;
    line-height: 60px;
    font-weight: bolder;
    font-size: 24px;
  }
  .el-menu--horizontal .el-menu-item{
    padding: 0px 15px;
    height:60px;
    line-height: 60px;
  }
  .el-menu-item:hover{
    color: #20a0ff;
  }
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
    border-bottom:5px solid #20a0ff;
    background-color: white;
  }
</style>
