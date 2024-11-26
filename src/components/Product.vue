<template>
  <div class="product">
    <div
      class="product-card"
      v-for="(product, index) in products"
      :key="index"
    >
      <div class="badge" v-if="product.discount">
        {{ product.discount }}
      </div>
      <img :src="product.image" alt="" class="image-card"/>
      <h4>{{ product.name }}</h4>
      <p>{{ product.description }}</p>
      <div class="price">
        <span class="current-price">{{ product.price }}</span>
        <span class="original-price" v-if="product.originalPrice">
          {{ product.originalPrice }}
        </span>
      </div>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  width: 1200px;
}
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  width: 200px;
  position: relative;
}
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: white;
  padding: 5px;
  font-size: 12px;
}
.price {
  display: flex;
  gap: 5px;
}
.original-price {
  text-decoration: line-through;
  color: grey;
}
button {
  margin-top: 10px;
}
.image-card{
  width: auto;
  height: 100px;
}
</style>
