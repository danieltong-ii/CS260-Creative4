import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios';

new Vue({
    router,
    data: {
        products: [],
        cart: [],
        genres: [{
                id: 1,
                genre: 'Rap',
                image: 'rap.png',
            },
            {
                id: 2,
                genre: 'Pop',
                image: 'pop.png',
            },
            {
                id: 3,
                genre: 'R&B/Soul',
                image: 'soul.png',
            },
            {
                id: 4,
                genre: 'K-Pop',
                image: 'kpop.png',
            },
            {
                id: 5,
                genre: 'Country',
                image: 'country.png',
            },
        ]
    },
    created() {
        this.getItems();
    },
    methods: {
        async getItems() {
            try {
                let response = await axios.get("/api/items");
                this.products = response.data;
                console.log(this.products);
                return true;
            } catch (error) {
                console.log(error);
            }
        }
    },
    render: h => h(App)
}).$mount('#app')
