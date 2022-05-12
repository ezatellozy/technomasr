<template>
  <div class="our-services pt-50" :class="getSection ? 'fade-in-top' : ''">
    <div class="container mb-5">
      <div class="position-relative">
        <h2 class="main-title">خدماتنا</h2>
        <p class="text-center">
          شركة تكنو مصر هي أفضل شركة تصميم مواقع الكترونية في مصر ،تقدم أيضاً
          الشركة خدمة تصميم المتاجر الكترونية ، تصميم تطبيقات الجوال ،خدمات
          التسويق الإلكتروني و برامج الحسابات و الإدارة
        </p>
      </div>
      <div class="row pt-3">
        <div
          class="col-lg-3 mb-3 mb-lg-0 services-section overlay rounded overflow-hidden"
          :class="getSection ? 'fade-in-right' : ''"
        >
          <div class="text-white text-center my-auto p-4">
            <h2 class="mb-5">خدماتنا</h2>

            <p>
              تقدم أيضاً الشركة خدمة تصميم المتاجر الكترونية ، تصميم تطبيقات
              الجوال ،خدمات التسويق الإلكتروني و برامج الحسابات و الإدارة
            </p>

            <router-link class="btn link py-3" to="/">
              خدمات تكنو مصر
            </router-link>
          </div>
        </div>
        <div class="col-lg-9" :class="getSection ? 'fade-in-left' : ''">
          <div class="services">
            <div class="service">
              <div class="image">
                <router-link to="/">
                  <img
                    class="img-fluid"
                    src="@/assets/service1.webp"
                    alt="technomasr"
                  />
                </router-link>
              </div>
              <div class="info text-center px-2">
                <router-link to="/" class="secondary-color primary-color-hover">
                  <h5>تصميم متجر إلكتروني</h5>
                </router-link>

                <p>
                  ننشئ لك متجر إلكتروني إحترافي متكامل مع الربط بوسائل الدفع
                  والشحن لتجارة إلكترونية متكاملة تستطيع من خلالها القيام بنشاطك
                  التجاري ...
                </p>
              </div>
            </div>

            <div class="service">
              <div class="image">
                <router-link to="/">
                  <img
                    class="img-fluid"
                    src="@/assets/service2.webp"
                    alt="technomasr"
                  />
                </router-link>
              </div>
              <div class="info text-center px-2">
                <router-link to="/" class="secondary-color primary-color-hover">
                  <h5>إستضافة المواقع</h5>
                </router-link>

                <p>
                  استمتع بإمكانيات متطورة فى استضافة المواقع من خلال خطط متعددة
                  لإستضافة الموقع الخاص بك
                </p>
              </div>
            </div>

            <div class="service">
              <div class="image">
                <router-link to="/">
                  <img
                    class="img-fluid"
                    src="@/assets/service3.webp"
                    alt="technomasr"
                  />
                </router-link>
              </div>
              <div class="info text-center px-2">
                <router-link to="/" class="secondary-color primary-color-hover">
                  <h5>تصميم مواقع</h5>
                </router-link>

                <p>
                  لأن تصميم المواقع هو من أهم الخدمات التى تهتم بها الشركات
                  والمؤسسات حالياً قمنا بتوفير الخدمة بالجودة الأفضل فى السوق
                  ...
                </p>
              </div>
            </div>

            <div class="service">
              <div class="image">
                <router-link to="/">
                  <img
                    class="img-fluid"
                    src="@/assets/service4.webp"
                    alt="technomasr"
                  />
                </router-link>
              </div>
              <div class="info text-center px-2">
                <router-link to="/" class="secondary-color primary-color-hover">
                  <h5>تطبيقات الهواتف الذكية</h5>
                </router-link>

                <p>
                  قم بتنفيذ كافة مخططاتك فى التطبيق الخاص بك
                </p>
              </div>
            </div>

            <div class="service">
              <div class="image">
                <router-link to="/">
                  <img
                    class="img-fluid"
                    src="@/assets/service5.webp"
                    alt="technomasr"
                  />
                </router-link>
              </div>
              <div class="info text-center px-2">
                <router-link to="/" class="secondary-color primary-color-hover">
                  <h5>برامج الحسابات والإدارة</h5>
                </router-link>

                <p>
                  قم بإدارة أعمالك وحساباتك دون الحاجة إلى الخبرة فى تنفيذ ذلك
                </p>
              </div>
            </div>

            <div class="service">
              <div class="image">
                <router-link to="/">
                  <img
                    class="img-fluid"
                    src="@/assets/service6.webp"
                    alt="technomasr"
                  />
                </router-link>
              </div>
              <div class="info text-center px-2">
                <router-link to="/" class="secondary-color primary-color-hover">
                  <h5>التسويق الإلكترونى</h5>
                </router-link>

                <p>
                  قم بإنشاء أعمالك وسنقوم بوضع الخطط الخاصة بك لتسويق تلك
                  الأعمال والإنتشار بين العملاء
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getSection: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.getElement)
  },
  methods: {
    getElement() {
      let ourServices = document.querySelector('.our-services')
      if (ourServices) {
        if (window.scrollY >= ourServices.offsetTop - 600) {
          // console.log('true')
          this.getSection = true
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.our-services {
  opacity: 0;
  transition: all 0.3s;
}
.services {
  & > div {
    padding: 0 10px 0 0 !important;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  .service {
    background: #f5f5f5;
    border-radius: 10px;
    padding: 10px 0;
    height: 330px;
    .image {
      width: 150px;
      margin: 0 auto 10px;
    }
    .info {
      h5 {
        position: relative;
        margin-bottom: 30px;
        color: #005384;
        &::before {
          content: '';
          position: absolute;
          height: 2px;
          background-color: #005384 !important;
          width: 70px;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      p {
        height: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
@media (max-width: 992px) {
  .row > * {
    padding: 0 !important;
  }
}
.services-section {
  background-image: url('@/assets/services.jpg');
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  position: relative;
  // margin: 10px 0;
  p {
    margin-bottom: 70px;
  }
  .link {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    color: #005384;
    font-weight: bold;
    font-size: 18px;
    transition: 0.3s;
    background: #f5f5f5;
    &:hover {
      background: #005384;
      color: #fff;
    }
  }
}
</style>
