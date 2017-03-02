/**
* Created by hhkmac on 2017/2/7.
*/
<template>
  <div class="itemnewcontent">
    <el-row :gutter="20" class="tac margin-top-20">
      <el-col :span="5" id="IntroductionNav" style="position: relative;top:0px;">
        <el-menu v-bind:default-active="defaultActive"  class="el-menu-vertical-demo" :router="true" @open="handleOpen">
          <template v-for="item in elMenuItems">
            <el-menu-item v-bind:index = "item.path">
              <i class="el-icon-menu"></i>
              {{item.name }}
              <div style="float: right"> > </div>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-card class="box-card">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        defaultActive:'',
        elMenuItems:[]
      }
    },
    watch: {
      // 如果有变化，会再次执行该方法
      '$route': 'changeNav',
      '$route.fullPath':'changeNavbg'
    },
    created (){
      this.changeNav()
    },
    methods:{
      handleOpen(key, keyPath){
        console.log(key, keyPath)
      },
      changeNavbg(newVal, oldVal){
        //console.log(1+oldVal)
        //console.log(2+newVal)
      },
      changeNav(){
        //console.log(this.$route)
        this.elMenuItems = []
        var routerpath = this.$route.fullPath
        if(routerpath.indexOf("/products") == 0){
          var prods = this.$store.state.products
          prods.forEach((item)=>{
            var id = item.objectId
            var name = item.prod_name
            this.elMenuItems.push({'path':'/products/'+id,'name':name})
          })
        }else if(routerpath.indexOf("/business") == 0){

          this.elMenuItems.push({'path':'/business','name':'主营业务'})

        }else if(routerpath.indexOf("/wanmujidi") == 0){

          this.elMenuItems.push({'path':'/wanmujidi','name':'万亩基地'})

        }else if(routerpath.indexOf("/news") == 0){

          this.elMenuItems.push({'path':'/news','name':'公司动态'})

        }else if(routerpath.indexOf("/aboutus") == 0){
          this.elMenuItems.push({'path':'/aboutus/companyIntroduction','name':'公司简介'})
          this.elMenuItems.push({'path':'/aboutus/companyCivilization','name':'文化底蕴'})
          this.elMenuItems.push({'path':'/aboutus/managerIntroduction','name':'经理简介'})
          this.elMenuItems.push({'path':'/aboutus/contactUs','name':'联系我们'})
        }
        console.log(this.elMenuItems[0])
        if(this.elMenuItems[0]){
          this.defaultActive = this.elMenuItems[0].path
        }
      }
    },
    mounted(){
      //this.changeNav()
      //console.log(document.body.clientHeight)  网页body高度
      //console.log()
      var maxleftnav = (document.documentElement.clientHeight-180)/56
      var navlength = this.elMenuItems.length
      window.onscroll = function () {
        var dom = document.getElementById('IntroductionNav')
        if(dom && (navlength <= maxleftnav)){
          var h =  document.getElementById('IntroductionNav').style.top.replace("px","")
          var w = window.scrollY
          document.getElementById('IntroductionNav').style.top = Number(w) + 'px'
        }
      }
    }
  }
</script>
<style>
  .el-collapse-item div{
    border-bottom: none;
  }
  .ttcc{
    background-color: inherit;
    border-bottom: none;
  }
</style>
