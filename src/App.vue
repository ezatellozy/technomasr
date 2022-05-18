<template>
  <navbar v-if="notHome" />
  <main class="app-container">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <whatsup />
  <!-- <discuss /> -->
  <main-footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainFooter from './components/MainFooter.vue'
import Whatsup from './components/Whatsup.vue'

// import Discuss from './components/Discuss.vue'
export default {
  components: { Navbar, MainFooter, Whatsup },
  data() {
    return {
      notHome: false,
    }
  },
  watch: {
    $route() {
      if (this.$route.name == 'home') {
        this.notHome = false
      } else {
        this.notHome = true
      }
    },
  },
}
</script>

<style lang="scss">
main.app-container {
  min-height: calc(100vh - 145px);
}
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
