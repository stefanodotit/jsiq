import categories from '~~/data/categories.js'

export const state = () => ({
  categories: []
})

export const getters = {
  categories: store => store.categories
}

export const mutations = {
  load(store) {
    store.categories = categories
  }
}
