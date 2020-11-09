import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
    products: mock,
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
}



new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')
