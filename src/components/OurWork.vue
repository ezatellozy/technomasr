<template>
  <div id="our-work" class="our-work py-50">
    <div class="container">
      <div class="position-relative mb-4" data-aos="fade-in">
        <h2 class="main-title">أعمالنا</h2>
        <p class="text-center">
          نملك الأفكار الإبداعية التى تستطيع أن توفر لك أفضل الخدمات التقنية
          لإنشاء موقعك الإلكترونى أو برنامجك الإدارى أو تطبيقات الهواتف وكذلك
          التسويق الرقمى لنشاطك التجارى
        </p>
      </div>

      <div class="content">
        <slider-card v-for="n in 6" :key="n" />
      </div>

      <div class="text-center mt-5">
        <router-link to="/" class="btn btn-primary">عرض المزيد</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes

import SliderCard from './OurWorkCard.vue'

export default {
  name: 'App',
  components: {
    SliderCard,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.our-work {
  // background-image: url('@/assets/services.jpg');
  // background-size: cover;
  // background-position: center center;
  .container {
    .content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 10px;
    }
  }
}
</style>
