export default {
  addProduct ({ commit }, product) {
    commit('ADD_PRODUCT', product)
  },
  deleteProduct ({ commit }, productId) {
    commit('DELETE_PRODUCT', productId)
  }
}
