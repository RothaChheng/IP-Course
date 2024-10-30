<template>
    <div id="app">
      <MainGrid />
      <Button1 />
    </div>
  </template>

  <script>
  import MainGrid from './components/MainGrid.vue';
  import Button1 from "./components/Button.vue";
  
  export default {
    name: "ParentComponent",
    components: {
      MainGrid,
      Button1
    },
  };
  </script>
