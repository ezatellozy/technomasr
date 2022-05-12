<template>
  <div class="work py-5">
    <div class="container">
      <h2 class="text-center mb-3">بتاع تنمية بشرية</h2>
      <div class="image text-center">
        <img src="@/assets/Home-Page-37.jpg" alt="" class="img-fluid" />
      </div>
      <div class="title d-flex justify-content-between">
        <div class="link mb-2 text-end">
          <span>
            رابط
          </span>
          <span>
            <a href="#">https://www.technomasr.com</a>
          </span>
        </div>
        <h5>
          الخدمة :
          <span>تطبيقات الهاتف المحمول</span>
        </h5>
      </div>

      <div class="info">
        <div class="text pt-3 text-center">
          <h3>نبذه عن المشروع</h3>
          <p>تطبيق يساعد على تنمية الذات وتحقيق الأهداف والنجاح</p>
        </div>
      </div>
      <div class="control d-flex justify-content-between pt-5">
        <a href="#">التالي</a>
        <router-link to="/our-works">
          <font-awesome-icon :icon="['fas', 'border-all']" />
        </router-link>
        <a href="#">السابق</a>
      </div>
      <div class="related pt-5">
        <h5>مشاريع ذات صلة</h5>
        <div class="row justify-content-end">
          <div class="col-sm-6 col-md-4">
            <our-work-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OurWorkCard from '@/components/OurWorkCard.vue'
export default {
  components: { OurWorkCard },
}
</script>

<style scoped lang="scss">
.title {
  h5 {
    font-size: 18px;
    span {
      font-size: 14px;
    }
  }
}
.link {
  display: table;
  table-layout: fixed;
  span {
    min-width: 108px;
    font-weight: 600;
    display: table-cell;
    color: #111;
  }
}
.control {
  a {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    margin: 0;
    padding: 0 15px 0 0;
    position: relative;
  }
}
.related > h5 {
  font-size: 18px;
  text-transform: uppercase;
  position: relative;
  z-index: 10;
  display: inline-block;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.67;
  color: #111;
}
</style>
