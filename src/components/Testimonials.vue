<template>
  <div id="testimonials" class="testimonials py-50">
    <div class="container">
      <div class="position-relative" data-aos="fade-up">
        <h2 class="main-title">قالوا عن تكنو مصر</h2>
        <p class="text-center">
          نسعد دائما بالتواصل مع عملائنا بشكل مستمر للتعرف على آراءهم فى مستوى
          خدماتنا
        </p>
      </div>
      <div class="slider-container pt-3">
        <carousel v-bind="settings">
          <slide v-for="slide in 10" :key="slide">
            <testimonials-card />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import TestimonialsCard from './TestimonialsCard.vue'
export default {
  components: {
    Carousel,
    Slide,
    TestimonialsCard,
  },
  data() {
    return {
      settings: {
        autoplay: 2000,
        itemsToShow: 1,
        // wrapAround: true,
        snapAlign: 'center',
        breakpoints: {
          992: {
            itemsToShow: 2,
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
}
</style>
