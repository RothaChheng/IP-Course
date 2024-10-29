
<template>
    <div class="main-grid">
      <div class="product-list">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :name="product.name"
          :quantity="product.quantity"
        />
      </div>
      <div class="banner-list">
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
  import ProductCard from './ProductCard.vue';
  import Banner from './Button.vue';
  
  export default {
    components: { ProductCard, Banner },
    data() {
      return {
        products: [
          { image: 'src/components/Burger.png', name: 'Cake & Milk', quantity: '5 items' },
          { image: 'src/components/Peach.png', name: 'Peach', quantity: '17 items' },
          { image: 'src/components/Organic Kiwi.png', name: 'Oganic Kiwi', quantity: '21 items' },
          { image: 'src/components/Red Apple.png', name: 'Red Apple', quantity: '68 items' },
          { image: 'src/components/Snack.png', name: 'Snack', quantity: '34 items' },
          { image: 'src/components/Black Plum.png', name: 'Black Plum', quantity: '25 items' },
          { image: 'src/components/Vegetables.png', name: 'Vegetables', quantity: '65 items' },
          { image: 'src/components/Headphone.png', name: 'Headphone', quantity: '33 items' },
          { image: 'src/components/Cake & Milk.png', name: 'Cake & Milk', quantity: '54 items' },
          { image: 'src/components/Orange.png', name: 'Orange', quantity: '63 items' },
        ],
        banners: [
          {
            title: 'Everyday Fresh & Clean with Our Products',
            image: 'src/components/onion.png',
          },

          {
            title: 'Make your Breakfast Healthy and Easy',
            image: 'src/components/strawberry.png',
          },

          {
            title: 'The best Organic Products Online',
            image: 'src/components/salad.png',
          },
        ],
      };
    },
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
  .banner-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  </style>
  