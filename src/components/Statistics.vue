<template>
  <section class="statistics py-4" id="statistics">
    <div class="container">
      <div class="row">
        <div class="stat col-md-4 text-white text-center">
          <div class="logo">
            <img src="@/assets/experience-icon.png" alt="technomasr" />
          </div>
          <p>
            +
            <span class="count fs-4" data-count="400">0</span>
          </p>
          <h4 class="fs-6">سنوات الخبرة</h4>
        </div>

        <div class="stat col-md-4 text-white text-center">
          <div class="logo">
            <img src="@/assets/clients-icon-png-1.jpg" alt="technomasr" />
          </div>
          <p>
            +
            <span class="count fs-4" data-count="1000">0</span>
          </p>
          <h4 class="fs-6">عدد العملاء</h4>
        </div>

        <div class="stat col-md-4 text-white text-center">
          <div class="logo">
            <img src="@/assets/projects.png" alt="technomasr" />
          </div>
          <p>
            +
            <span class="count fs-4" data-count="800">0</span>
          </p>
          <h4 class="fs-6">عدد المشاريع</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      start: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.getSection)
  },
  methods: {
    getSection() {
      let statistics = document.querySelector('.statistics')
      let stat = document.querySelectorAll('.statistics .stat .count')

      window.onscroll = function () {
        if (window.scrollY >= statistics.offsetTop - 400) {
          console.log('true')
          if (!this.started) {
            stat.forEach((stat) => {
              let goal = stat.dataset.count
              let counter = setInterval(() => {
                stat.textContent++
                if (stat.textContent == goal) {
                  clearInterval(counter)
                }
              }, 3000 / goal)
            })
          }
          this.started = true
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.statistics {
  background-color: #011f31;
  border-bottom: 1px solid #fff;
  .stat {
    .logo {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      img {
        max-width: 100%;
        height: auto;
        filter: brightness(0.5) invert(1);
      }
    }
  }
}
</style>
