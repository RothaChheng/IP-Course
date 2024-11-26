<template>

    <div class="btn">
      
      <div class="btn-content1">
        <h2>{{ title }}</h2>
        <img :src="image" alt="" class="button-image" />
        <button @click="shopNow">Shop Now</button>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      image: String,
      color: String,
    },

    name:"btn1",
    methods: {
    shopNow() {
      alert("Let's shop: Make your Breakfast Healthy and Easy");
    }
  }
  };
  </script>
  
  <style scoped>
    .btn {
    display: flex;
    padding: 50px;
    border-radius: 8px;
    background-color: #e7acac;
    margin: 10px;
    width: 400px;
    height: 250px;
  }
  .btn-content {
    flex:auto;
  }
  .btn h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .btn p {
    font-size: 10px;
    color: #555;
  }
  .btn button {
    padding: 8px 16px;
    background-color: #0a8f08;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 20px;
  }
  .btn button:hover {
  background-color: #bec0bf;
  }
  
  .button-image {
    width: auto;
    height: 100px;
  }

  
  </style>
  