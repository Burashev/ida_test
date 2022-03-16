<template>
  <div class="items-list">
    <product-item v-for="product in products" :product="product" :key="product.id"/>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
  name: 'ProductList',
  components: { ProductItem },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
</style>
