<template>
  <div class="flip-card overflow-hidden">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="@/assets/work3.png" class="img-fluid" alt="Avatar" />
      </div>
      <div class="flip-card-back flex-centerd flex-column">
        <h2 class="mb-4 fs-5">الشامل 1</h2>
        <div class="links">
          <a href="/" class="icons flex-centerd">
            <font-awesome-icon
              size="lg"
              class="text-white"
              :icon="['fas', 'link']"
            />
          </a>
          <a href="/" class="icons flex-centerd">
            <font-awesome-icon
              size="lg"
              class="text-white"
              :icon="['fas', 'external-link']"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 200px;
  border: 1px solid #f1f1f1;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #0c6ea2;
  color: white;
  transform: rotateY(180deg);

  .links {
    display: flex;
    .icons {
      background-color: rgba(0, 0, 0, 0.7);
      margin-left: 5px;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      color: white;
    }
  }
}
</style>
