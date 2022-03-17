<template>
  <form class="form" @change="formValidation" @submit.prevent="formSubmit">
    <div class="form__group">
      <label for="title" class="required">Наименование товара</label>
      <input type="text" id="title" placeholder="Введите наименование товара" v-model="title"
             :class="{'error': errorFields.has('title')}" required>
      <span>Поле является обязательным</span>
    </div>
    <div class="form__group">
      <label for="description">Описание товара</label>
      <textarea id="description" placeholder="Введите наименование товара" v-model="description"></textarea>
    </div>
    <div class="form__group">
      <label for="image_link" class="required">Ссылка на изобржаение товара</label>
      <input type="text" id="image_link" placeholder="Введите наименование товара" v-model="image"
             :class="{'error': errorFields.has('image')}" required>
      <span>Поле является обязательным</span>
    </div>
    <div class="form__group">
      <label for="price" class="required">Цена товара</label>
      <input type="text" id="price" placeholder="Введите наименование товара" v-model="price"
             :class="{'error': errorFields.has('price')}" @input="inputMask" required>
      <span>Поле является обязательным</span>
    </div>
    <button :disabled="hasErrors" type="submit">Добавить товар</button>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  data () {
    return {
      title: '',
      description: '',
      image: '',
      price: '',
      errorFields: new Set(),
      hasErrors: true
    }
  },
  methods: {
    formValidation () {
      this.errorFields = new Set()

      if (!this.title) {
        this.errorFields.add('title')
      }

      if (!this.image) {
        this.errorFields.add('image')
      }

      if (!this.price) {
        this.errorFields.add('price')
      }

      this.hasErrors = !!this.errorFields.size
    },
    inputMask () {
      const price = this.actualPrice
      if (Object.is(price, NaN)) {
        this.price = '0'
        return null
      }
      this.price = price.toLocaleString('RU')
    },
    formSubmit () {
      const product = {
        id: Date.now(),
        title: this.title,
        price: this.actualPrice,
        description: this.description,
        image: this.image
      }
      this.$store.dispatch('product/addProduct', product)
      this.$store.dispatch('notification/createNotification', {
        error: false,
        text: 'Product successfully added'
      })
      this.formClear()
    },
    formClear () {
      this.title = ''
      this.price = ''
      this.description = ''
      this.image = ''
      this.hasErrors = true
    }
  },
  computed: {
    actualPrice () {
      return +this.price.split(/\s/).join('')
    }
  }
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

      & + span {
        color: #FF8484;
        font-size: .9rem;
        margin-top: 5px;
        display: none;
      }

      &.error {
        outline: 2px solid #FF8484;

        & + span {
          display: inline-block;
        }
      }

    }

    textarea {
      height: 100px;
    }
  }

  button {
    width: 100%;
    background-color: #7BAE73;
    border-radius: 10px;
    border: none;
    padding: 10px 0;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color ease .4s;
    &:hover {
      background-color: #52774d;
    }
    &:disabled {
      color: #B4B4B4;
      background-color: #EEEEEE;
      cursor: not-allowed;
      &:hover {
        background-color: #dcdcdc;
      }
    }
  }
}
</style>
