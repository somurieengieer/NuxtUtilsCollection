import {
  translateFrom,
  targetLanguageFrom
} from '../infrastructure/axios/GoogleTranslator'
import { showSpinnerDuringAsync } from './loading.js'

const state = () => ({
  translatedText: '',
  reTranslatedText: ''
})

const getters = {
  texts: (state) => {
    return state
  }
}

const actions = {
  /**
   * payload format is as follows
   * const payload = { originText: '翻訳したい元の言葉', originLanguage: 'ja' }
   * originLanguage is 'ja' or 'en'
   */
  async translate({ commit, dispatch }, payload) {
    await showSpinnerDuringAsync(dispatch, async function() {
      console.log('before replace', payload.originText)
      console.log('after replace', payload.originText.replace('\n', ' \n'))
      const originText = payload.originText.replace(/\n/g, ` \n`)
      const originLanguage = payload.originLanguage
      if (!originText || !originLanguage) return

      const translatedText = await translateFrom(originText, originLanguage)
      commit('setTranslatedText', { updatedText: translatedText })
      if (!translatedText) return

      const targetLanguage = targetLanguageFrom(originLanguage)
      const reTranslatedText = await translateFrom(
        translatedText,
        targetLanguage
      )
      commit('setReTranslatedText', { updatedText: reTranslatedText })
    })
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
