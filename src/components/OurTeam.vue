<template>
  <section class="team-work" id="team">
    <div class="overlay content">
      <div class="container py-50">
        <div class="row">
          <div class="courses-section col-lg-6 text-center text-white">
            <div class="image">
              <img
                class="img-fluid"
                src="https://technomasr.com/SiteAssets/style/images/teamright.webp"
                alt="دائما ما يوجد مكان لك داخل تكنو مصر فأنت مرحب بك دائما كلما استطعنا"
              />
            </div>
            <p>
              دائما ما يوجد مكان لك داخل تكنو مصر فأنت مرحب بك دائما كلما
              استطعنا
            </p>
            <div class="link">
              <a href="/training" class="btn mb-4 gradient-top text-white p-10">
                فرص التدريب المتاحه
              </a>
              <a href="/join" class="btn mb-4 gradient-top text-white p-10">
                إنضم لفريق العمل لدينا
              </a>
            </div>
            <div class="logo rounded-circle">
              <img
                class="img-fluid"
                src="https://technomasr.com/storage/app/Settings/logo.webp"
                alt="تكنومصر لتصميم مواقع و متاجر الكترونية و برمجة التطبيقات"
              />
            </div>
          </div>

          <div class="team-section col-lg-6 text-center text-white">
            <div class="image">
              <img
                class="img-fluid"
                src="https://technomasr.com/SiteAssets/style/images/teamleft.webp"
                alt="تكنومصر لتصميم مواقع و متاجر الكترونية و برمجة التطبيقات"
              />
            </div>
            <p>
              الإلتزام الفردي بجهد الفريق هو ما يؤدى بالنهاية إلى تنفيذ الأهداف
              المحددة بسرعة وبدقة متناهيه وهو السب الرئيسى فى تقدم المجتمعات
            </p>
            <div class="link">
              <a
                href="/teamMembers"
                class="btn m-b-10 gradient-top text-white p-10"
              >
                تعرف علي فريق العمل
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.team-work {
  .overlay {
    &::before {
      content: unset;
    }
    // background: unset !important;
  }
  .col {
    padding: 0;
  }
  .courses-section {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 30px 30px 50px;
    transition: all 0.3s ease-in-out;
    position: relative;
    .image {
      min-height: 300px;
      max-height: 300px;
      overflow: hidden;
    }
    p {
      min-height: 50px;
    }
    .link {
      a {
        margin: 0 4px;
      }
    }
    .logo {
      &:hover {
        transform: rotate(720deg);
      }
      position: absolute;
      width: 100px;
      height: 100px;
      padding-top: 30px;
      background-color: white;
      border: dashed 2px #005384;
      top: 50%;
      left: 0;
      margin-left: -50px;
      margin-top: -50px;
      // transform: translate(-50%, -50%);
      z-index: 8;
      transition: all 0.4s ease-in-out;
    }

    @media (max-width: 992px) {
      .logo {
        // top: 50%;
        // margin-bottom: -50px;
        // left: 50%;
        // margin-right: -50px;
        top: 100%;
        left: 50%;
        bottom: 0 !important;
      }
    }
    p {
      color: #000;
      transition: all 0.3s ease-in-out;
      min-height: 50px;
    }
  }
  .team-section {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 30px 30px 50px;
    transition: all 0.3s ease-in-out;
    border-top: dashed 2px #005384;
    .image {
      min-height: 300px;
      max-height: 300px;
      overflow: hidden;
    }

    p {
      color: #000;
      transition: all 0.3s ease-in-out;
    }
    @media (min-width: 992px) {
      border-right: dashed 2px #005384;
      border-top: unset;
    }
    @media (max-width: 992px) {
      padding-top: 60px;
    }
  }
}
.gradient-top {
  display: inline-block;
  position: relative;
  background: #005384;
  color: white;
  z-index: 0;
  border: 0;
}
.p-10 {
  padding: 10px;
}
</style>
