import { IS_PROD } from '~~/utils'
import * as questions from '~~/data/questions.json'

export const state = () => ({
  questions: []
})

export const getters = {
  questions: store => store.questions
}

export const actions = {
  add(store, obj) {
    if (IS_PROD) return
    return this.$axios.post('/api/add', obj)
  },
  load({ commit }) {
    if (IS_PROD) {
      return commit('load', questions.default.questions)
    }
    return this.$axios.get('/api/load').then(({ data }) => commit('load', data))
  },
  edit(store, obj) {
    if (IS_PROD) return
    return this.$axios.post('/api/edit', obj)
  }
}

export const mutations = {
  load(state, payload) {
    state.questions = payload
  }
}
