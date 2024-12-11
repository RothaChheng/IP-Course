<template>
    <div class="layout">
      <Header />
      <div class="content">
        <Menu />
        <main>
          <router-view />
        </main>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import Menu from './Menu.vue';
  import Footer from './Footer.vue';
  
  export default {
    components: {
      Header,
      Menu,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    display: flex;
    flex: 1;
  }
  main {
    flex: 1;
    padding: 20px;
  }
  aside {
    width: 200px;
    background: #f4f4f4;
    padding: 20px;
  }
  </style>
  