export const state = () => ({
  questions: []
})

export const getters = {
  questions: store => store.questions
}

export const actions = {
  add(store, obj) {
    return this.$axios.post('/api/add', obj)
  },
  load({ commit }) {
    return this.$axios.get('/api/load').then(({ data }) => commit('load', data))
  },
  edit(store, obj) {
    return this.$axios.post('/api/edit', obj)
  }
}

export const mutations = {
  load(state, payload) {
    state.questions = payload
  }
}
