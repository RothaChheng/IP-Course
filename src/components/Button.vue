
<template>
    <div class="button">
      <div class="button-content">
        <h2>{{ title }}</h2>
        <button @click="shopNow">Shop Now</button>
      </div>
      <img :src="image" :alt="title" class="button-image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      image: String,
    },

    name: "Button1",
    methods: {
    shopNow() {
      alert("Let's shop: Make your Breakfast Healthy and Easy");
    }
  }
  };
  </script>
  
  <style scoped>
  .button {
    display: flex;
    padding: 50px;
    border-radius: 8px;
    background-color: #e7acac;
    margin: 10px;
    width: 400px;
  }
  .button-content {
    flex: 1;
  }
  .button h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .button p {
    font-size: 10px;
    color: #555;
  }
  .button button {
    padding: 8px 16px;
    background-color: #0a8f08;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
  .button button:hover {
  background-color: #bec0bf;
  }
  
  .button-image {
    width: 100px;
    height: 100px;
  }
  </style>
  