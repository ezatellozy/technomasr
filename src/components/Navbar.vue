<template>
  <nav class="navbar navbar-expand-lg" :class="scroll ? 'scroll' : ''">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" class="img-fluid logo" alt="technomasr" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">الرئيسية</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">من نحن</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">خدماتنا</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/our-works">أعمالنا</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/teamWork">
              فريق العمل
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://technomasr.com/Blog/">المدونة</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us">
              إتصل بنا
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scroll: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 150) {
        this.scroll = true
        return
      }
      this.scroll = false
      return
    },
  },
}
</script>

<style lang="scss" scoped>
button.navbar-toggler {
  box-shadow: none;

  color: #0c6ea2;
}
.collapse.show,
.collapsing {
  background-color: #fff;
}
.nav-item {
  position: relative;
  overflow: hidden;
  margin: 0 0.5rem;
  @media (min-width: 992px) {
    &::before {
      content: '';
      transition: 0.3s;
      position: absolute;
      bottom: 0;
      right: -100%;
      height: 2px;
      width: 100%;
      background-color: #0c6ea2;
    }
  }
  &:hover {
    &::before {
      right: 0;
    }
  }
  a {
    color: #000 !important;
    font-weight: bold;
    font-size: 18px;
    transition: 0.3s;
    &.router-link-active.router-link-exact-active,
    &:hover {
      color: #0c6ea2 !important;
    }
    &.router-link-active.router-link-exact-active {
      @media (min-width: 992px) {
        &::before {
          content: '';
          transition: 0.3s;
          position: absolute;
          bottom: 0;
          right: 0;
          height: 2px;
          width: 100%;
          background-color: #0c6ea2;
        }
      }
    }
  }
}

.navbar {
  animation: fadeUp 0.3s linear;
  &.scroll {
    animation: fadeIn 0.8s linear;
    background-color: #fff;
    box-shadow: 0 0 10px 1px #000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
  }
}
@keyframes fadeIn {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeUp {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
