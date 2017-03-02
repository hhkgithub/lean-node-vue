<template>
  <div>
    <div class="index_carousel">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in itemsCarousel">
              <img :src="item.imageurl" width="100%" height="300px" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>
    <div class="index_content">
      <el-row :gutter="20">
        <el-col :span="8" style="height: 230px">
          <el-row class="index_title">
              <span>关于我们</span>
          </el-row>
          <el-row class="aboutus">
            <div @click="goto('aboutus')">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {{company }}
            </div>
          </el-row>
        </el-col>
        <el-col :span="8" style="height: 230px">
          <el-row class="index_title">
            <span>公司动态</span>
          </el-row>

          <el-row v-for="item in itemsNews" class="newsrow">
            <el-col :span="15">
              <div class="itemnew" @click="fetchItemData(item)" style="text-indent:0px">
                  {{item.new_title }}
              </div>
            </el-col>
            <el-col :span="6">
              <div class="itemnew" @click="fetchItemData(item)">{{item.createdAt | toDate}}</div>
            </el-col>
            <el-col :span="3">
              <div v-if="item.new_status=='N'"><img src="/static/images/new.png" width="32px" ></div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8" style="height: 230px">
          <el-row class="index_title">
            <span>联系我们</span>
          </el-row>
          <el-row class="t-fontsize13" style="overflow: hidden;margin-top: 10px;" >
              <img src="/static/images/ewm.jpg"  style="cursor: pointer" width="86px" @click="goto('aboutus')">
              <p><img src="/static/images/indexwelcome/addr.png"  width="24px" style="vertical-align: middle;" @click="goto('aboutus')">
                <span class="addr-tel">河南省商丘市虞城县沙集乡</span>
              </p>
              <p><img src="/static/images/indexwelcome/tel.png"  width="24px" style="vertical-align: middle;" @click="goto('aboutus')">
                <span class="addr-tel">13603702961 13781654918</span>
              </p>
          </el-row>
        </el-col>
      </el-row>


      <el-row style="margin-top: 10px;" class="index_title">
        <el-col :span="23">产品推荐</el-col>
        <el-col :span="1" class="morebg">
          <el-tooltip class="item" effect="dark" content="点击查看更多产品" placement="top">
            <img :src="morebg.url" width="16px" @mouseover="morehover" @mouseout="moreout" >
          </el-tooltip>
        </el-col>
      </el-row>
      <el-row style="height: 165px;">
        <div class="products-DOM" ref="productsDOM" >
          <div class="products" @mouseover="scrollhover" @mouseout="scrollout">
            <el-card :body-style="{ padding: '0px' }" class="products-card"  v-for="item in products">
              <div class="prodtitle"  @click="goto('products')">
                <span>{{item.prod_name }}</span>
              </div>
              <img :src="item.prod_images " width="100px" height="90px">
            </el-card>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        interval:'',
        scrollleft:0,
        scrollleftMaxNum:0,
        scrollLeftToRight:true,
        speed:100,
        productsDOM:[],
        company:"商丘振丰芍花科技有限公司成立于2003年，注册资本500万元人民币。" +
                "集研发、生产、销售一条龙的农业农产品公司主营以芍药为主的系列产品商丘集研" +
                "发、生产、销售一条龙的农业农产品公司主营公司司主司主司主司主司主司主司主司主司主营公司司主营公司司主营公司主公司主公司主药为主的系的农业农产品公司司"+
              "集研发、生产、销售一条龙的农业农产品公司主营以芍药为主的系......",
        morebg:{'url':'/static/images/gengduo1.png'},
        itemsCarousel: [
          {'imageurl': '/static/images/indexwelcome/welcome1.jpg'},
          {'imageurl': '/static/images/indexwelcome/welcome1.jpg'},
          {'imageurl': '/static/images/indexwelcome/welcome1.jpg'}
        ]
      }
    },
    mounted(){
      this.productsDOM = this.$refs.productsDOM
      this.interval = setInterval(this.scroll,this.speed)
    },
    created () {
      this.fetchData()
    },
    watch: {
      // 如果有变化，会再次执行该方法
      'products': 'computScrollleftMaxNum'
    },
    methods: {
      fetchData () {
        this.$store.dispatch('getProducts')
        this.$store.dispatch('getNews', 1)
      },
      goItemNew (item) {
        this.$store.commit('SET_ITEMNEW',item)
        this.$router.push({ name: '动态详情', params: { _id: item.objectId }})
      },
      goto(name) {
        this.$router.push({path: name})
      },
      morehover(){
        this.morebg.url = '/static/images/gengduo2.png';
      },
      moreout(){
        this.morebg.url = '/static/images/gengduo1.png';
      },
      scroll: function () {
        if(this.scrollLeftToRight){
          this.scrollleft++
          if(this.scrollleft == this.scrollleftMaxNum){
            this.scrollLeftToRight = false
          }
        }else {
          this.scrollleft--
          if(this.scrollleft == 0){
            this.scrollLeftToRight = true
          }
        }
        this.$set(this.productsDOM,'scrollLeft',this.scrollleft)
      },
      computScrollleftMaxNum(){
        this.scrollleftMaxNum = this.products.length*125-this.productsDOM.offsetWidth
      },
      scrollhover(){
        clearInterval(this.interval)
      },
      scrollout(){
        this.interval = setInterval(this.scroll,this.speed)
      }
    },
    computed: mapState({
      products(state) {
        return state.products
      },
      itemsNews(state) {
        return state.news.slice(0,5)
      }
    })
  }
</script>
<style>
  .index_content{
    margin-top: 10px;
    height: 100%;
  }
  .index_title{
    border-left: solid 5px #152678;
    text-align: left;
    padding-left: 10px;
    font-weight: bold;
    line-height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .aboutus{
    cursor: pointer;
    line-height: 23px;
    margin-top: 5px;
    text-align: left;
    font-size: 13px;
  }
  .el-card__body{
    margin: 5px;
  }
  .itemnew{
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    font-size: 13px;
    text-align: left;
    line-height: 37px;
    text-indent: 10px;
    cursor: pointer;
  }
  .aboutus:hover{
    color: #20a0ff;
  }
  .newsrow{
    border-bottom: dashed 1px #304a6f
  }
  .newsrow:hover{
    color: #20a0ff;
  }
  .prodtitle{
    padding: 14px;
    cursor: pointer
  }
  .prodtitle:hover{
    color: #20a0ff;
  }
  .morebg{
    cursor: pointer;
    text-align: right;
  }
  .products{
    height:180px;
    display: inline-block;
    overflow: hidden;
  }
  .products-DOM{
    overflow-x:hidden;
    white-space: nowrap;
    margin-top: 10px;
  }
  .products-card{
    display: inline-block;
    width: 123px;
    margin-left: 2px
  }
  .products-card:hover{
    box-shadow:0 0 25px rgba(0, 0, 0, .5);
  }
  .addr-tel:hover{
    cursor: pointer;
    color: #20a0ff;
  }
</style>
