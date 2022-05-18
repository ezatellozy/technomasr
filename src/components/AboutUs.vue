<template>
  <div class="about-us pt-5 pt-md-0">
    <div class="container">
      <div class="position-relative" data-aos="fade-up">
        <h2 class="main-title">
          من نحن
        </h2>
        <p class="text-center">
          تكنو مصر أحد رواد الخدمات التقنية بالوطن العربي،متميزون بتقديم خدمات
          تصميم مواقع الكترونية ،تصميم متاجر الكترونية و برمجة تطبيقات الهاتف و
          خدمات التسويق
        </p>
      </div>
      <div class="row flex-row-reverse pt-3">
        <div class="image col-md-6 px-5" data-aos="zoom-in">
          <img src="@/assets/about.png" class="img-fluid" alt="technomasr" />
        </div>
        <div class="info mb-5 mb-lg-0 col-md-6 mt-5 px-5" data-aos="zoom-in">
          <div>
            <h2 class="fs-4 main-color mb-4">
              تكنو مصر أحد رواد الخدمات التقنية بالوطن العربي
            </h2>
            <p class="lh-md mb-5">
              متم تأسيس تكنو مصر كشركة برمجة في مصر فى نوفمبر 2014 للإبتكار فى
              مجال الويب و تقنية المعلومات و تصميم مواقع الكترونية و تصميم متاجر
              الكترونية و برامج ادارة الحسابات المختلفة
            </p>
            <div class="text-center" v-if="withBtn">
              <router-link class="btn btn-primary fw-bold" to="/about">
                المزيد عن تكنو مصر
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withBtn: Boolean,
    withTitle: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.about-us {
  transition: all 0.3s;
  // opacity: 0;
}
// .image img {
//   animation: bouncing 5s linear infinite;
//   height: auto;
// }
// @keyframes bouncing {
//   0%,
//   100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(50px);
//   }
// }
</style>
