<template>
  <div class="service">
    <div class="image">
      <router-link to="/">
        <img class="img-fluid" src="@/assets/service1.webp" alt="technomasr" />
      </router-link>
    </div>
    <div class="info text-center px-2">
      <router-link to="/service" class="secondary-color primary-color-hover">
        <h5>تصميم متجر إلكتروني</h5>
      </router-link>

      <p>
        ننشئ لك متجر إلكتروني إحترافي متكامل مع الربط بوسائل الدفع والشحن لتجارة
        إلكترونية متكاملة تستطيع من خلالها القيام بنشاطك التجاري ...
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.service {
  // background: #f5f5f5;
  border-radius: 10px;
  padding: 10px 0;
  height: 330px;
  .image {
    width: 150px;
    margin: 0 auto 10px;
  }
  .info {
    h5 {
      position: relative;
      margin-bottom: 30px;
      color: #005384;
      &::before {
        content: '';
        position: absolute;
        height: 2px;
        background-color: #005384 !important;
        width: 70px;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    p {
      height: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
