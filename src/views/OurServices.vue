<template>
  <div class="our-services py-5">
    <div class="container">
      <div class="position-relative title-fade-in">
        <h2 class="main-title">خدماتنا</h2>
        <p class="text-center">
          شركة تكنو مصر هي أفضل شركة تصميم مواقع الكترونية في مصر ،تقدم أيضاً
          الشركة خدمة تصميم المتاجر الكترونية ، تصميم تطبيقات الجوال ،خدمات
          التسويق الإلكتروني و برامج الحسابات و الإدارة
        </p>
      </div>
      <div class="row pt-5">
        <div class="col-md-3 mb-5 content-fade-in" v-for="n in 8" :key="n">
          <service-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue'
export default {
  components: { ServiceCard },
}
</script>

<style scoped>
p {
  color: #333;
}
</style>
