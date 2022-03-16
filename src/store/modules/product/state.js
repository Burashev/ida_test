import localStorageService from '@/services/localStorageService'

export default {
  products: localStorageService.getProducts() ?? [
    {
      id: 1,
      title: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 10000,
      image: 'https://i.imgur.com/w9uvR4T.png'
    },
    {
      id: 2,
      title: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 10000,
      image: 'https://i.imgur.com/w9uvR4T.png'
    },
    {
      id: 3,
      title: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 10000,
      image: 'https://i.imgur.com/w9uvR4T.png'
    },
    {
      id: 4,
      title: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 10000,
      image: 'https://i.imgur.com/w9uvR4T.png'
    },
    {
      id: 5,
      title: 'Наименование товара',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: 10000,
      image: 'https://i.imgur.com/w9uvR4T.png'
    }
  ]
}
