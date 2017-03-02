import Vue from 'vue'
import Router from 'vue-router'
//noinspection JSUnresolvedVariable
import IndexContent from '../../../components/IndexContent'
import NewsList from '../../../components/NewsList'
import ItemNew from '../../../components/ItemNew'
import Business from '../../../components/Business'
import ItemProduct from '../../../components/ItemProduct'
import CompanyIntroduction from '../../../components/CompanyIntroduction'
import ManagerIntroduction from '../../../components/ManagerIntroduction'
import CompanyCivilization from '../../../components/CompanyCivilization'

import ContactUs from '../../../components/ContactUs'
import Wanmujidi from '../../../components/Wanmujidi'
Vue.use(Router)
import { createComponent } from '../CreateComponent'

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes : [
    { path: '/', components: {default:IndexContent} },
    { path: '/index', components: {default:IndexContent} },
    { path: '/products', component: createComponent() , name:'产品中心' ,
      children: [
        {
          path: '',
          component: ItemProduct
        },
        {
          path: ':id',
          name:'产品详情',
          component: ItemProduct
        }
      ]
    },
    { path: '/news', component: createComponent() , name:'公司动态' ,
      children: [
        {
          path: '',
          component: NewsList
        },
        {
          path: 'id',
          name:'动态详情',
          component: ItemNew
        }
      ]
    },
    // { path: '/news/:_id',component: ItemNew , name:'动态详情'},
    { path: '/business', component: createComponent() , name:'主营业务' ,
      children: [
        {
          path: '',
          component: Business
        }
      ]
    },
    { path: '/wanmujidi', component: createComponent() , name:'万亩基地' ,
      children: [
        {
          path: '',
          component: Wanmujidi
        }
      ]
    },
    { path: '/aboutus', component: createComponent() , name:'关于我们' ,
      children: [
      {
        path: '',
        name:'公司简介',
        component: CompanyIntroduction
      },
      {
        path: 'companyIntroduction',
        name:'公司简介',
        component: CompanyIntroduction
      },
      {
        path: 'managerIntroduction',
        name:'经理简介',
        component: ManagerIntroduction
      },
      {
        path: 'companyCivilization',
        name:'文化底蕴',
        component: CompanyCivilization
      },
      {
        path: 'contactUs',
        name:'联系我们',
        component: ContactUs
      }
    ]}
  ]
  // routes: [
  //   { path: '/top/:page(\\d+)?', component: createListView('top') },
  //   { path: '/new/:page(\\d+)?', component: createListView('new') },
  //   { path: '/show/:page(\\d+)?', component: createListView('show') },
  //   { path: '/ask/:page(\\d+)?', component: createListView('ask') },
  //   { path: '/job/:page(\\d+)?', component: createListView('job') },
  //   { path: '/item/:id(\\d+)', component: ItemView },
  //   { path: '/user/:id', component: UserView },
  //   { path: '/', redirect: '/top' }
  // ]
})
router.afterEach(route => {
  //console.log(route)
  //console.log(this.$refs.footer)
})
module.exports = router