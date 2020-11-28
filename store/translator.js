const state = () => ({
  originText: 'こんにちは',
  translatedText: '',
  reTranslatedText: ''
})

const getters = {
  texts: (state, getters, rootState) => {
    return state;
  }
}

const actions = {
  translate ({ commit, state }, payload) {
    console.log('payload is ' + payload)
    commit('setOriginText', payload)
  }
}

const mutations = {
  setOriginText (state, { originText }) {
    state.originText = originText
    state.translatedText = state.originText + 'translated'
    state.reTranslatedText = state.translatedText + 'translated'
    console.log('updatedText: ' + originText)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}