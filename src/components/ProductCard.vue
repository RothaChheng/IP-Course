<template>
    <div class="container" :style="{ backgroundColor: color }">
      <div class="product-card">
        <img :src="image" alt="name">
      </div>

      <div class="product-card-text">
        <h3>{{ name }}</h3>
        <p>{{ quantity }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Category",
    props: {
      id: String,
      image: String,
      name: String,
      quantity: String,
      color:String
    },
  };
  </script>
  
  <style scoped>
  .container {
    color: black;
    border: 1px solid greenyellow;
    border-radius: 10px;
    width: 130px;
    height: 180px;
  }

  .product-card {
    width: auto;
    height: auto;
    border-radius: 10px ;
    display: flex;
    justify-content: center;
  }

  .product-card img {
    width: 80%;
    height: 100%;
  }

  .product-card-text{
    width: 100%;
    height: 40%;
    border-radius: 10px;
    padding: 3px;
  }

  .product-card-text h3{
    display: flex;
    justify-content: center;
  }
  .product-card-text p{
    display: flex;
    justify-content: center;
    opacity: 0.8;
    font-size: 12px;
  }
  </style>
  