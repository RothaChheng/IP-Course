<template>
<div class="Header">
  <nav>
    <router-link to="/page1" class="nav-link">Page 1</router-link>
    <router-link to="/page2" class="nav-link">Page 2</router-link>
    <router-link to="/page3" class="nav-link">Page 3</router-link>
  </nav>
</div>
</template>

<style scoped>
.Header{
  text-align: center;
  width: 80rem;
  border: 1px solid black;
  height: 40px;
  padding: 10px;
}
.nav-link{
  margin:20px;
  color: black;
  text-decoration: none;
}
.nav-link.router-link-active{
  color: red;
  font-weight: bold;
}

</style>

