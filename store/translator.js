import { translateFromJapanese, translateFromEnglish } from '../infrastructure/axios/GoogleTranslator'
const state = () => ({
  translatedText: '',
  reTranslatedText: ''
})

const getters = {
  texts: (state, getters, rootState) => {
    return state
  }
}

const actions = {

  /**
   * payload format is as follows
   * const payload = { originText: '翻訳したい元の言葉' }
   */
  async translate({ commit, state }, payload) {

    const originText = payload.originText
    if (!originText) return;

    const translatedText = await translateFromJapanese(originText)
    commit('setTranslatedText', { updatedText: translatedText } )
    if (!translatedText) return;

    const reTranslatedText = await translateFromEnglish(translatedText)
    commit('setReTranslatedText', { updatedText: reTranslatedText } )
  }
}

const mutations = {
  setTranslatedText(state, { updatedText }) {
    state.translatedText = updatedText
  },
  setReTranslatedText(state, { updatedText }) {
    state.reTranslatedText = updatedText
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
