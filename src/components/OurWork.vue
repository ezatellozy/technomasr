<template>
  <div id="our-work" class="our-work overlay py-50">
    <div class="container">
      <h2 class="main-title">أعمالنا</h2>
      <div class="slider-container">
        <carousel v-bind="settings">
          <slide v-for="slide in 10" :key="slide">
            <slider-card />
          </slide>
        </carousel>
      </div>
      <div class="text-center mt-5">
        <router-link to="/" class="btn btn-primary">عرض المزيد</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import SliderCard from './OurWorkCard.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    SliderCard,
  },
  data() {
    return {
      settings: {
        autoplay: 2000,
        itemsToShow: 2,
        // wrapAround: true,
        snapAlign: 'center',
        breakpoints: {
          768: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
          1200: {
            itemsToShow: 5,
            snapAlign: 'center',
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.our-work {
  background-image: url('@/assets/services.jpg');
  background-size: cover;
  background-position: center center;
  .slider-container {
    .flip-card {
      margin: 0 10px;
    }
  }
}
</style>
