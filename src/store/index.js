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
      return JSON.stringify(state.dataJson)
    }
  },
  mutations: {
    changeJson(state) {
      state.dataJson = document.getElementsByClassName('redactor__textarea').value
    }
  },
  actions: {

  }
})
