
<template>
    <div class="banner">
      <div class="banner-content">
        <h2>{{ title }}</h2>
        <button>Shop Now-></button>
      </div>
      <img :src="image" :alt="title" class="banner-image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      image: String,
    },
  };
  </script>
  
  <style scoped>
  .banner {
    display: flex;
    padding: 50px;
    border-radius: 8px;
    background-color: #e7acac;
    margin: 10px;
    width: 400px;
  }
  .banner-content {
    flex: 1;
  }
  .banner h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .banner p {
    font-size: 10px;
    color: #555;
  }
  .banner button {
    padding: 8px 16px;
    background-color: #0a8f08;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
  .banner-image {
    width: 100px;
    height: 100px;
  }
  </style>
  