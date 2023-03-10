const product_item = {
    props: ['prod'],
    template:
       `<div class="goods-item">
          <img class="img-goods" width="200" height="135" :src="prod.image" :alt="prod.product_name">
          <div class="wrap-price">
               <h3 class="product-name">{{ prod.product_name }}</h3>
               <p class="product-price">{{ prod.price }}$</p>
               <button class="btn-add" type="button" @click="$root.$refs.basket.addProduct(prod)">В корзину</button>
            
          </div>
       </div>`
}


const product_list = {
    components: {product_item},
    data() {
      return {
          goodsJson: [],
          allProducts: []
      }  
    },

    methods: {
        filterProduct(item) {
            const tegExp = new RegExp(item, 'i');
            this.allProducts = this.goodsJson.filter(el => tegExp.test(el.product_name));
        }
    },
    
    mounted() {
        this.$parent.getJson('jsonFile/local.json')
           .then(items => {
               for (const item of items) {
                   this.goodsJson.push(item);
                   this.allProducts.push(item);
               }
           })
    },
    
    template: 
       `<main class="main-head">
            <div class="goods-list">
                <product_item v-for="product of allProducts" :prod="product"></product_item>
            </div>
       </main>`
}