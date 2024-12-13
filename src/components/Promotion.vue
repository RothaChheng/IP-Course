<script>
import Button from './Button.vue';
export default{
  name:"Promotion",
    props:{
        url: String,
        image: String,
        color: String,
        buttonColor: String,
        title: String,
    },

    components:{
      Button,
    }
};
</script>

<template>
<div class="promotion">
    <div  :style="{backgroundColor: color}" class="promotion-card">
      <img :src="image" :alt="text"/>
      <h3>{{ title }}</h3>
      <Button @click="shopNow(Promotion)" :buttonText="'Shop Now'"/>
    </div>
</div>
</template>

<style scoped>
.promotion{
    display: flex;
    gap:20px;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
}
.promotion-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  height: 20rem;
  position: relative;
}
.promotion-card:hover {
  transform: translateY(-5px); 
}
h3{
  position: absolute;
  left:3%;
  top:10%;
  width: 200px;
  color: #253D4E;
}

.promotion-card img {
  width: 100%;
  height: 100%;
  object-fit:cover;
  background-color: gray;
}
</style>

