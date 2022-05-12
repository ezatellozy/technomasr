<template>
  <div class="intro">
    <navbar />
    <div class="container">
      <div class="row">
        <div class="image col-lg-5 col-xl-6 fade-in-right">
          <img
            src="@/assets/s1_img.webp"
            class="w-75 d-block mx-auto"
            alt="technomasr"
          />
        </div>
        <div class="info mb-lg-0 col-lg-7 col-xl-6 fade-in-left">
          <features class="fade-in-top pt-5" />
          <div class="pt-3">
            <h2 class="fs-4 main-color mb-4">
              تعرف على باقات تصميم متاجر الكترونية احترافية
            </h2>
            <p class="lh-md mb-5">
              نعمل على تصميم متجر الكتروني إحترافي متكامل مع الربط بوسائل الدفع
              والشحن لتجارة إلكترونية متكاملة تستطيع من خلالها القيام بنشاطك
              التجاري بشكل إحترافي والتواصل مع العملاء ومتابعة طلباتهم بأقل
              مجهود ممكن.
            </p>
            <div class="text-center">
              <router-link class="btn btn-primary fw-bold" to="/offers">
                المزيد عن العرض
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from './Features.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Features, Navbar },
}
</script>

<style lang="scss" scoped>
.intro {
  min-height: 100vh;
  background-image: url('@/assets/header-hero.webp');
  background-size: cover;
  background-position: center center;
  .container {
    padding-top: 50px;
  }
}
.image img {
  animation: bouncing 5s linear infinite;
  height: auto;
}
@keyframes bouncing {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px);
  }
}
</style>
