/**
* Created by hhkmac on 2017/2/7.
*/
<template>
  <div>
    <el-row v-for="(item,index) in allNews" class="newslistrow" style="padding: 0 15%" v-bind:class="[index % 2 == 0?activeClass:'']" >
      <el-col :span="3" v-if="item.new_status=='N'">
        <div>
          <img src="/static/images/new.png" width="32px">
        </div>
      </el-col>
      <el-col :span="15" v-bind:class="{ offset: item.new_status!='N' }">
        <div class="itemnew" style="font-size: 13px" @click="fetchItemData(item)">{{item.new_title }}</div>
      </el-col>
      <el-col :span="6">
        <div class="itemnew" style="font-size: 13px" @click="fetchItemData(item)">{{item.createdAt | toDate}}</div>
      </el-col>
    </el-row>
    <el-row class="margin-top-20">
      <el-pagination small layout="prev, pager, next" :total="AllNewsNum"></el-pagination>
    </el-row>
  </div>
</template>
<script>
  import {mapState } from 'vuex'
  export default {
    name: 'NewsList',
    data () {
      return {
        allNews:[],
        activeClass: 'bgc',
      }
    },
    created () {
      this.fetchData()
    },
    mounted(){

    },
    methods: {
      fetchData () {
        this.allNews = this.$store.state.news
        if(this.allNews.length == 0){
          this.$router.push({path: '/'})
          return;
        }
        this.$store.dispatch('getNewsCount')
      },
      fetchItemData (item) {
        this.$store.commit('SET_ITEMNEW',item)
        this.$router.push({ name: '动态详情', params: { _id: item.objectId }})
      }
    },
    computed: mapState({
      AllNewsNum:state => {
        return Number(state.count)
      }
    })
  }
</script>
<style>
.bgc{
  background-color: white;
}
  .newslistrow:hover{
    color: #20a0ff;
  }
  .offset{
    margin-left: 12.5%;
  }
</style>
