import {defineStore} from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore ('product', {
    state: () => ({
        groups:[],
        promotions:[],
        categories:[],
        products:[]
    }),

    getters: {
        getCategoriesByGroup: (state) => {
          return (groupName) => state.categories.filter((category) => category.groupName === groupName);
        },
        getProductsByGroup: (state) => {
          return (groupName) => state.products.filter((product) => product.groupName === groupName);
        },
        getProductsByCategory: (state) => {
          return (categoryId) => state.products.filter((product) => product.categoryId === categoryId);
        },
        getPopularProducts: (state) => {
          return state.products.filter((product) => product.countSold > 10);
        },
      },

    actions: {
        async fectchGroups(){
            try {
                const response = await axios.get('http://localhost:3001/api/groups');
                console.log('Groups fetched:', response.data);
                this.groups = response.data;
            } catch (error){
                console.error('Failed to fectch groups:', error.response?.data || error.message);
            }
        },
        async fetchPromotions(){
            try{
                const response = await axios.get(' http://localhost:3001/api/promotions');
                console.log('Promotions fetched:', response.data);
                this.promotions = response.data;
            } catch (error){
                console.error('Failed to fetch promotion:', error.response?.data || error.message);
            }
        },
        async fetchCategories(){
            try{
                const response = await axios.get('http://localhost:3001/api/categories');
                console.log('Categories fetched:', response.data);
                this.categories = response.data;
            } catch (error){
                console.error('Failed to fetch categories:',error.response?.data || error.message);
            }
        },
        async fetchProducts() {
            try {
              const response = await axios.get('http://localhost:3001/api/products');
              console.log('Products fetched:', response.data);
              this.products = response.data;
            } catch (error) {
              console.error('Failed to fetch products:', error.response?.data || error.message);
            }
        },
    }
});