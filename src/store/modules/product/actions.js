import localStorageService from '@/services/localStorageService'

export default {
  addProduct ({ state, commit }, product) {
    commit('ADD_PRODUCT', product)
    localStorageService.setProducts(state.products)
  },
  deleteProduct ({ state, commit }, productId) {
    commit('DELETE_PRODUCT', productId)
    localStorageService.setProducts(state.products)
  }
}
