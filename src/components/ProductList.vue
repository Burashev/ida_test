<template>
  <div class="items-list">
    <transition-group name="fade">
      <product-loader v-if="isLoading"/>
      <product-item v-else v-for="product in products" :product="product" :key="product.id"/>
    </transition-group>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
import ProductLoader from '@/components/ProductLoader'

export default {
  name: 'ProductList',
  components: { ProductLoader, ProductItem },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    setTimeout(() => {
      this.isLoading = false
    }, 1300)
  }
}
</script>

<style lang="scss" scoped>
.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-move {
  transition: transform 0.5s ease;
}
</style>
