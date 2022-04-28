<template>
  <div class="team-members team4 py-100 mt-4">
    <div class="container">
      <div class="col-md-7 text-center mx-auto mb-5">
        <h3 class="mb-3 main-title">فريق العمل</h3>
        <h6 class="subtitle">
          You can relay on our amazing features list and also our customer
          services will be great experience for you without doubt and in no-time
        </h6>
      </div>
      <div class="row justify-content-center my-4">
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

<style scoped>
@import url(//fonts.googleapis.com/css?family=Montserrat:300, 500);
.team4 {
  font-family: 'Montserrat', sans-serif;
  color: #8d97ad;
  font-weight: 300;
}

.team4 h1,
.team4 h2,
.team4 h3,
.team4 h4,
.team4 h5,
.team4 h6 {
  color: #3e4555;
}

.team4 .font-weight-medium {
  font-weight: 500;
}

.team4 h5 {
  line-height: 22px;
  font-size: 18px;
}

.team4 .subtitle {
  color: #8d97ad;
  line-height: 24px;
  font-size: 13px;
}

.team4 ul li a {
  color: #8d97ad;
  padding-right: 15px;
  -webkit-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  transition: 0.1s ease-in;
}

.team4 ul li a:hover {
  -webkit-transform: translate3d(0px, -5px, 0px);
  transform: translate3d(0px, -5px, 0px);
  color: #316ce8;
}
</style>
