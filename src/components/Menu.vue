<template>
<div class="Menu">
    <ul>
        <li>
            <router-link to="/page1/section1">Section 1</router-link>
        </li>
        <li>
            <router-link to="/page1/section2">Section 2</router-link>
        </li>
        <li>
            <router-link to="/page1/section3">Section 3</router-link>
        </li>
        <li>
            <router-link to="/page1/section4">Section 4</router-link>
        </li>
    </ul>
</div>
</template>

<style scoped>
.Menu{
    padding: 20px;
    background-color: #f5f5f5;
}
ul{
    list-style: none;
    padding: 0;
}
li{
    margin: 15px 0;
    cursor: pointer;
    font-size: 15px;
}
li a {
  text-decoration: none;
  color: #000; 
  transition: color 0.3s; 
}

li a:hover {
  color: #007bff; 
}
</style>


