<template>
  <div class="testi-card flex-centerd">
    <div class="text text-end pe-2">
      <h4 class="fs-5">.د/حلمي سليمان</h4>
      <span class="">إستشاري الجراحات التجميلية</span>
      <p class="fs-6 mt-2">
        موقع إلكتروني رائع ودعم فني ممتاز وبرنامج إداري موفر للوقت بشكل كبير
      </p>
    </div>
    <div class="image">
      <img src="@/assets/man.png" class="rounded-circle" alt="technomasr" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.testi-card {
  background-color: #fff;
  border-radius: 20px;
  width: 500px;
  padding: 20px 10px;
  position: relative;
  cursor: pointer;
  margin: 20px 10px;
  // box-shadow: 0 0 10px 0 #000;
  .image {
    img {
      width: 120px;
      height: 120px;
      // width: 20%;
      border: solid 4px #f5f5f5;
      padding: 5px;
    }
  }
  .text {
    h4 {
      color: #005384;
    }
    span {
      font-size: 13px;
      color: #868e96 !important;
    }
    p {
      color: #333;
    }
  }
}
</style>
