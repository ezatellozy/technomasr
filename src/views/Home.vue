<template>
  <div class="home overflow-hidden">
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
  data() {
    return {
      // getAboutUs: false,
    }
  },
  created() {
    // window.addEventListener('scroll', this.getElement)
  },
  methods: {
    // getElement() {
    //   let aboutUs = document.querySelector('.about-us')
    //   if (aboutUs) {
    //     if (window.scrollY >= aboutUs.offsetTop - 600) {
    //       // console.log('true')
    //       this.getAboutUs = true
    //     }
    //   }
    // },
  },
}
</script>

<style scoped lang="scss">
.team-work {
  background: url('@/assets/teamwork.webp') no-repeat fixed center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  .content {
    z-index: 10;
  }
  &::before {
    content: '' !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.616);
  }
}
</style>
