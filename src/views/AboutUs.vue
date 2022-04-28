<template>
  <div class="about-us">
    <div class="container">
      <about-us />

      <div class="info text-center py-100 row">
        <div class="content col-md-4">
          <div class="image">
            <img src="@/assets/ico-1.png" alt="technomasr" />
          </div>
          <div class="text">
            <h2 class="main-color mt-2 fs-4 fw-bold">رسالتنا</h2>

            <p class="px-4">
              نسعى إلى تصميم أفكارك لتكون واجهتك على شبكة الإنترنت و نطور أعمالك
              لتواكب تطور حلول الأعمال و الوصول إلى العملاء المستهدفين
            </p>
          </div>
        </div>
        <div class="content col-md-4">
          <div class="image">
            <img src="@/assets/mission-1.png" alt="technomasr" />
          </div>
          <div class="text">
            <h2 class="main-color mt-2 fs-4 fw-bold">هدفنا</h2>

            <p class="px-4">
              نهدف لـ تطوير مجتمع الويب من خلال تقديم باقات تصميم مواقع
              الكترونية احترافية و تصميم متاجر الكترونية و برمجة تطبيقات الهاتف
            </p>
          </div>
        </div>
        <div class="content col-md-4">
          <div class="image">
            <img src="@/assets/icow.png" alt="technomasr" />
          </div>
          <div class="text">
            <h2 class="main-color mt-2 fs-4 fw-bold">استراتيجيتنا</h2>

            <p class="px-4">
              نسعى إلى الإرتقاء بمستوى الجودة و الدقة لنواكب التطور التكنولوجى و
              تبسيط حلول الأعمال التقنية على المستخدم
            </p>
          </div>
        </div>
      </div>
    </div>
    <statistics />
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs.vue'
import Statistics from '@/components/Statistics.vue'
export default {
  components: { AboutUs, Statistics },
}
</script>

<style scoped lang="scss">
.about-us {
  margin-top: 100px;
  .info {
    @media (min-width: 992px) {
      .content:nth-child(odd) {
        transform: translateY(-30px);
      }
    }
    .content {
      margin-bottom: 20px;
    }
  }
}
</style>
