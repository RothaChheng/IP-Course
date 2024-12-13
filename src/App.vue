<script>
import Category from './components/Category.vue';
import MenuComponent from './components/Menu.vue';
import Promotion from './components/Promotion.vue';
import axios from 'axios';
import ProductComponent from './components/Product.vue';

export default {
  components: {
    Category,
    MenuComponent,
    Promotion,
    ProductComponent,
  },

  data(){
    return{
      categories: [
        // { name: "Cake & Milk", items:14, image:"src/assets/image/burger.png"},
        // { name: "Peach", items: 17, image: "src/assets/image/peach.png" },
        // { name: "Organic Kiwi", items: 21, image: "src/assets/image/kiwi.png" },
        // { name: "Red Apple", items: 68, image: "src/assets/image/redapple.png" },
        // { name: "Snack", items: 34, image: "src/assets/image/cereal.png" },
        // { name: "Black Plum", items: 25, image: "src/assets/image/blackplum.png" },
        // { name: "Vegetables", items: 65, image: "src/assets/image/vegetable.png" },
        // { name: "Headphone", items: 33, image: "src/assets/image/headset.png" },
        // { name: "Cake & Milk", items: 54, image:"src/assets/image/snack.png"},
        // { name: "Orange", items: 63, image: "src/assets/image/orange.png" },
      ],

      promotions:[
        // { text: "Everyday Fresh & Clean with Our Products", image: "src/assets/image/onion.jpg" },
        // { text: "Make your Breakfast Healthy and Easy", image: "src/assets/image/juice.jpg" },
        // { text: "The Best Organic Products Online", image: "src/assets/image/bvegetable.jpg" },
      ],

      // products:[
      // {
      // name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      // brand: "Hodo Foods",
      // weight:"500 grams", 
      // description:"Seeds of Change Organic Quinaa,Brown,& red Rice", 
      // price:"$2.51", 
      // originalPrice:"$2.80", 
      // rating:"4.0",
      // badge:"17%", 
      // badgeClass:'discount',
      // addToCart: false,
      // image:"src/assets/image/Mango.jpg"}
      // ],
    };
  },
  methods: {
      async getCategories() {
        const response = await axios.get('http://localhost:3001/api/categories')
        const categories = response.data;
        this.categories =categories;
      },
      async getPromotions() {
        const responsePromotion = await axios.get('http://localhost:3001/api/promotions');
        const promotions = responsePromotion.data;
        this.promotions = promotions;
      },
    },
    async mounted() {
      this.getCategories();
      this.getPromotions();
    }
};
</script>

<template>
  <div class="app">

    <div class="container">
      <div class="Featured1">
        <h2>Featured Categories</h2>
      </div>

      <div class="Featured2">
       <MenuComponent
        :categories="['All','Milk&Daires','Coffes & Teas','Pet Foods','Meats','Vegetables','Fruits']"
        :items="menuItems"
        @category-selected="onCategorySelected"
       />
      </div>
    </div>

    <div class="con1">
      <Category
       v-for="(category, index) in categories" 
       :key="index" 
       :image="category.image"
       :color="category.color"
       :productCount="category.productCount"
       :name="category.name"/>
    </div>

    <div class="con2">
      <Promotion  
      v-for="(promotion, index) in promotions" 
      :key="index"
      :url="promotion.url"
      :image="promotion.image"
      :color="promotion.color"
      :buttonColor="promotion.buttonColor"
      :title="promotion.title"/>
    </div>

    <div class="container">
      <div class="Featured1">
        <h2>Popular Products</h2>
      </div>
      <div class="Featured2">
       <MenuComponent
        :categories="['All','Milk&Daires','Coffes & Teas','Pet Foods','Meats','Vegetables','Fruits']"
        :items="menuItems"
        @category-selected="onCategorySelected"
       />
      </div>
    </div>

    <div class="con3">
      <ProductComponent :products="products"/>
    </div>
    
  </div>
</template>

<style scoped>
.app{
    width: 90%;
    height: auto;
    background-color: rgb(186, 186, 186);
    padding: 1rem;
    font-family: Arial, sans-serif;
}
.container{
    width: auto;
    height: 100px;
    display: flex;
    justify-content:start;
}
.Featured1{
    width: 60%;
    height: 100%;
}
.Featured2{
    width: 30%;
    height: 100%;
}
.con1{
  width: auto;
  height: auto;
  margin-top: 20px;
  padding: 15px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.con2{
  width: auto;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap:20px;
}
.con3{
  width: auto;
  height: auto;
}
</style>
