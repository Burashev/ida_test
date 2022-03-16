import { createStore } from 'vuex'
import product from './modules/product'
import notification from './modules/notification'

export default createStore({
  modules: { product, notification }
})
