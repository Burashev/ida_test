<template>
  <div class="container">
    <product-header/>
    <main class="main">
      <div class="form-wrapper">
        <product-form/>
      </div>
      <product-list :products="products"/>
    </main>
  </div>
  <notification-list/>
</template>

<script>
import ProductList from '@/components/ProductList'
import ProductForm from '@/components/ProductForm'
import NotificationList from '@/components/NotificationList'
import ProductHeader from '@/components/ProductHeader'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    ProductHeader,
    ProductList,
    ProductForm,
    NotificationList
  },
  computed: {
    ...mapState('product', ['products'])
  }
}
</script>

<style lang="scss">
/* Fonts */
@font-face {
  src: url("~@/assets/fonts/SourceSansPro-Regular.ttf");
  font-family: "Source Sans Pro";
  font-weight: 400;
}

@font-face {
  src: url("~@/assets/fonts/SourceSansPro-SemiBold.ttf");
  font-family: "Source Sans Pro";
  font-weight: 600;
}

@font-face {
  src: url("~@/assets/fonts/SourceSansPro-Bold.ttf");
  font-family: "Source Sans Pro";
  font-weight: 700;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Source Sans Pro", sans-serif;
}

body {
  background-color: #FAF9F7;
}

</style>

<style lang="scss" scoped>

.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
}

.main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
  margin-top: 16px;

  .form-wrapper {
    position: relative;
  }

  @media (max-width: 1270px) {
    grid-template-columns: 1fr;
  }
}
</style>
