<template>
  <div class="intro">
    <div class="container">
      <div class="row">
        <div class="image col-md-6 px-5">
          <img src="@/assets/s1_img.webp" class="img-fluid" alt="technomasr" />
        </div>
        <div class="info mb-5 mb-lg-0 col-md-6 flex-centerd px-5">
          <div>
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
              <router-link class="btn btn-primary fw-bold" to="/">
                المزيد عن العرض
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <features />
  </div>
</template>

<script>
import Features from './Features.vue'
export default {
  components: { Features },
}
</script>

<style lang="scss" scoped>
.intro {
  min-height: 100vh;
  background-image: url('@/assets/header-hero.webp');
  background-size: cover;
  background-position: center center;
  .container {
    padding-top: 100px;
  }
}
</style>
