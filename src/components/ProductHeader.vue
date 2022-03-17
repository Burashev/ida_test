<template>
  <header class="header">
    <h1 class="header__title">Добавление товара</h1>
    <select class="header__select" @input="selectInput" v-model="sortValue">
      <option value="default" selected>По умолчанию</option>
      <option value="min">По цене min</option>
      <option value="max">По цене max</option>
      <option value="name">По наименованию</option>
    </select>
  </header>
</template>

<script>
export default {
  name: 'ProductHeader',
  data () {
    return {
      sortValue: 'default'
    }
  },
  watch: {
    sortValue: {
      handler () {
        this.$store.dispatch('product/setSortBy', this.sortValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;

  &__title {
    color: #3F3F3F;
    line-height: 35px;
    font-weight: 600;
    @media (max-width: 1270px) {
      font-size: 1.5rem;
    }
  }

  &__select {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    background-color: #FFFEFB;
    padding: 10px 16px;
    color: #B4B4B4;
    font-size: 1rem;
  }
}
</style>
