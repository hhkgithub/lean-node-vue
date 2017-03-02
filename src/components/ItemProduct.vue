/**
* Created by hhkmac on 2017/2/14.
*/
<template>
    <div>
      <h4>{{prdname }}</h4>
      <div>
        <img :src="prdpics" width="50%">
      </div>
      <div v-for="item in prddetail" class="t-left t-indent t-lineheight">
        <div>{{item.title }}</div>
        <div v-html="item.content">{{item.content }}</div>
      </div>
    </div>
</template>
<script>
  //import {mapState} from 'vuex'
  export default {
    data() {
      return {
        prdname:'',
        prdpics:[],
        prddetail:[]
      }
    },
    watch: {
      '$route': 'getItem'
    },
    created () {
      this.getItem()
    },
    methods: {
      getItem(){
        var prods = this.$store.state.products
        if(prods.length==0){
          this.$router.push({path: '/'})
          return
        }
        this.prdname = prods[0].prod_name
        this.prdpics = prods[0].prod_images
        this.prddetail = prods[0].prod_content
        var id = this.$route.params.id
        prods.forEach((item)=>{
          if(item.objectId == id){
            this.prdname = item.prod_name
            this.prdpics = item.prod_images
            this.prddetail = item.prod_content
            return
          }
        })
      }
    }
  }
</script>
<style>

</style>
