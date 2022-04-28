<template>
  <div class="home">
    <intro />
    <about-us withBtn="true" withTitle="true" />
    <our-services />
    <our-work />
    <testimonials />
    <our-team />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import AboutUs from '@/components/AboutUs.vue'
import OurServices from '@/components/OurServices.vue'
import OurWork from '@/components/OurWork.vue'
import Testimonials from '@/components/Testimonials.vue'
import OurTeam from '@/components/OurTeam.vue'
// @ is an alias to /src

export default {
  components: { Intro, AboutUs, OurServices, OurWork, Testimonials, OurTeam },
  name: 'HomeView',
}
</script>

<style scoped></style>
