export default {
  ADD_PRODUCT (state, product) {
    state.products.push(product)
  },
  DELETE_PRODUCT (state, productId) {
    state.products = state.products.filter(product => product.id !== productId)
  }
}
