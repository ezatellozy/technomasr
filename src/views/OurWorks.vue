<template>
  <div class="our-works py-5">
    <div class="container">
      <div class="position-relative">
        <h2 class="main-title">أعمالنا</h2>
        <p class="text-center">
          نملك الأفكار الإبداعية التى تستطيع أن توفر لك أفضل الخدمات التقنية
          لإنشاء موقعك الإلكترونى أو برنامجك الإدارى أو تطبيقات الهواتف وكذلك
          التسويق الرقمى لنشاطك التجارى
        </p>
      </div>
      <div class="content mt-5">
        <div class="row">
          <div class="col-sm-6 col-md-4 mb-2" v-for="n in 16" :key="n">
            <our-work-card />
          </div>
          <div class="text-center mt-5">
            <b-spinner></b-spinner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const OurWorkCard = defineAsyncComponent(() =>
  import('@/components/OurWorkCard.vue'),
)
// import OurWorkCard from '@/components/OurWorkCard.vue'
export default {
  components: {
    OurWorkCard,
  },
}
</script>

<style></style>
