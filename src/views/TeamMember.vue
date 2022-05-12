<template>
  <div class="team-members py-5">
    <div class="container">
      <div class="text-center info">
        <h3>فريق العمل</h3>
        <p class="subtitle">
          You can relay on our amazing features list and also our customer
          services will be great experience for you without doubt and in no-time
        </p>
      </div>
      <div class="row justify-content-center pt-5">
        <div class="col-lg-3 mb-5" v-for="n in 8" :key="n">
          <member-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberCard from '@/components/MemberCard.vue'
export default {
  components: { MemberCard },
}
</script>

<style scoped lang="scss">
.team-members {
  .info {
    h3 {
      color: #011f31 !important;
    }
    p {
      color: #808080 !important;
      margin: 20px 168px 0;
    }
  }
}
</style>
