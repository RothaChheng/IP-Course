<script>
import HeaderComponent from './components/Header.vue';
import MenuComponent from './components/Menu.vue';
import FooterComponent from './components/Footer.vue';

export default {
  components:{
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  },
};
</script>

<template>
  <div>
    <HeaderComponent />

    <div class="content">
      <MenuComponent />
      <router-view class="page-content"></router-view>
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  height: 400px;
  width: 80rem;
  border-left: 1px solid black;
  border-right: 1px solid black;

}
.page-content {
  flex: 1;
  padding: 20px;
}
</style>


