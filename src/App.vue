<template>
    <div id="app">
      <MainGrid />

      <MenuComponent
      :title="'Featured Categories'"
      :categories="['All','Milk&Daires','Coffes & Teas','Pet Foods','Meats','Vegetables','Fruits']"
      :items="menuItems"
      @category-selected="onCategorySelected"
      />

      <ProductComponent
      :products="products"
      @add-to-cart="onAddToCart"
      
      />
    </div>
  </template>

  <script>

  import MainGrid from './components/MainGrid.vue';
  import axios from 'axios';
  import ProductComponent from './components/Product.vue';
  import MenuComponent from './components/Menu.vue';
  

  export default {
    name: "ParentComponent",
    components: {
      MainGrid,
      ProductComponent,
      MenuComponent,
    },

    data() {
        return {
            promotions: [],
            categories: [],
            menuItems:[],

            products:[
                {name: "Mango",weight:"500 grams", description:"Seeds of Change Organic Quinaa,Brown,& red Rice", price:"$2.51", original_price:"$3.00", discount:"17%", image:"./src/components/PNG/Mango.jpg"},
                {name: "Corn",weight:"200 grams", description:"All Natural Italian-Style Chicken Meatballs", price:"$1.21", original_price:"$2.50", discount:"Hot", image:"./src/components/PNG/Corn.png"},
                {name: "Small Orange",weight:"600 grams", description:"Angle's Boomchickapop Sweet & Salty Kettie Corn", price:"$3.37", original_price:"$4.80", discount:"Sale",image:"./src/components/PNG/small orange.png"},
                {name: "Chilie",weight:"100 grams", description:"Faster Farms Takeout Crispy Classic Buffaio Wings", price:"$1.60", original_price:"$2.20",image:"./src/components/PNG/Chilie.png"},
                {name: "lemon",weight:"1 kilograms", description:"Blue Daimond Almonds Lightly Salted Vegetables", price:"$5.00", original_price:"$10.00", image:"./src/components/PNG/lemon.png"},
                {name: "Chicken",weight:" 800 grams", description:"Chobani Complete Vanila Greek Yogurt", price:"$7.85", original_price:"$9.00", image:"./src/components/PNG/chicken.png"},
                {name: "Fish",weight:" 2 kilograms", description:"Canada Dry Ginger Ale - 2L Bottle - 200ml - 400g", price:"$4.90", original_price:"$6.70", image:"./src/components/PNG/Fish.png"},
                {name: "Steak",weight:" grams", description:"Encore Seafood Stuffed Alaskan Salmon", price:"$2.51", original_price:"$3.00", image:"./src/components/PNG/steak.png"},
                {name: "Mushroom",weight:" 895 grams", description:"Garton's Beer Battered Fish Fillets with salt paper", price:"$2.94", original_price:"$4.15", image:"./src/components/PNG/mushroom.png"},
                {name: "Beetroot",weight:" 700 grams", description:"Haagen-Dazs Caramel Cone Ice Cream Ketchup", price:"$9.63", original_price:"$11.00", discount:"Hot", image:"./src/components/PNG/Beetroot.png"},
            ]
        };
    },
    mounted() {
        axios.get('http://localhost:3001/api/categories')
            .then(response => {
                this.category = response.data;
            })
            .catch(error => {
                console.error("Error fetching categories:", error.response ? error.response.data : error.message);
            });
        
        axios.get('http://localhost:3001/api/promotions')
            .then(response => {
                this.promotion = response.data;
            })
            .catch(error => {
                console.error("Error fetching promotions:", error.response ? error.response.data : error.message);
            });
    }
  };
  </script>
