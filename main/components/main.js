const app = new Vue ({
    el: '#app',
    components: {product_list, cart_list, filter_product},
    methods: {
        getJson(url) {
            return fetch(url)
               .then(txt => txt.json())
               .catch(err => {
                   console.log(err);
               })
        }
    }
})