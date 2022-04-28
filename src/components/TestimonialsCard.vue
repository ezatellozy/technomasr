<template>
  <div class="testi-card flex-centerd">
    <div class="image">
      <img src="@/assets/man.png" class="rounded-circle" alt="technomasr" />
    </div>
    <div class="text text-end">
      <p class="fs-6 p-4">
        <q>
          موقع إلكتروني رائع ودعم فني ممتاز وبرنامج إداري موفر للوقت بشكل كبير
        </q>
      </p>
      <h4 class="text-primary m-0 px-2">.د/حلمي سليمان</h4>
      <span class="px-2 px-2">إستشاري الجراحات التجميلية</span>
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
  box-shadow: 0 0 10px 0 #000;
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
    span {
      font-size: 13px;
      color: #444;
    }
  }
}
</style>
