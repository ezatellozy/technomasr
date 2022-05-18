<template>
  <div class="join-team">
    <div class="top">
      <img src="@/assets/teamleft.webp" alt="technomasr" />
      <div class="content">
        <div class="container position-relative" data-aos="fade-in">
          <h2 class="main-title fs-2 mb-0">انضم معنا</h2>
          <p class="withbg"></p>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-6 col-lg-3" v-for="n in 8" :key="n">
          <JoinCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import JoinCard from '@/components/JoinCard.vue'
export default {
  components: { JoinCard },
  created() {
    AOS.init()
  },
}
</script>

<style></style>
