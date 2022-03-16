<template>
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
</template>

<script>
export default {
  name: 'ProductForm'
}
</script>

<style lang="scss" scoped>
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
</style>
