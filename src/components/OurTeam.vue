<template>
  <section class="team-work" id="team">
    <div class="overlay">
      <div class="container py-50">
        <div class="row">
          <div class="courses-section col-lg-6 text-center text-white">
            <div class="image">
              <img
                src="https://technomasr.com/SiteAssets/style/images/teamright.webp"
                alt="دائما ما يوجد مكان لك داخل تكنو مصر فأنت مرحب بك دائما كلما استطعنا"
              />
            </div>
            <p>
              دائما ما يوجد مكان لك داخل تكنو مصر فأنت مرحب بك دائما كلما
              استطعنا
            </p>
            <div class="link">
              <a
                href="https://technomasr.com/TrainingOpportunities/فرص-التدريب"
                class="btn ms-md-4 mb-4 gradient-top text-white p-10"
              >
                فرص التدريب المتاحه
              </a>
              <a
                href="https://technomasr.com/JobOpportunities/فرص-العمل"
                class="btn mb-4 gradient-top text-white p-10"
              >
                إنضم لفريق العمل لدينا
              </a>
            </div>
            <div class="logo image rounded-circle">
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
                href="https://technomasr.com/TeamMembers/فريق-العمل"
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
  background: url('@/assets/teamwork.webp') no-repeat fixed center;
  background-size: cover;

  .col {
    padding: 0;
  }
  .courses-section {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 30px 30px 50px;
    transition: all 0.3s ease-in-out;
    position: relative;
    .image {
      width: 100%;
      height: 280px;
      overflow: hidden;
    }
    p {
      color: #000;
      transition: all 0.3s ease-in-out;
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
      bottom: -50px;
      left: 43%;
      z-index: 8;
      transition: all 0.4s ease-in-out;
    }

    @media (min-width: 992px) {
      padding-bottom: 30px;
      .logo {
        top: 43%;
        left: -50px;
      }
    }
  }
  .team-section {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 50px 30px 30px;
    transition: all 0.3s ease-in-out;
    border-top: dashed 2px #005384;
    .image {
      width: 100%;
      height: 280px;
      overflow: hidden;
    }
    p {
      color: #000;
      transition: all 0.3s ease-in-out;
    }
    @media (min-width: 992px) {
      border-right: dashed 2px #005384;
      border-top: unset;
      padding-bottom: 30px;
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
