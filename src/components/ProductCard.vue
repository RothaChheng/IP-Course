<template>
    <div class="product-card">
      <img :src="image" :alt="name" />
      <h3>{{ name }}</h3>
      <p>{{ quantity }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      name: String,
      quantity: String,
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    width: 120px;
    padding: 10px;
    text-align: center;
    background-color: #e2bebe;
    border-radius: 8px;
  }
  .product-card img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 8px;
  }
  .product-card h3 {
    font-size: 15px;
    margin: 5px;
  }
  .product-card p {
    color: #000000;
    font-size: 12px;
  }
  </style>
  