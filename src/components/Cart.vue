<template>
  <div class="container my-3" v-bind:class="{ loadingicon : isLoading }">
    <div class="text-center loading">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <b-alert variant="secondary" show class="clearfix"><span class="dib py-1 font-weight-bold">Your Cart Details</span></b-alert>
      <b-container v-for="product in cartProducts" v-bind:key="product.productid">
          <CartTile v-bind:product="product"></CartTile>
        <!-- <b-row v-for="product in cartProducts" v-bind:key="product.productid">
          <b-col cols="3">
            <img v-bind:src="product.imageurls" height="100px" width="auto" alt="image" />
          </b-col>
          <b-col cols="4">
            <ul class="ltn">
               <li class="fb pointer hover" style="" > {{product.name}} </li>
               <li>{{product.brand}}</li>
           </ul>
          </b-col>
          <b-col>
               <div class="font-weight-bold text-danger">${{product.prices_amountmin}}</div>
          </b-col>
           <b-col>
              <div class="">
                <input type="text" v-model="product.quantity" :id="product.productid" @change="onInputChange" />
              </div>
              <div class="text-info">Delete</div>
          </b-col>
        </b-row> -->
      </b-container>
  </div>
</template>
<script>
import CartService from './service/CartService'
import CartTile from './common/CartTile.vue'
export default {
  name: 'Cart',
  components: {
    CartTile
  },
  data () {
    return {
      ids: [],
      cartProducts: [],
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    this.getProduct()
  },
  methods: {
    /* onInputChange (evt) {
      let qty = evt.target.value - product.quantity
      let pid = evt.target.id
      this.$parent.cartDetails(qty, pid)
    }, */
    async getProduct () {
      // if (this.$parent.cart.idArr !== '') {
      const response = await CartService.GetCartProducts(JSON.parse(localStorage.getItem('cartArr')))
      this.cartProducts = response.data
      this.isLoading = false
      this.cartProducts.forEach((product, i) => {
        let imgArr = []
        imgArr = product.imageurls.split(',')
        for (let i = 0; i < imgArr.length; i++) {
          if (imgArr[i].indexOf('bbystatic') > -1) {
            product.imageurls = imgArr[i]
          }
        }
      })
      // }
    }
  }
}
</script>
