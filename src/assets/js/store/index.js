import Vue        from 'vue'
import Vuex       from 'vuex'
import actions    from './actions'
import mutations  from './mutations'
import getters    from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    isToasting: false,
    news: [],
    itemnew:{},
    count:0,
    clickrate: 0,
    products: [],
    defaultActiveIndex: '',
    toast: {
      promise: null,
      info: '',
      btnNum: 1,
      toastResolve () {
      },
      toastReject () {
      }
    }
  },
  getters,
  mutations,
  actions
})
export default store
