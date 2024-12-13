<template>
    <div class="menu">
      <div class="menu-header">
        <!-- <h2>{{ title }}</h2> -->
        <ul class="categories">
          <li
            v-for="(category, index) in categories"
            :key="index"
            @click="onCategoryClick(category)"
            :class="{ active: selectedCategory === category }"
          >
            {{ category }}
          </li>
        </ul>
      </div>
      <div class="menu-items">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="menu-item"
        >
          <img :src="item.image" :alt="item.name" />
          <p>{{ item.name }}</p>
          <small>{{ item.time }}</small>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
        selectedCategory: "All",
      };
    },
    methods: {
      onCategoryClick(category) {
        this.selectedCategory = category;
        this.$emit("category-selected", category);
      },
    },
  };
  </script>
  
  <style scoped>
  .menu {
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
  }
  .menu-items {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }
  .menu-item {
    text-align: center;
  }
  .menu-item img {
    width: 50px;
    height: 50px;
  }
  </style>
  