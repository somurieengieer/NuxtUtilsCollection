import {
  translateFrom,
  targetLanguageFrom
} from '../infrastructure/axios/GoogleTranslator'
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
   * const payload = { originText: '翻訳したい元の言葉', originLanguage: 'ja' }
   * originLanguage is 'ja' or 'en'
   */
  async translate({ commit, state }, payload) {
    const originText = payload.originText
    const originLanguage = payload.originLanguage
    if (!originText || !originLanguage) return

    const translatedText = await translateFrom(originText, originLanguage)
    commit('setTranslatedText', { updatedText: translatedText })
    if (!translatedText) return

    const targetLanguage = targetLanguageFrom(originLanguage)
    const reTranslatedText = await translateFrom(translatedText, targetLanguage)
    commit('setReTranslatedText', { updatedText: reTranslatedText })
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
