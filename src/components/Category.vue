<script>
export default{
    props:{
        // categories: Array,
        image: String,
        color:String,
        productCount: Number,
        name:String
    },
    // methods:{
    //     getBackgroundColor(index){
    //         const colors = [
    //         "#E0FFE0", // Light green
    //         "#FFF0D0", // Light yellow
    //         "#E0FFF5", // Mint
    //         "#FFE0E0", // Light pink
    //         "#FFF8E0", // Pale yellow
    //         "#F8E0FF", // Lavender
    //         "#E0F5FF", // Light blue
    //         "#FFF2E0", // Cream
    //         "#FFFEE0", // Pale beige
    //         ];
    //         return colors[index % colors.length];
    //     },
    // },
};
</script>

<!-- <template>
    <div class="category">
        <div v-for="(category, index) in categories" 
            :key="index" 
            :style="{ backgroundColor: getBackgroundColor(index) }"
            class="category-card">

            <img :src="image" :alt="category.image" />
            <h3>{{ name }}</h3>
            <p>{{ productCount }} items</p>
        </div>
    </div>
</template> -->
<template>
    <div class="category">
        <div :style="{ backgroundColor: color }" class="category-card">

            <img :src="image" :alt="image" />
            <h3>{{ name }}</h3>
            <p>{{ productCount }} items</p>
        </div>
    </div>
</template>

<style scoped>
.category{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.category-card{
    border-radius: 10px;
    padding: 10px;
    width: 120px;
    height: auto;
    text-align: center;
}
.category-card img{
    width: 100px;
    height: 80px;
    object-fit: cover;
}
.category-card:hover{
    transform: scale(1.05);
}
h3{
    font-size: 16px;
    color: #333;
}
p{
    font-size: 14px;
    color: #555;
}
</style>
