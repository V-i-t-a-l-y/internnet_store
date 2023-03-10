const filter_product = {
    data() {
        return{
            search: ''
        }
    },

    template:
    `<div class="head-mid">
          <form @submit.prevent="$parent.$refs.goods.filterProduct(search)" class="form">
            <input v-model="search" type="text" class="search-input" placeholder="Поиск...">
              <button type="submit" class="search-icon">
                <i class="fas fa-search fa-lg"></i>
              </button>
          </form>
    </div>`
}