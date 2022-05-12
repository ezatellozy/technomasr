<template>
  <div class="mb-4">
    <ul
      class="content px-0 d-flex flex-wrap justify-content-center justify-content-md-between"
    >
      <li>
        <div
          class="bg-main mx-auto text-white icon-container flex-centerd rounded-circle"
        >
          <font-awesome-icon size="2x" class="icon" :icon="['fas', 'rocket']" />
        </div>
        <h5 class="main-color">حلول مبتكرة</h5>
      </li>

      <li>
        <div
          class="bg-main mx-auto text-white icon-container flex-centerd rounded-circle"
        >
          <font-awesome-icon
            size="2x"
            class="icon"
            :icon="['fas', 'dashboard']"
          />
        </div>
        <h5 class="main-color">سرعه الاداء</h5>
      </li>

      <li>
        <div
          class="bg-main mx-auto text-white icon-container flex-centerd rounded-circle"
        >
          <font-awesome-icon
            size="2x"
            class="icon"
            :icon="['fas', 'headphones']"
          />
        </div>
        <h5 class="main-color">دعم فني 24/7</h5>
      </li>

      <li>
        <div
          class="bg-main mx-auto icon-container flex-centerd text-white rounded-circle"
        >
          <font-awesome-icon size="2x" :icon="['fas', 'lock']" />
        </div>
        <h5 class="main-color">حماية قوية</h5>
      </li>

      <li>
        <div
          class="bg-main mx-auto text-white icon-container flex-centerd rounded-circle"
        >
          <font-awesome-icon size="2x" class="icon" :icon="['fas', 'pencil']" />
        </div>
        <h5 class="main-color">عقد مسجل</h5>
      </li>
      <li>
        <div
          class="bg-main mx-auto text-white icon-container flex-centerd rounded-circle"
        >
          <font-awesome-icon size="2x" class="icon" :icon="['fas', 'usd']" />
        </div>
        <h5 class="main-color">أقل الأسعار</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  margin-bottom: 20px;
  margin-right: 10px;
  @media (min-width: 768px) {
    margin: 0;
  }
  h5 {
    font-size: 16px;
  }
}

.icon-container {
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
}
</style>
