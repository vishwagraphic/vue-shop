<template>
    <b-row class="border border-top-0 border-left-0 border-right-0 mb-4 pb-3">
        <b-col cols="3">
            <img v-bind:src="product.imageurls" height="70px" width="auto" alt="image" @click="onClick" />
        </b-col>
        <b-col cols="4">
            <ul class="ltn">
               <li class="fb pointer hover" style="" @click="onClick" > {{product.name}} </li>
               <li>{{product.brand}}</li>
           </ul>
        </b-col>
        <b-col>
               <div class="font-weight-bold text-danger mt-3 text-right">${{product.prices_amountmin}}</div>
        </b-col>
        <b-col>
            <div class="mt-3" style="width:80px">
                <input type="text" class="w-100 text-center" v-model="qty" :id="product.productid"/>
            </div>
        </b-col>
        <b-col>
            <div class="text-info mt-3">
                <b-button variant="danger" @click="onDelete">Delete</b-button>
            </div>
        </b-col>
    </b-row>
</template>
<script>
export default {
  name: 'CartTile',
  props: ['product'],
  data () {
    return {
      qty: this.product.quantity
    }
  },
  watch: {
    qty: function (val, oldval) {
      let qty = val - oldval
      this.qty = val
      let pid = this.$props.product.productid
      this.$parent.$parent.cartDetails(qty, pid)
    }
  },
  methods: {
    onDelete () {
      let qty = 0 - this.qty
      let pid = this.$props.product.productid
      this.$parent.$parent.cartDetails(qty, pid)
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
    onClick (evt) {
      evt.preventDefault()
      this.$router.push('/product/' + this.$props.product.productid)
    }
    /* onInputChange (evt) {
      let qty = parseInt(evt.target.value) - parseInt(this.$props.product.quantity)
      let pid = evt.target.id
      console.log(qty, parseInt(evt.target.value), parseInt(this.$props.product.quantity))
      this.$parent.$parent.cartDetails(qty, pid)
    } */
  }
}
</script>
