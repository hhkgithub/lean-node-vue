/**
* Created by hhkmac on 2017/2/7.
*/
<template>
  <div>
    <div class="newdetail">
      <el-row>
        <el-col :span="24"><h3>{{itemnew.new_title}}</h3></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">{{itemnew.createdAt | toDate}}</el-col>
      </el-row>
      <br>
      <el-row v-for="item in itemnew.new_content">
        <el-col :span="24" class="newcontent" v-if="item.type=='text'">
          {{item.content }}
        </el-col>
        <el-col :span="24" class="t-center" v-if="item.type=='image'">
          <img :src="item.content" alt="" width="80%" height="80%">
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {mapState } from 'vuex'
  export default {
    name: 'ItemNew',
    data(){
      return{
        itemnew:''
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        var id = this.$route.params._id
        this.$store.dispatch('updateNewClickRate', id)
        this.itemnew = this.$store.state.itemnew
      }
    }
  }
</script>
<style>
.newdetail{
  margin-top: 10px;
  font-size: 13px
}
.newcontent{
  text-indent:25px;
  text-align: left;
  line-height: 24px
}
</style>
