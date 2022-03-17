export default {
  setProducts (products) {
    localStorage.setItem('products', JSON.stringify(products))
  },
  getProducts () {
    return JSON.parse(localStorage.getItem('products'))
  }
}
