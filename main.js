const App = Vue.createApp({
  data() {
    return {
      cart: 0,
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0
    },
    image() {
      return this.variants[this.selectedVariant].image
    }

  }
})

const mountedApp = App.mount("#app")
