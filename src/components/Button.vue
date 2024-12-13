<template>
<button class="shop-button">
    {{ buttonText }} <i class="bi bi-arrow-right"></i>
</button>
</template>

<style scoped>
.shop-button {
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  font-size: 16px;
  background-color: #5cb85c;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 3%;
}
.shop-button:hover {
  background-color: rgb(231, 231, 108);
}
</style>

<script>
export default{
    props:{
        buttonText:{
            type:String,
            Required:true,
        },
    },
}
</script>