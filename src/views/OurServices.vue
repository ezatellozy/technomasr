<template>
  <div class="our-services py-100 mt-5">
    <div class="container">
      <h2 class="main-title mb-2">خدماتنا</h2>
      <p class="text-center mb-5">
        شركة تكنو مصر هي أفضل شركة تصميم مواقع الكترونية في مصر ،تقدم أيضاً
        الشركة خدمة تصميم المتاجر الكترونية ، تصميم تطبيقات الجوال ،خدمات
        التسويق الإلكتروني و برامج الحسابات و الإدارة
      </p>
      <div class="row">
        <div class="col-md-4 mb-5" v-for="n in 8" :key="n">
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
