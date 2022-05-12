<template>
  <div class="offers">
    <div class="container">
      <div class="alert alert-danger m-auto text-center">
        <h5 class="m-t-15">عفواً</h5>
        <div class="f-s-14 alert-danger m-t-15 m-b-15">
          <span class="bold">لا توجد عروض حاليه!</span>
          يمكنك التواصل معنا عبر صفحة اتصل بنا لطلب العرض الخاص بك أو للتحدث
          مباشرة مع أحد مندوبى المبيعات اضغط على زر الدعم الفنى بأسفل الموقع
        </div>
      </div>
      <h2 class="main-title mt-4">
        خدماتنا
      </h2>
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
.offers {
  padding-top: 150px;
}
</style>
