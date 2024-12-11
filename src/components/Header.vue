<template>
<header>
  <nav>
    <router-link to="/page1" class="nav-link">Page 1</router-link>
    <router-link to="/page2" class="nav-link">Page 2</router-link>
    <router-link to="/page3" class="nav-link">Page 3</router-link>
  </nav>
</header>
</template>

<style scoped>
.nav-link{
  margin: 0 10px;
  color: black;
  text-decoration: none;
}
.nav-link.router-link-active{
  color: red;
  font-weight: bold;
}
  /* .header {
    padding: 20px;
    width: 800px;
    margin-right: 1000px;
  }
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .categories {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
  }
  .categories li {
    cursor: pointer;
  }
  .categories li.active {
    font-weight: bold;
    color: red;
  } */
</style>

<!-- <script>
export default{
    name: "MenuComponent",
    props: {
      title: {
        type: String,
        // default: "Menu Title", 
      },
      categories: {
        type: Array,
        default: () => [],
      },
      items: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        selectedCategory: "Page1",
      };
    },
    methods: {
      onCategoryClick(category) {
        this.selectedCategory = category;
        this.$emit("category-selected", category);
      },
    },
};
</script> -->