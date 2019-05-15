<template>
    <b-card class="mb-2">
        <p class="img-container" style="height:130px; width: 190px">
            <img v-bind:src="product.imageurls" height="100%" width="auto" alt="image" />
        </p>
        <p class="my-2 d-block text-left font-weight-bold text-danger">
            {{product.brand}}
        </p>
        <b-card-text class="tl">
           <ul class="ltn">
               <li class="fb" style="height:80px; line-height:20px; overflow-y:hidden"> {{product.name}} </li>
               <li><star-rating v-model="product.rating" v-bind:star-size=15></star-rating></li>
               <li>${{product.prices_amountmin}}</li>
           </ul>
        </b-card-text>
        <b-button variant="primary"><router-link to="/product" class="text-white">Add to cart</router-link></b-button>
    </b-card>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'Tile',
  props: ['product'],
  mounted () {
    this.imgUrlextract()
  },
  methods: {
    imgUrlextract () {
      let product = this.product
      let imgArr = []
      imgArr = product.imageurls.split(',')
      for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].indexOf('bbystatic') > -1) {
          product.imageurls = imgArr[i]
        }
      }
    }
  },
  components: {
    StarRating
  }
}
</script>
