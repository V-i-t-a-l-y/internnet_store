const cart_item = {
    props: ['cart'],
    template:
    `<div class="merch-item">
       <img class="merch-product" :src= cart.image :alt="cart.product_name">
       <div class="merch-price">
         <h4 class="merch-name">{{ cart.product_name }}</h4>
         <p class="merch-quantity">Quantity: <span class="merch-span">{{ cart.quantity }}</span></p>
         <p class="price-per-piece"><span>$</span>{{ cart.price }}<span>each</span></p>
       </div>
       <div class="merch-right-block">
          <p class="basket-price-product">$<span class="bskt-price-span">{{ cart.price * cart.quantity }}</span></p>
          <div class="wrap-del-btn">
              <button class="del-btn" @click="$parent.removeProduct(cart)">x</button>
          </div>
      </div>
    </div>`
}



const cart_list = {
    components: {cart_item},
    data() {
        return {
            carts: [],
            show: false
        }
    },

    methods: {
        addProduct(item) {
            const find = this.carts.find(el => el.id_product === item.id_product);
            if (find) {
                find.quantity++;
            } else {
                this.carts.push(item);
            }
        },

        removeProduct(item) {
            const find = this.carts.find(el => el.id_product === item.id_product);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
                this.carts.splice(this.carts.indexOf(find), 1);
            }
        }
    },

    mounted() {
        this.$parent.getJson('jsonFile/external.json')
           .then(items => {
               for (const content of items.contents) {
                   this.carts.push(content);
               }
           })
    },

    template:
    `<div class="head-right">
      <button @click="show=!show" class="btn-card">Корзина</button>
      <div v-show="show" class="basket-products">
        <cart_item  v-for="item of carts" :cart="item"></cart_item>
        <p v-if="!carts.length" class="text-cart">Корзина пуста</p>        
      </div>
    </div>`
}