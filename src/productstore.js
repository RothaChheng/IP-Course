import {defineStore} from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore ('product', {
    state: () => ({
        groups:[],
        promotions:[],
        categories:[],
        products:[]
    })
})