import Vue from 'vue'
import Vuex from 'vuex'
import translator from '../../store/translator'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    translator
  },
})