<template>
    <div>
        <div class="container my-4" v-bind:class="{ loadingicon : isLoading }">
            <div class="text-center loading">
                <b-spinner label="Spinning"></b-spinner>
            </div>
            <b-alert show class="clearfix"><span class="dib py-1 font-weight-bold">{{title}}</span>
            </b-alert>
            <b-container class="tc">
                <b-row>
                    <b-col v-for="product in products" v-bind:key="product.id">
                        <Tile v-bind:product="product"></Tile>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import Tile from './common/Tile.vue'
import productsService from './service/productsService'
export default {
  name: 'Products',
  components: {
    Tile
  },
  data () {
    return {
      products: [],
      title: '',
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    this.getProducts(this.$route.query.type)
  },
  methods: {
    async getProducts (type) {
      const response = await productsService.getProducts(type)
      const filteredResponse = response.data.filter((product, i) => {
        if (product.type === undefined) {
          return product
        } else {
          this.title = product.type
        }
      })
      this.isLoading = false
      this.products = filteredResponse
    }
  }
}
</script>
