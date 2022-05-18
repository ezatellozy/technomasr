<template>
  <div class="our-works">
    <div class="top">
      <img src="@/assets/www.png" alt="" />
      <div class="content">
        <div class="container position-relative" data-aos="zoom-in">
          <h2 class="main-title fs-1">أعمالنا</h2>
          <p class="text-center">
            نملك الأفكار الإبداعية التى تستطيع أن توفر لك أفضل الخدمات التقنية
            لإنشاء موقعك الإلكترونى أو برنامجك الإدارى أو تطبيقات الهواتف وكذلك
            التسويق الرقمى لنشاطك التجارى
          </p>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="content mt-5">
        <div class="row">
          <div class="col-sm-6 col-md-4 mb-2" v-for="n in 16" :key="n">
            <our-work-card />
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

<style lang="scss">
.top {
  position: relative;
  min-height: 200px;
  max-height: 270px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
  img {
    opacity: 1;
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    color: #fff;
    h2.main-title {
      color: #fff;
      & + p {
        &::before {
          background-color: #fff;
          font-size: 14px !important;
        }
      }
    }
  }
}
</style>
