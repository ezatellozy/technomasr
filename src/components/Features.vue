<template>
  <div class="mt-4">
    <ul class="content border-top pt-4 px-0">
      <li class="flex-column flex-centerd">
        <div
          class="bg-main text-white icon-container flex-centerd rounded-circle p-3 mb-2"
        >
          <font-awesome-icon size="3x" class="icon" :icon="['fas', 'rocket']" />
        </div>
        <h5 class="main-color">حلول مبتكرة</h5>
      </li>

      <li class="flex-column flex-centerd">
        <div
          class="bg-main text-white icon-container flex-centerd rounded-circle p-3 mb-2"
        >
          <font-awesome-icon
            size="3x"
            class="icon"
            :icon="['fas', 'dashboard']"
          />
        </div>
        <h5 class="main-color">حلول مبتكرة</h5>
      </li>

      <li class="flex-column flex-centerd">
        <div
          class="bg-main text-white icon-container flex-centerd rounded-circle p-3 mb-2"
        >
          <font-awesome-icon
            size="3x"
            class="icon"
            :icon="['fas', 'headphones']"
          />
        </div>
        <h5 class="main-color">حلول مبتكرة</h5>
      </li>

      <li class="flex-column flex-centerd">
        <div
          class="bg-main icon-container flex-centerd text-white rounded-circle p-3 mb-2"
        >
          <font-awesome-icon size="3x" :icon="['fas', 'lock']" />
        </div>
        <h5 class="main-color">حلول مبتكرة</h5>
      </li>

      <li class="flex-column flex-centerd">
        <div
          class="bg-main text-white icon-container flex-centerd rounded-circle p-3 mb-2"
        >
          <font-awesome-icon size="3x" class="icon" :icon="['fas', 'usd']" />
        </div>
        <h5 class="main-color">حلول مبتكرة</h5>
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
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}
.content {
  max-width: 750px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
.icon-container {
  width: 80px;
  height: 80px;
}
</style>
