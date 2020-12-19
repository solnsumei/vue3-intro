app.component('product-display', {
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img 
          :src="image"
          :class="{ 'out-of-stock-img' : !inStock }"/>
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>

        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
  </div>`,
  data() {
    return {
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