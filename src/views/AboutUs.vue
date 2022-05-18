<template>
  <div class="about-us">
    <div class="top">
      <img src="@/assets/aboutus.jpg  " alt="" />
      <div class="content">
        <div class="container position-relative title-fade-in">
          <h2 class="main-title fs-2">من نحن</h2>
          <p class="text-center">
            نسعى إلى تصميم أفكارك لتكون واجهتك على شبكة الإنترنت و نطور أعمالك
            لتواكب تطور حلول الأعمال و الوصول إلى العملاء المستهدفين
          </p>
        </div>
      </div>
    </div>
    <div class="container details pt-5">
      <div class="row about py-5">
        <div class="image col-md-6 px-5" data-aos="fade-left">
          <img src="@/assets/images.jpg" alt="technomasr" />
        </div>
        <div class="info align-self-center col-md-6 px-5" data-aos="fade-right">
          <div>
            <h2 class="fs-4 main-color mb-4">
              تكنو مصر أحد رواد الخدمات التقنية بالوطن العربي
            </h2>
            <p class="lh-md mb-5">
              متم تأسيس تكنو مصر كشركة برمجة في مصر فى نوفمبر 2014 للإبتكار فى
              مجال الويب و تقنية المعلومات و تصميم مواقع الكترونية و تصميم متاجر
              الكترونية و برامج ادارة الحسابات المختلفة
            </p>
            <div class="text-center" v-if="withBtn">
              <router-link class="btn btn-primary fw-bold" to="/about">
                المزيد عن تكنو مصر
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row about py-5 flex-row-reverse" data-aos="fade-up">
        <div class="image col-md-6 px-5">
          <img src="@/assets/images.jpg" alt="technomasr" />
        </div>
        <div class="info align-self-center col-md-6 px-5 fade-in-right">
          <div>
            <h2 class="fs-4 main-color mb-4">
              رسالتنا
            </h2>
            <p class="lh-md mb-5">
              سعى إلى تصميم أفكارك لتكون واجهتك على شبكة الإنترنت و نطور أعمالك
              لتواكب تطور حلول الأعمال و الوصول إلى العملاء المستهدفين
            </p>
          </div>
        </div>
      </div>
      <div class="row about py-5" data-aos="fade-up">
        <div class="image col-md-6 px-5">
          <img src="@/assets/images.jpg" alt="technomasr" />
        </div>
        <div class="info align-self-center col-md-6 px-5 fade-in-right">
          <div>
            <h2 class="fs-4 main-color mb-4">
              هدفنا
            </h2>
            <p class="lh-md mb-5">
              نهدف لـ تطوير مجتمع الويب من خلال تقديم باقات تصميم مواقع
              الكترونية احترافية و تصميم متاجر الكترونية و برمجة تطبيقات الهاتف
            </p>
          </div>
        </div>
      </div>
      <div class="row about py-5 flex-row-reverse" data-aos="fade-up">
        <div class="image col-md-6 px-5">
          <img src="@/assets/images.jpg" alt="technomasr" />
        </div>
        <div class="info align-self-center col-md-6 px-5 fade-in-right">
          <div>
            <h2 class="fs-4 main-color mb-4">
              استراتيجيتنا
            </h2>
            <p class="lh-md mb-5">
              نسعى إلى الإرتقاء بمستوى الجودة و الدقة لنواكب التطور التكنولوجى و
              تبسيط حلول الأعمال التقنية على المستخدم
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="status">
      <statistics class="w-75 mx-auto" data-aos="fade-up" />
      <section class="subscribe py-5 mx-auto" data-aos="fade-up">
        <div class="container">
          <div class="position-relative mb-3">
            <h2 class="main-title bold secondary-color text-center pb-4 mb-0">
              اشترك معنا بالقائمة البريديه
            </h2>
          </div>
          <form @submit.prevent>
            <div class="form-group row justify-content-center">
              <!-- <div class="col-lg-3 col-sm-6">
              <div class="form-line">
                <input
                  required="true"
                  class="form-control"
                  id=""
                  placeholder="الإسم"
                  name="userName"
                  type="text"
                  value=""
                />
              </div>
            </div> -->
              <input
                required="true"
                class="form-control"
                id=""
                placeholder="البريد الإلكتروني"
                name="email"
                type="email"
                value=""
              />
              <!-- <div class="col-lg-3 col-sm-6">
              <div class="form-line">
                <input
                  class="form-control"
                  id=""
                  placeholder="رقم الهاتف"
                  name="mobile"
                  type="text"
                  value=""
                />
              </div>
            </div> -->
              <button
                type="submit"
                class="btn btn-primary w-100 text-white p-10 m-t-30 wow zoomIn"
              >
                إشتراك
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import AboutUs from '@/components/AboutUs.vue'
import Statistics from '@/components/Statistics.vue'
import AOS from 'aos'
export default {
  components: { Statistics },
  created() {
    AOS.init()
  },
}
</script>

<style scoped lang="scss">
.about-us {
  .about-us {
    min-height: calc(100vh - 100px);
  }
  .info {
    @media (min-width: 992px) {
      .content:nth-child(odd) {
        transform: translateY(-30px);
      }
    }
    .content {
      margin-bottom: 20px;
    }
  }
  .details {
    .image {
      max-width: 430px;
      margin: auto;
      position: relative;
      z-index: 1;
      padding: 40px;
      img {
        max-width: 100%;
        display: inline-block;
        // transform: rotateZ(45deg);
        height: 350px;
        object-fit: cover;
        width: auto;
        overflow: hidden;
        clip-path: polygon(
          30% 0%,
          70% 0%,
          100% 30%,
          100% 70%,
          70% 100%,
          30% 100%,
          0% 70%,
          0% 30%
        );
      }
    }
  }
  .about {
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      background-image: url('@/assets/aaaa.png');
      width: 150px;
      height: 150px;
    }
    &::before {
      top: 48px;
      right: 0;
      animation: moving-right 5s linear infinite;
    }
    &::after {
      bottom: 48px;
      left: 0;
      animation: moving-left 5s linear infinite;
    }
  }
  .status {
    background-image: url('@/assets/stats.jpg');
    background-size: cover;
    position: relative;
    & > section {
      z-index: 1;
      position: relative;
    }
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
}
.subscribe {
  max-width: 700px;
  form {
    .form-group {
      position: relative;
      input {
        height: 75px;
        border-radius: 50px;
        outline: 0;
        box-shadow: 0 !important;
        padding-right: 30px;
        padding-left: 160px;
        transition: 0.3s;
      }
      button {
        position: absolute;
        height: 70px;
        width: 150px !important;
        left: 2px;
        transform: translateY(-50%);
        top: 50%;
        border-radius: 50px;
        transition: 0.3s;
        &:hover {
          border-top-right-radius: 0;
        }
      }
    }
  }
}
@keyframes moving-right {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateX(-100px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0;
  }
}
@keyframes moving-left {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateX(100px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 0;
  }
}
</style>
