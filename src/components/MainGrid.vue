
<template>
    <div class="main-grid">
      <div class="product-list">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :name="product.name"
          :productCount="product.productCount"
        />
      </div>
      <div class="button-list">
        <Banner
          v-for="(banner, index) in banners"
          :key="index"
          :title="banner.title"
          :description="banner.description"
          :image="banner.image"
        />
      </div>
    </div>
  </template>
  
  <script>
   import axis from 'axios';
  import ProductCard from './ProductCard.vue';
  import Banner from './Button.vue';
  
  export default {
    components: { ProductCard, Banner },
    data() {
      return {
        products: [
          // { image: 'src/components/Burger.png', name: 'Cake & Milk', quantity: '5 items' },
          // { image: 'src/components/Peach.png', name: 'Peach', quantity: '17 items' },
          // { image: 'src/components/Organic Kiwi.png', name: 'Oganic Kiwi', quantity: '21 items' },
          // { image: 'src/components/Red Apple.png', name: 'Red Apple', quantity: '68 items' },
          // { image: 'src/components/Snack.png', name: 'Snack', quantity: '34 items' },
          // { image: 'src/components/Black Plum.png', name: 'Black Plum', quantity: '25 items' },
          // { image: 'src/components/Vegetables.png', name: 'Vegetables', quantity: '65 items' },
          // { image: 'src/components/Headphone.png', name: 'Headphone', quantity: '33 items' },
          // { image: 'src/components/Cake & Milk.png', name: 'Cake & Milk', quantity: '54 items' },
          // { image: 'src/components/Orange.png', name: 'Orange', quantity: '63 items' },
        ],
        banners: [
          // {
          //   title: 'Everyday Fresh & Clean with Our Products',
          //   image: 'src/components/onion.png',
          // },

          // {
          //   title: 'Make your Breakfast Healthy and Easy',
          //   image: 'src/components/strawberry.png',
          // },

          // {
          //   title: 'The best Organic Products Online',
          //   image: 'src/components/salad.png',
          // },
        ],
      };
    },
    methods: {
      async getProduct() {
        const response = await axis.get('http://localhost:3001/api/categories')
        const products = response.data;
        this.products =products;
      },
      async getPromotion() {
        const responsePromotion = await axis.get('http://localhost:3000/api/promotions');
        const promotions = responsePromotion.data;
        this.promotions = promotions;
      }
    },
    async mounted() {
      this.getProduct();
      this.getPromotion()
    }
  };
  
  </script>
  
  <style scoped>
  .main-grid {
    display: flex;
    flex-direction: column;
  }
  .product-list {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 10px 0;
  }
  .button-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  </style>
  