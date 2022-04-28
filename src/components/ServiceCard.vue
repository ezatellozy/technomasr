<template>
  <div class="service overlay">
    <div>
      <div class="image text-center">
        <img class="img-fluid" src="@/assets/service6.webp" alt="technomasr" />
      </div>
      <div class="info text-center px-2">
        <h5 class="secondary-color">التسويق الإلكترونى</h5>
        <p>
          قم بإنشاء أعمالك وسنقوم بوضع الخطط الخاصة بك لتسويق تلك الأعمال
          والإنتشار بين العملاء
        </p>
      </div>
    </div>
    <div class="link">
      <router-link class="btn btn-primary" to="/">المزيد</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.service {
  box-shadow: 0 0 1px 0 #000;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  .overlayin {
    position: relative;
    display: flex;
    color: #fff;
    transition: all 0.3s linear;
    & > div {
      z-index: 10;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      transition: all 0.3s linear;
    }
  }
  &.overlay {
    transition: 0.3s;
    &::before {
      transition: 0.3s;
      transform: scale(0.5);
      content: unset;
    }
    color: #333;
  }
  &:hover {
    &.overlay {
      &::before {
        content: '';
        transition: 0.3s;
        transform: scale(1);
        z-index: 20;
      }
    }
    .link {
      display: block;
    }
  }
  .link {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;

    transition: all 0.3s linear;
  }
}
</style>
