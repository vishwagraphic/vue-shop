<template>
  <div class="container my-3">
    <b-alert variant="secondary" show class="clearfix"><span class="dib py-1 font-weight-bold">{{product.name}}</span></b-alert>
      <b-container>
        <b-row>
          <b-col cols="5">
            <img width="350" height="auto" v-bind:src="product.imageurls" />
          </b-col>
          <b-col cols="5">
            <div>
              <h5>{{product.categories}}</h5>
              <p>by {{product.brand}}</p>
              <p><star-rating v-model="product.rating" v-bind:star-size=15></star-rating><span>575 customer reviews</span></p>
              <ul class="px-0">
                <li>{{product.categories}}</li>
                <li>INCLUDES DELUXE ACCESSORY COOKING KIT: A Divider for the cooking basket, 50 perforated parchment steaming papers, an 8 inch cake carrel, an 8 inch pizza pan, multi-purpose rack with 3 stainless steel skewers, cupcake silicone pan, and rubber mat.</li>
                <li>INCLUDES RECIPES: Included is a Recipe Book that has 100 Air Fryer recipes. The Yedi Houseware mobile app for iOS and Android and the Yedi Houseware Appliances website has new Air Fryer recipes & content uploaded every week! Also comes with a COOKING TIME TABLE.</li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <p>Get it <strong>{{product.freeShipping}}</strong> if you choose FREE Shipping at checkout.</p>
            <p>Get it <strong>{{product.paidShipping}}</strong> if you order within 31 hrs 33 mins and choose paid shipping at checkout.</p>
            <p v-if="product.prices_availability">{{product.prices_availability}}</p>
            <p v-else>Out of Stock</p>
            <p>Qty </p>
            <b-button block variant="primary">Add to cart</b-button>
            <b-button block variant="danger">Buy now</b-button><br />
            <p>Sold by {{product.brand}}</p>
            <p>Item arrives in packaging that reveals what's inside.</p>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
import ProductDetailService from './service/ProductDetailService'
export default {
  name: 'Productdetail',
  data () {
    return {
      rating: 3,
      product: [],
      id: ''
    }
  },
  mounted () {
    let url = window.location.href
    this.id = url.substring(url.lastIndexOf('/') + 1)
    this.getProduct()
  },
  methods: {
    async getProduct () {
      const response = await ProductDetailService.GetProductDetail(this.id)
      let productDet = response.data[0]
      let imgArr = []
      imgArr = productDet.imageurls.split(',')
      for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].indexOf('bbystatic') > -1) {
          productDet.imageurls = imgArr[i]
        }
      }
      productDet.freeShipping = `${this.addDays(new Date(), 4)} - ${this.addDays(new Date(), 8)}`
      productDet.paidShipping = `${this.addDays(new Date(), 2)}`
      this.product = productDet
    },
    addDays (date, days) {
      var result = new Date(date)
      result.setDate(result.getDate() + days)
      result = result.toDateString()
      return result
    }
  },
  components: {
    StarRating
  }
}
</script>
