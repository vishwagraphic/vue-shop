<template>
  <div class="container my-3">
    <b-alert variant="secondary" show class="clearfix"><span class="dib py-1 font-weight-bold">Yedi Total Package XL Air Fryer</span></b-alert>
      <b-container>
        <b-row>
          <b-col cols="5">
            <img width="350" height="auto" src="https://lh3.googleusercontent.com/KCXDdVAYHFLgqKa3je1tPSTh7LxVKAgiMWvANb7lg-aLOdEhro4Twgiq8qaBNiAerm21ZSeDzZCX8y4uQOjo4R7rpsmuG7UANRDCrOL1r4hp1P6bmosMQaFkMLGk8POXxd9S9TDtPvmbiBRqwekahip3KPlUJl4EdBtqrYvBa0qzMiLchtIalVLJNW_tRJvJucDlrd5Pfkk-ghWcdCDF9_li6sLX-lHQM7X-mBGvXLvBu6fQOGpbsfrUqqKdmOGcdOiZtknQH9fXwSk81aobbfVv-WlFAtnm0PbYcT1TFfnBBjj0vNsbZLD22oVEMJ4eEXcVVp4Js_pSViyA-cQN-xT3FfACuWpts1zvccMhvxt-5wtlEkBAfWy4LhCZqMZe5DWKHU7lXoOru8WFGIp1FON_OADUZbnGlofbxshxMjkv0fZXe6Mq27ryhvXGAoUKGXLfk5t7a07U_aqaSYAVnoXoKLUMjymiUBeBLmYOiIrs0Bu6hLDRjyF2QUq5j2wShyR_UZT13UZs6HrW5rM_-Lnc-0SBSUWFp1m-Q_2GNcDE_wx9reQeKciLMo0dtvk_1Ii-24ogX16-Ec2ctnUURmDT_3qwQL9lXLAeRfLkdxes9aPwZNyVnjhhSiu5P9mYuAX3D9nlal2SbH_5pGrO5e0iv5fRHTE=s679-no" />
          </b-col>
          <b-col cols="5">
            <div>
              <h5>Yedi Total Package XL Air Fryer, Deluxe Accessory Kit, 100 Recipes Included, Cooking Basket Divider, 2Yr Warranty. Healthy Air Crisper Oiless Oven (5.8 Qt)</h5>
              <p>by YEDI HOUSEWARE</p>
              <p><star-rating v-model="rating" v-bind:star-size=15></star-rating><span>575 customer reviews</span></p>
              <ul class="px-0">
                <li>TOTAL PACKAGE XL AIR FRYER: The Yedi Houseware 5.8 Quart XL Air Fryer comes with everything you need and can feed the entire family! On the digital touch screen you can set your desired cooking time and temperature when making food. Or select from the built-in smart programs: fries, chops, shrimp, baked goods, chicken, steak and fish.</li>
                <li>INCLUDES DELUXE ACCESSORY COOKING KIT: A Divider for the cooking basket, 50 perforated parchment steaming papers, an 8 inch cake carrel, an 8 inch pizza pan, multi-purpose rack with 3 stainless steel skewers, cupcake silicone pan, and rubber mat.</li>
                <li>INCLUDES RECIPES: Included is a Recipe Book that has 100 Air Fryer recipes. The Yedi Houseware mobile app for iOS and Android and the Yedi Houseware Appliances website has new Air Fryer recipes & content uploaded every week! Also comes with a COOKING TIME TABLE.</li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <p>Get it Thu, May 9 - Tue, May 14 if you choose FREE Shipping at checkout.</p>
            <p>Get it Tue, May 7 if you order within 31 hrs 33 mins and choose paid shipping at checkout.</p>
            <p>In Stock</p>
            <p>Qty </p>
            <b-button block variant="primary">Add to cart</b-button>
            <b-button block variant="danger">Buy now</b-button><br />
            <p>Sold by YEDI HOUSEWARE APPLIANCES</p>
            <p>Item arrives in packaging that reveals what's inside. To hide it, choose Ship in Amazon packaging at checkout.</p>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'Productdetail',
  data () {
    return {
      rating: 3
    }
  },
  components: {
    StarRating
  }
}
</script>
