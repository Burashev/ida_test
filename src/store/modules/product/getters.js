export default {
  sortedProducts (state) {
    const products = [...state.products]
    switch (state.sortBy) {
      case 'default':
        return products
      case 'min':
        return products.sort((product1, product2) => product1.price - product2.price)
      case 'max':
        return products.sort((product1, product2) => product2.price - product1.price)
      case 'name':
        return products.sort((product1, product2) => product1.title.localeCompare(product2.title))
    }
  }
}
