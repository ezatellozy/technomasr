<template>
  <section class="statistics py-5" id="statistics">
    <div class="container">
      <div class="row">
        <div class="stat col-md-4 text-primary text-center">
          <span>
            <font-awesome-icon :icon="['fas', 'star']" />
          </span>
          <p>
            +
            <span class="count fs-4" data-count="400">0</span>
          </p>
          <h4 class="fs-6">سنوات الخبرة</h4>
        </div>

        <div class="stat col-md-4 text-primary text-center">
          <span>
            <font-awesome-icon :icon="['fas', 'users']" />
          </span>
          <p>
            +
            <span class="count fs-4" data-count="1000">0</span>
          </p>
          <h4 class="fs-6">عدد العملاء</h4>
        </div>

        <div class="stat col-md-4 text-primary text-center">
          <span>
            <font-awesome-icon :icon="['fas', 'code']" />
          </span>
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
      if (statistics) {
        window.onscroll = function () {
          if (window.scrollY >= statistics.offsetTop - 600) {
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
      }
    },
  },
}
</script>

<style scoped lang="scss">
.statistics {
  .stat {
    margin-bottom: 15px;
    color: #444 !important;
    & > span {
      display: inline-block;
      margin-bottom: 10px;
      font-size: 45px;
    }

    p {
      & > span {
        font-weight: bold;
        font-size: 30px !important;
      }
      margin-bottom: 0;
    }
    h4 {
      color: #0c6ea2;
      font-style: italic;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
