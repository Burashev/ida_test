<template>
  <div class="container">
    <header class="header">
      <h1 class="header__title">Добавление товара</h1>
      <select class="header__select">
        <option value="default" disabled selected>По умолчанию</option>
      </select>
    </header>
    <main class="main">
      <div class="form__wrapper">
        <form class="form">
          <div class="form__group">
            <label for="name" class="required">Наименование товара</label>
            <input type="text" id="name" placeholder="Введите наименование товара" required>
          </div>
          <div class="form__group">
            <label for="description">Описание товара</label>
            <textarea id="description" placeholder="Введите наименование товара"></textarea>
          </div>
          <div class="form__group">
            <label for="image_link" class="required">Ссылка на изобржаение товара</label>
            <input type="text" id="image_link" placeholder="Введите наименование товара" required>
          </div>
          <div class="form__group">
            <label for="price" class="required">Цена товара</label>
            <input type="text" id="price" placeholder="Введите наименование товара" required>
          </div>
          <button>Добавить товар</button>
        </form>
      </div>
      <product-list :products="products"/>
    </main>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { ProductList },
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

.header {
  display: flex;
  justify-content: space-between;

  &__title {
    color: #3F3F3F;
    line-height: 35px;
    font-weight: 600;
  }

  &__select {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    background-color: #FFFEFB;
    padding: 10px 16px;
    color: #B4B4B4;
  }
}

.main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
  margin-top: 16px;

  .form__wrapper {
    position: relative;

    .form {
      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;
      padding: 24px;
      position: sticky;
      top: 24px;

      &__group {
        margin-bottom: 16px;

        label {
          margin-bottom: 4px;
          display: inline-block;
          position: relative;

          &.required::after {
            content: '';
            position: absolute;
            top: 0;
            right: -4px;
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #FF8484;
          }
        }

        input, textarea {
          color: #3F3F3F;
          padding: 10px 16px;
          width: 100%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          border: none;
          font-size: 1rem;
          resize: none;

          &::placeholder {
            color: #B4B4B4;
          }
        }

        textarea {
          height: 100px;
        }
      }

      button {
        width: 100%;
        background-color: #EEEEEE;
        border-radius: 10px;
        border: none;
        padding: 10px 0;
        color: #B4B4B4;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1270px) {
    grid-template-columns: 1fr;
  }
}
</style>
