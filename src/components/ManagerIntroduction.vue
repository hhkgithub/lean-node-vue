/**
* Created by hhkmac on 2017/2/23.
*/
<template>
    <div class="t-left t-indent">
      <p>贺家振，男，汉族，中专文化，中国共产党党员，生于1963年。</p>
      <p>籍贯：河南省虞城县沙集乡贺桥村,技术职称：农民技师。</p>
      <p>1987年4月毕业于中央农业广播电视大学农学专业。</p>
      <p>1987—1990年任虞城县农业局沙集乡农业技术推广站技术员。</p>
      <p>1991-1994年在虞城县科学技术协会工作，任科技咨询服务中心主任、农技师。</p>
      <p>1995-2007年在虞城县农业局沙集农业技术综合服务站工作，历任技术员、农技师、会计、副站长、站长等职务。</p>
      <p>2007年至今任商丘市振丰芍花科技有限公司总经理。</p>
      <el-row :gutter="5">
        <el-col :span="6" v-for="(item, index) in AwardCertificates" style="margin-top: 15px">
          <el-popover ref="popover{{index }}" placement="right" width="400"  trigger="hover">
            <div><img :src="item.imageurl " width="400px"></div>
            <el-button slot="reference">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.imageurl " width="100px" height="90px" >
              </el-card>
            </el-button>
          </el-popover>
        </el-col>
      </el-row>
      <p>1985年被虞城县团委评为“新长征突击手”。</p>

      <p>1987年被虞城县团委评为“百业能手”。</p>

      <p>1988年被虞城县科委评为“农村科技模范”。</p>

      <p>1990年获得“西瓜新品种的研究与推广”虞城县科技成果奖。</p>

      <p>1993年获得苏、鲁、豫、皖科协协作区“科技兴农先进科技工作者”称号。</p>

      <p>1995年《西瓜病毒病的预防与治疗研究初探》论文获得苏、鲁、豫、皖科协协作区“优秀学术论文一等奖”。</p>

      <p>1997年被商丘地区科协、组织部、人事局评为首届优秀中、青年科技专家。</p>

      <p>1997年获得商丘地区《改良豫玉一号玉米杂交种选育及应用》科技成果二等奖。</p>

      <p>2000年被虞城县人民政府评为“农业结构调整先进工作者”。</p>

      <p>2001年被商丘市委组织部、人事局、科委、科协命名为“商丘市农村优秀乡土人才”。</p>

      <p>2003年被虞城县委、商丘市委评为“防止非典型肺炎工作优秀共产党员”。</p>

      <p>2011年被虞城县老科技工作者评委本年度“先进工作者”。</p>

      <div style="line-height: 24px">自1985年以来，在从事农业技术服务与推广工作的同时，致力于中华传统中药材白芍的研究与育种，
        引进大兴安岭野生赤芍与抗白芍并进行有性杂交育种，于2000年前后以抗白芍做母本与野生赤芍做父本首次杂交并系统选育出了具备双亲优良性状，
        集药用、观赏和油用相结合的芍药新品种“油芍一号”。目前在全国推广面积达数万亩，
        近年来又利用“三系配套”理论成功培育出了高产、有知道油用、药用与观赏相结合的白芍一代杂交种。
        此项成果具有国内外领先水平，填补了国内外行业空白，有着不可估量的发展前景及开发利用价值。
      </div>
    </div>
</template>
<script>
  export default {
    name: '',
    data(){
      return {
        AwardCertificates:[
          {'imageurl': '/static/images/IMG_1166_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1167_meitu.jpg','title':'2'},
          {'imageurl': '/static/images/IMG_1168_meitu.jpg','title':'3'},
          {'imageurl': '/static/images/IMG_1169_meitu.jpg','title':'4'},
          {'imageurl': '/static/images/IMG_1170_meitu.jpg','title':'5'},
          {'imageurl': '/static/images/IMG_1171_meitu.jpg','title':'6'},
          {'imageurl': '/static/images/IMG_1172_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1173_meitu.jpg','title':'2'},
          {'imageurl': '/static/images/IMG_1174_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1175_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1176_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1177_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1178_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1179_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1180_meitu.jpg','title':'1'},
          {'imageurl': '/static/images/IMG_1181_meitu.jpg','title':'1'},
        ]
      }
    },
    methods: {
      initfooter(){
        this.init(this.$route.path,this.$refs.footer.$el)
      }
    }
  }
</script>
<style>

</style>
