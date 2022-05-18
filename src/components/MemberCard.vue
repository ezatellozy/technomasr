<template>
  <div class="card border-0" data-aos="fade-up" data-aos-duration="3000">
    <div class="card-header p-0">
      <img src="@/assets/w.jpg" alt="technomasr" class="card-img-top" />
    </div>
    <div class="card-body text-start">
      <h5 class="card-title">Hunter Norton</h5>
      <p class="card-text">HR Manager</p>
    </div>
  </div>
  <!-- <div class="image-holder">
  </div>
  <div class="text">
    .title
  </div> -->
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.card {
  .card-title {
    color: #011f31;
  }
  .card-text {
    color: #111;
  }
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
