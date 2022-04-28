<template>
  <navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <main-footer />
  <whatsup />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainFooter from './components/MainFooter.vue'
import Whatsup from './components/Whatsup.vue'
export default {
  components: { Navbar, MainFooter, Whatsup },
}
</script>

<style lang="scss">
.logo {
  width: 100px;
}

.flex-centerd {
  display: flex;
  justify-content: center;
  align-items: center;
}

.is-rtl {
  direction: rtl;
}
</style>
