<template>
  <article
    class="text-center"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="500"
  >
    <router-link to="/jobs">
      <div class="image">
        <figure>
          <img
            src="https://technomasr.com/storage/app/jobs/1/1649080336_1_57475980.png"
            alt="Junior  Flutter Developer"
          />
        </figure>
      </div>
      <h5>
        Junior Flutter Developer
      </h5>
    </router-link>
  </article>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
article {
  margin: 10px 0;
  box-shadow: 0 0px 3px rgb(0 0 0 / 25%);

  a {
    .image {
      height: 230px;
      height: auto;
      overflow: hidden;
      figure {
        position: relative;
        margin: 0;
        &::before {
          z-index: 10;
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform: translate(-50%, -50%);
          background-color: #fff;
        }
      }
      img {
        transition: 0.3s;
        width: 100%;
      }
    }
    h5 {
      margin: 0;
      padding: 10px 0;
    }
  }
  &:hover {
    a {
      .image {
        figure {
          &::before {
            animation: push 0.5s linear forwards;
          }
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}

@keyframes push {
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}
</style>
