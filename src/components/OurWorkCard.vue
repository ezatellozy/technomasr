<template>
  <router-link to="/work">
    <div
      class="portfolio-card bg-white d-flex justify-content-between flex-column"
    >
      <div class="image-container">
        <img src="@/assets/our-work.jpg" alt="" class="img-fluid" />
      </div>
      <div class="info p-2 text-center">
        <h3 class="title">تصميم موقع الكتروني | بتاع تنمية بشرية</h3>
        <span class="cat">تصميم مواقع</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.portfolio-card {
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    .image-container {
      &::before {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.699);
      }
    }
  }
  .image-container {
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    &::before {
      opacity: 0;
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.5s;
      background-color: #000;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 80%;
      height: auto;
    }
  }
  .info {
    h3.title {
      color: #005384;
      font-size: 16px;
    }
    h3,
    span {
      margin: 0;
      color: #adadad;
      font-size: 14px;
    }
  }
}
</style>
