<template>
  <div class="about-us py-5 mt-5">
    <div class="container">
      <h2 class="main-title" v-if="withTitle">
        من نحن
      </h2>
      <div class="row flex-row-reverse">
        <div class="image col-md-6 px-5">
          <img src="@/assets/about.png" class="img-fluid" alt="technomasr" />
        </div>
        <div class="info mb-5 mb-lg-0 col-md-6 mt-5 px-5">
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
              <router-link class="btn btn-primary fw-bold" to="/">
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
// .about-us {
//   background-color: #f5f5f5;
// }
</style>
