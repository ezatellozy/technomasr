<template>
  <div class="about-us py-5">
    <div class="container">
      <about-us />
      <!-- <div class="row flex-row-reverse pt-3 content-fade-in">
        <div class="image col-md-6 px-5">
          <img src="@/assets/about.png" class="img-fluid" alt="technomasr" />
        </div>
        <div class="info mb-5 mb-lg-0 col-md-6 mt-5 px-5 fade-in-right">
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
      <div class="row content-fade-in">
        <div class="image col-md-6 px-5">
          <img src="@/assets/about.png" class="img-fluid" alt="technomasr" />
        </div>
        <div class="info mb-5 mb-lg-0 col-md-6 mt-5 px-5 fade-in-right">
          <div>
            <h2 class="fs-4 main-color mb-4">
              تكنو مصر أحد رواد الخدمات التقنية بالوطن العربي
            </h2>
            <p class="lh-md mb-5">
              متم تأسيس تكنو مصر كشركة برمجة في مصر فى نوفمبر 2014 للإبتكار فى
              مجال الويب و تقنية المعلومات و تصميم مواقع الكترونية و تصميم متاجر
              الكترونية و برامج ادارة الحسابات المختلفة
            </p>
          </div>
        </div>
      </div>
      <div class="row flex-row-reverse pt-3 content-fade-in">
        <div class="image col-md-6 px-5">
          <img src="@/assets/about.png" class="img-fluid" alt="technomasr" />
        </div>
        <div class="info mb-5 mb-lg-0 col-md-6 mt-5 px-5 fade-in-right">
          <div>
            <h2 class="fs-4 main-color mb-4">
              تكنو مصر أحد رواد الخدمات التقنية بالوطن العربي
            </h2>
            <p class="lh-md mb-5">
              متم تأسيس تكنو مصر كشركة برمجة في مصر فى نوفمبر 2014 للإبتكار فى
              مجال الويب و تقنية المعلومات و تصميم مواقع الكترونية و تصميم متاجر
              الكترونية و برامج ادارة الحسابات المختلفة
            </p>
          </div>
        </div>
      </div> -->
      <div class="info text-center pb-5 row">
        <div class="content col-md-4 title-fade-in">
          <div class="image">
            <img src="@/assets/ico-1.png" alt="technomasr" />
          </div>
          <div class="text">
            <h2 class="main-color mt-2 fs-4 fw-bold">رسالتنا</h2>

            <p class="px-4">
              نسعى إلى تصميم أفكارك لتكون واجهتك على شبكة الإنترنت و نطور أعمالك
              لتواكب تطور حلول الأعمال و الوصول إلى العملاء المستهدفين
            </p>
          </div>
        </div>
        <div class="content col-md-4 title-fade-in">
          <div class="image">
            <img src="@/assets/mission-1.png" alt="technomasr" />
          </div>
          <div class="text">
            <h2 class="main-color mt-2 fs-4 fw-bold">هدفنا</h2>

            <p class="px-4">
              نهدف لـ تطوير مجتمع الويب من خلال تقديم باقات تصميم مواقع
              الكترونية احترافية و تصميم متاجر الكترونية و برمجة تطبيقات الهاتف
            </p>
          </div>
        </div>
        <div class="content col-md-4 title-fade-in">
          <div class="image">
            <img src="@/assets/icow.png" alt="technomasr" />
          </div>
          <div class="text">
            <h2 class="main-color mt-2 fs-4 fw-bold">استراتيجيتنا</h2>

            <p class="px-4">
              نسعى إلى الإرتقاء بمستوى الجودة و الدقة لنواكب التطور التكنولوجى و
              تبسيط حلول الأعمال التقنية على المستخدم
            </p>
          </div>
        </div>
      </div>
    </div>
    <statistics class="w-75 mx-auto" />
    <section class="subscribe py-5">
      <div class="container">
        <div class="position-relative mb-3">
          <h2 class="main-title bold secondary-color text-center pb-2">
            اشترك معنا بالقائمة البريديه
          </h2>
          <p class="m-0 p-0"></p>
        </div>
        <form @submit.prevent>
          <div class="form-group row">
            <div class="col-lg-3 col-sm-6">
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
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="form-line">
                <input
                  required="true"
                  class="form-control"
                  id=""
                  placeholder="البريد الإلكتروني"
                  name="email"
                  type="email"
                  value=""
                />
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
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
            </div>
            <div class="col-lg-3 col-sm-6">
              <button
                type="submit"
                class="btn btn-primary w-100 text-white p-10 m-t-30 wow zoomIn"
              >
                إشتراك
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs.vue'
import Statistics from '@/components/Statistics.vue'
export default {
  components: { AboutUs, Statistics },
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
}
</style>
