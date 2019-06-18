<template>
    <div>
        <div>
            <Mycarousel></Mycarousel>
        </div>
        <div class="container my-4">
            <b-alert show class="clearfix"><span class="dib py-1 font-weight-bold">Deal of the Day</span>
                <b-button class="fr di" variant="danger"><router-link :to="{path:'/products', query: {type: 'dealProducts'}}" class="text-white">Show All</router-link></b-button>
            </b-alert>
            <b-container class="tc">
                <b-row>
                    <b-col v-for="product in dealProducts" v-bind:key="product.id">
                        <Tile v-bind:product="product"></Tile>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="container mt">
            <b-alert variant="success" show class="clearfix"><span class="dib py-1 font-weight-bold">Low-cost items</span>
            <b-button class="fr di" variant="danger"><router-link :to="{path:'/products', query: {type: 'lowCostProducts'}}" class="text-white">Show All</router-link></b-button></b-alert>
            <b-container class="tc">
                <b-row>
                    <b-col v-for="product in lowCostProducts" v-bind:key="product.id" >
                        <Tile v-bind:product="product" ></Tile>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import Mycarousel from './common/MyCarousel.vue'
import Tile from './common/Tile.vue'
import dealService from './service/DealProductsService'
import lowCostProductService from './service/LowCostProductService'
export default {
  name: 'Home',
  components: {
    Mycarousel,
    Tile
  },
  data () {
    return {
      dealProducts: [],
      lowCostProducts: []
    }
  },
  mounted () {
    this.getDeals()
    this.getLowCost()
  },
  methods: {
    async getDeals () {
      const response = await dealService.getDeals()
      this.dealProducts = response.data
    },
    async getLowCost () {
      const response = await lowCostProductService.getLowCost()
      this.lowCostProducts = response.data
    }
  }
}
</script>
