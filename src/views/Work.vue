<template>
  <div class="work">
    <div class="top">
      <img class="img-fluid" src="@/assets/www.png" alt="" />
      <div class="content">
        <div class="container position-relative">
          <h2 class="main-title">بتاع تنمية بشرية</h2>
          <p class="text-center d-none"></p>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="work-holder title-fade-in">
        <img
          class="img-fluid"
          src="https://smartvision4p.com/public//adminPanel/admin/uploads/projects/scroll_image-53.jpg"
          alt=""
        />
      </div>
      <div class="mb-5">
        <p class="text-center fs-5 mb-2 main-color px-4">
          صوت الطبيعة هو متجر الكتروني لكافة مُستلزمات الحيوانات الأليفة. مثلك
          تمامًا؛ نحن نُحب الحيوانات الأليفة، ونعتقد أنها أصبحت جزء من المنزل،
          ولهذا السبب تم تصميم كل شيء نقوم به في متجر صورلمساعدة حيواناتك
          الأليفة على أن تعيش حياة صحيّة وسعيدة.. فقط فكّر بنا كمتجر صديق
          لحيوانك الأليف وستجد كل ذلك.
        </p>
      </div>
      <div class="intro-btns title-fade-in">
        <a href="#" class="view-more btn btn-primary text5 wow fadeInUp">
          <span class="ml-2">اطلب موقعك الان</span>
          <font-awesome-icon :icon="['fas', 'caret-left']" />
        </a>

        <a href="#" class="btn btn-primary">
          <span class="ml-2">مشاهدة الموقع</span>
          <font-awesome-icon :icon="['fas', 'caret-left']" />
        </a>
      </div>

      <div class="sec-header text-center py-11 title-fade-in">
        <h2 class="d-inline-block main-title mb-2">
          <span class="fs-4 main-color">
            خصائص تصميم بتاع تنمية بشرية
          </span>
        </h2>
        <p class="text-center">
          .نقدم تصميم موقع ويب الكترونى فريد من حيث المضمون. سهل التصفح من حيث
          المحتوى مرن في الاستخدام من حيث طريقة عرض الخدمات ذا مظهر جذاب ليصبح
          تصميم الموقع كما تحب أن .تراه وكما يجب أن يكون
        </p>
      </div>

      <div class="row py-11">
        <div class="col-md-6" v-for="n in 4" :key="n">
          <div class="why-sec d-flex align-items-center">
            <div class="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path
                  id="Subtraction_13"
                  data-name="Subtraction 13"
                  d="M35,70a35,35,0,0,1-24.75-59.749,35,35,0,0,1,49.5,49.5A34.77,34.77,0,0,1,35,70ZM14.933,17.734V37a15.966,15.966,0,0,0,2.685,8.959c4.379,6.375,12.175,6.87,14.459,6.87.288,0,.509-.007.611-.013h1.262c-3.316-.552-9.4-2.292-12.9-7.705a14.241,14.241,0,0,1-2.68-8.075V20.944H28.693a14.567,14.567,0,0,1,7.073,1.837,11.443,11.443,0,0,1,6.056,9.408v8.045l3.345,3.376V32.2a15,15,0,0,0-.853-4.7,14.1,14.1,0,0,0-6.565-7.857,15.605,15.605,0,0,0-7.467-1.908H14.933ZM25.1,26.98v11.4a14.954,14.954,0,0,0,.854,4.692,14.1,14.1,0,0,0,6.565,7.85A15.56,15.56,0,0,0,39.97,52.83H55.323V32.961a13.58,13.58,0,0,0-.792-4.572,15.812,15.812,0,0,0-5.047-7.218c-4.264-3.331-9.436-3.4-12.527-3.436h-.652l.309.11c6.417,2.087,11.8,5.81,13.707,9.482a11.1,11.1,0,0,1,1.428,5.854V49.62H41.56A14.592,14.592,0,0,1,35.1,48.105a11.522,11.522,0,0,1-6.234-7.323,12.458,12.458,0,0,1-.423-3.229v-7.2Z"
                  fill="#212a4e"
                ></path>
              </svg>
            </div>
            <div class="txt">
              امكانية اضافة العملات التى ترغب بها لشراء جميع مستلزمات الحيوانات
              و الطيور و الاسماك
            </div>
          </div>
        </div>
      </div>

      <div class="sec-header text-center py-11 title-fade-in">
        <h2 class="d-inline-block main-title mb-2">
          <span class="fs-4 main-color">
            صفحات الموقع
          </span>
        </h2>
        <p class="text-center">
          .نقدم تصميم موقع ويب الكترونى فريد من حيث المضمون. سهل التصفح من حيث
          المحتوى مرن في الاستخدام من حيث طريقة عرض الخدمات ذا مظهر جذاب ليصبح
          تصميم الموقع كما تحب أن .تراه وكما يجب أن يكون
        </p>
      </div>

      <div class="row py-11">
        <div class="block col-md-4 col-xs-12" v-for="n in 6" :key="n">
          <div class="inner">
            <div class="i-img">
              <img
                src="https://smartvision4p.com/public/admin/uploads/projects/164899504431871.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="title d-flex justify-content-between">
        <h5>
          الخدمة :
          <span>تطبيقات الهاتف المحمول</span>
        </h5>
        <div class="link mb-2 text-end">
          <span class="text-center">
            رابط
          </span>
          <span>
            <a href="#">https://www.technomasr.com</a>
          </span>
        </div>
      </div>

      <div class="info">
        <div class="text pt-3 text-center">
          <h3>نبذه عن المشروع</h3>
          <p>تطبيق يساعد على تنمية الذات وتحقيق الأهداف والنجاح</p>
        </div>
      </div>
      <div class="control d-flex justify-content-between pt-5">
        <a href="#">السابق</a>
        <router-link to="/our-works">
          <font-awesome-icon :icon="['fas', 'border-all']" />
        </router-link>
        <a href="#">التالي</a>
      </div> -->
      <div class="related pt-5 mt-5">
        <h5>مشاريع ذات صلة</h5>
        <div class="row justify-content-start">
          <div class="col-sm-6 col-md-4" v-for="n in 3" :key="n">
            <our-work-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OurWorkCard from '@/components/OurWorkCard.vue'
export default {
  components: { OurWorkCard },
}
</script>

<style scoped lang="scss">
.title {
  h5 {
    font-size: 18px;
    span {
      font-size: 14px;
    }
  }
}

.work-holder {
  border-radius: 25px;
  box-shadow: 0 0 55px rgb(0 0 0 / 18%);
  height: 570px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  margin-bottom: 50px;
  overflow-y: auto;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    display: none;
  }
}
.inner {
  height: 400px;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: 0 0 15px rgb(0 0 0 / 12%);
  margin-bottom: 30px;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    display: none;
  }
}
.intro-btns {
  text-align: center;
  a {
    border-radius: 20px;
    transition: 0.3s;
    padding: 10px 20px;
    span {
      margin-left: 10px;
    }
    &:first-child {
      margin-left: 20px;
    }
    &:hover {
      transform: translateX(-10px);
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
.py-11 {
  padding: 60px 0;
}
.link {
  display: table;
  table-layout: fixed;
  span {
    min-width: 108px;
    font-weight: 600;
    display: table-cell;
    color: #111;
  }
}
.control {
  a {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    margin: 0;
    padding: 0 15px 0 0;
    position: relative;
  }
}

.why-sec {
  background: #fff;
  border-radius: 25px;
  padding: 20px;
  margin: 15px 0;
  border: 1px solid #f7f7f7;
  transition: all 0.3s;

  .img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 0 0 20px;
    svg {
      path {
        fill: #011f31;
      }
    }
  }
  &:hover {
    border-color: #011f31;
    .img {
      transition: all 0.5s ease-in-out;
      transform: rotateZ(360deg) translateZ(-30px);
    }
  }
  .why-sec .txt {
    width: calc(100% - 90px);
    font-size: 15px;
    line-height: 30px;
    color: #434343;
  }
}

.related > h5 {
  font-size: 18px;
  text-transform: uppercase;
  position: relative;
  z-index: 10;
  display: inline-block;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.67;
  color: #111;
}
</style>
