<template>
    <div id="app">
      <MainGrid />
      <Button1 />
    </div>
  </template>

  <script>
  // import axis from 'axios';
  import MainGrid from './components/MainGrid.vue';
  import btn1 from "./components/Button.vue";
  import axios from 'axios';

  export default {
    name: "ParentComponent",
    components: {
      MainGrid,
      btn1
    },
    data() {
        return {
            promotions: [],
            categories: []
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
