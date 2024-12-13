<script>
export default{
    name:"Product",
    data(){
        return{
            products:[
                {
                    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                    brand: "Hodo Foods",
                    weight:"500 grams",  
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"17%", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/Mango.jpg",
                },
                {
                    name: "All Naturaal Italian-Style Chicken Meatballs",
                    brand: "Hodo Foods",
                    weight:"500 grams", 
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"Hot", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/Corn.png",
                },
                {
                    name: "Angie's Boomchickapp Sweet & Salty Kettle Corn",
                    brand: "Hodo Foods",
                    weight:"500 grams",  
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"Sale", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/small orange.png",
                },
                {
                    name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
                    brand: "Hodo Foods",
                    weight:"500 grams", 
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"17%", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/Chilie.png",
                },
                {
                    name: "Blue Diamond Almonds Lightly Salted Vegetables",
                    brand: "Hodo Foods",
                    weight:"500 grams", 
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"17%", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/lemon.png",
                },
                {
                    name: "Chobani Complete Vanila Greek Yogurt",
                    brand: "Hodo Foods",
                    weight:"500 grams", 
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"17%", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/chicken.png",
                },
                {
                    name: "Canada Dry Ginger Ale-2L Bottle-200ml-400g ",
                    brand: "Hodo Foods",
                    weight:"500 grams",  
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"Sale", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/Fish.png",
                },
                {
                    name: "Encore Seafoods Stuffed Alaskan Salmon",
                    brand: "Hodo Foods",
                    weight:"500 grams", 
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"17%", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/steak.png",
                },
                {
                    name: "Gorton's Beer Battered Fish Fillets with soft paper",
                    brand: "Hodo Foods",
                    weight:"500 grams", 
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"17%", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/mushroom.png",
                },
                {
                    name: "haagen-Dazs Caramel Cone Ice Cream Ketchup",
                    brand: "Hodo Foods",
                    weight:"500 grams", 
                    price:"$2.51", 
                    originalPrice:"$2.80", 
                    rating:"4.0",
                    badge:"Hot", 
                    badgeClass:'discount',
                    addToCart: false,
                    image:"src/assets/image/Beetroot.png",
                },
            ],
        };
    },
};
</script>

<template>
    <div class="product">
        <div v-for="(product, index) in products" :key="index" class="product-card">
            <!--Badge -->
            <div v-if="product.badge" class="badge" :class="product.badgeClass">
                {{ product.badge }}
            </div>
            <!--Product-image -->
            <img :src="product.image" :alt="product.name" class="product-image"/>

            <!--Product Detail -->
            <div class="product-detail">
                <p class="brand">{{ product.brand }}</p>
                <h3 class="name">{{ product.name }}</h3>
                <p class="weight">{{ product.weight }}</p>

                <!--Rating -->
                <div class="rating">
                    <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                    <span class="score">({{ product.rating }})</span>
                </div>

                <!-- Pricing -->
                <div class="pricing">
                    <span class="price">{{ product.price }}</span>
                    <span class="original-price" v-if="product.originalPrice">{{ product.originalPrice }}</span>
                </div>

                <!--Add to cart & Quantity-->
                <div class="card-footer">
                    <div class="quantity">
                        <select>
                            <option v-for="n in 10" :key="n" >{{ n }}</option>
                        </select>
                    </div>
                    <button class="add-to-cart">Add +</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap:35px;
    padding: 20px;
}
.product-card{
    border: 1px solid rgb(139, 139, 139);
    border-radius: 8px;
    padding: 15px;
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.badge{
    position: absolute;
    top:10px;
    left:10px;
    padding: 5px 10px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    border-radius: 12px;
}
.badge.hot{
    background: red;
}
.badge.discount{
    background: green;
}

.product-image{
    width:100%;
    height: 150px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 10px;
}
.product-detail{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.brand{
    font-size: 0.9rem;
    color: gray; 
}
.name{
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem;
}
.weight{
    font-size: 0.9rem;
    color:#555;
}
.ratng{
    display: flex;
    align-items: center;
    margin: 0.5rem;
}
.stars{
    color:#ffc107;
}
.score{
    font-size: 0.9rem;
    color: #555555ba;
    margin-left: 0.5rem;
}
.pricing {
  margin: 10px;
  display: flex;
  align-items: baseline;
  gap:10px;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
}

.original-price {
  font-size: 0.9rem;
  text-decoration: line-through;
  color: #888;
}
.card-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}
.quantity select{
    padding: 5px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
}
.add-to-cart {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
}
.add-to-cart:hover {
  background-color: #2980b9;
}
/* .add-to-cart button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.quantity select {
  padding: 0.5rem;
  border: 1px solid #a5a5a5;
  border-radius: 4px;
} */
</style>

