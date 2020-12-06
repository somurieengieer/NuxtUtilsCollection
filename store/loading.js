export default {
  namespaced: true,
  state: () => ({
    isBusy: false
  }),
  getters: {},
  mutations: {
    setBusy(state, val) {
      state.isBusy = val
    }
  },
  actions: {
    setBusy({ commit }) {
      commit('setBusy', true)
    },
    resetBusy({ commit }) {
      commit('setBusy', false)
    }
  }
}

export const showSpinnerDuringAsync = async (dispatch, handler) => {
  dispatch('loading/setBusy', null, { root: true })
  await handler()
  dispatch('loading/resetBusy', null, { root: true })
}
