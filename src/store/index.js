import Vue from 'vue'
import Vuex from 'vuex'
import data from './../data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataJson: data
  },
  getters: {
    getJson: state => {
      return JSON.stringify(state.dataJson, null, 2)
    }
  },
  mutations: {
    updateJson(state, textAreaVal) {
      state.dataJson = JSON.parse(textAreaVal)
      // console.log(state.dataJson)
    }
  },
  actions: {

  }
})
