<template>
  <div class="service pt-5">
    <div class="container">
      <div class="position-relative title-fade-in">
        <h2 class="main-title mb-0">
          تصميم متجر إلكتروني
        </h2>
        <p class="text-center"></p>
      </div>
      <div class="row flex-row-reverse py-5 content-fade-in">
        <div class="image col-md-6 px-5">
          <img
            src="@/assets/Web-Design.png"
            class="img-fluid"
            alt="technomasr"
          />
        </div>
        <div class="info mb-5 mb-lg-0 col-md-6 mt-5 px-5 fade-in-right">
          <div>
            <h2 class="fs-4 main-color">
              تصميم متجر إلكتروني
            </h2>
            <p class="lh-md mb-5">
              ننشئ لك متجر إلكتروني إحترافي متكامل مع الربط بوسائل الدفع والشحن
              لتجارة إلكترونية متكاملة تستطيع من خلالها القيام بنشاطك التجاري
              بشكل إحترافي والتواصل مع العملاء ومتابعة طلباتهم بأقل مجهود ممكن.
              هل تساءلت يوماً كيف أمكن لبعض التجار الجدد أن يتوسعوا في تجارتهم
              خلال أزمة كورونا عام 2020؟ بل هل تساءلت كيف أمكنهم التجارة بنجاح
              بدون افتتاح أماكن للتجارة؟ سوف تجد نفسك بالطبع أمام إجابة واحده لا
              بديل لها، وهي حقيقة واقعية تجاهلها الكثيرون وأدت بهم في النهاية
              إلى عدم تدارك التطور الهائل في تكنولوجيا المعلومات، والإجابة هي
              التجارة الإلكترونية بواسطة المتاجر التي يتم إنشائها على المواقع
              الإلكترونية والتطبيقات الذكية على أجهزة الجوال والتي توفر العديد
              من المميزات للتجار وعملائهم على حد السواء.
            </p>
          </div>
        </div>
      </div>
      <div class="row py-5 content-fade-in">
        <div class="image col-md-6 px-5">
          <img src="@/assets/social.png" class="img-fluid" alt="technomasr" />
        </div>
        <div class="info mt-5 mt-lg-0 col-md-6 fade-in-right">
          <div>
            <h2 class="fs-4 mb-3 main-color">
              مميزات إنشاء متجر إلكتروني
            </h2>
            <ul class="list-unstyled p-0">
              <li>
                <div class="icon">
                  <img src="@/assets/setting.png" class="img-fluid" alt="" />
                </div>
                يمكنك من خلال إنشاء متجرك الإلكتروني التخلي بشكل كامل أو جزئي عن
                التجارة وجهاً لوجه والتي في بعض الحالات تضع عليك مسؤليات
                ومصروفات أكبر بكثير من مكاسبها
              </li>
              <li>
                <div class="icon">
                  <img src="@/assets/setting.png" class="img-fluid" alt="" />
                </div>
                يمكنك من خلال إنشاء متجرك الإلكتروني التخلي بشكل كامل أو جزئي عن
                التجارة وجهاً لوجه والتي في بعض الحالات تضع عليك مسؤليات
                ومصروفات أكبر بكثير من مكاسبها
              </li>
              <li>
                <div class="icon">
                  <img src="@/assets/setting.png" class="img-fluid" alt="" />
                </div>
                يمكنك من خلال إنشاء متجرك الإلكتروني التخلي بشكل كامل أو جزئي عن
                التجارة وجهاً لوجه والتي في بعض الحالات تضع عليك مسؤليات
                ومصروفات أكبر بكثير من مكاسبها
              </li>
              <li>
                <div class="icon">
                  <img src="@/assets/setting.png" class="img-fluid" alt="" />
                </div>
                يمكنك من خلال إنشاء متجرك الإلكتروني التخلي بشكل كامل أو جزئي عن
                التجارة وجهاً لوجه والتي في بعض الحالات تضع عليك مسؤليات
                ومصروفات أكبر بكثير من مكاسبها
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="py-5 features content-fade-in">
        <div class="position-relative title-fade-in">
          <h2 class="main-title mb-0">
            مميزات المتجر الإلكتروني من تكنو مصر
          </h2>
          <p class="text-center">مميزات المتجر الإلكتروني من تكنو مصر</p>
        </div>
        <ul class="row list-unstyled fade-in-right pt-3">
          <li class="col-md-6" v-for="n in 9" :key="n">
            <div class="icon">
              <img src="@/assets/setting.png" class="img-fluid" alt="" />
            </div>
            يمكنك من خلال إنشاء متجرك الإلكتروني التخلي بشكل كامل أو جزئي عن
            التجارة وجهاً لوجه والتي في بعض الحالات تضع عليك مسؤليات ومصروفات
            أكبر بكثير من مكاسبها
          </li>
        </ul>
      </div>

      <div class="pricing mb-5" id="pricing">
        <div class="position-relative title-fade-in mb-5">
          <h2 class="main-title">عروض مناسبة لجميع الأفراد والشركات</h2>
          <p class="text-center">
            أسعار تصميم المواقع الالكترونية
          </p>
        </div>
        <div class="container">
          <div class="box">
            <div class="title">Basic</div>
            <img src="imgs/hosting-basic.png" alt="" />
            <div class="price">
              <span class="amount">$15</span>
              <span class="time">Per Month</span>
            </div>
            <ul>
              <li>10GB HDD Space</li>
              <li>5 Email Addresses</li>
              <li>2 Subdomains</li>
              <li>4 Databases</li>
              <li>Basic Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div class="box popular">
            <div class="label">Most Popular</div>
            <div class="title">Advanced</div>
            <img src="imgs/hosting-advanced.png" alt="" />
            <div class="price">
              <span class="amount">$25</span>
              <span class="time">Per Month</span>
            </div>
            <ul>
              <li>20GB HDD Space</li>
              <li>10 Email Addresses</li>
              <li>5 Subdomains</li>
              <li>8 Databases</li>
              <li>Advanced Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
          <div class="box">
            <div class="title">Professional</div>
            <img src="imgs/hosting-professional.png" alt="" />
            <div class="price">
              <span class="amount">$45</span>
              <span class="time">Per Month</span>
            </div>
            <ul>
              <li>50GB HDD Space</li>
              <li>20 Email Addresses</li>
              <li>10 Subdomains</li>
              <li>20 Databases</li>
              <li>Professional Support</li>
            </ul>
            <a href="#">Choose Plan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withBtn: Boolean,
    withTitle: Boolean,
  },
}
</script>

<style lang="scss" scoped>
$main-transition: 0.3s;
$main-color: #2196f3;
$main-color-alt: #1787e0;

.service {
  transition: all 0.3s;

  ul li {
    margin-bottom: 10px;
    display: flex;

    .icon {
      padding-left: 20px;
      max-width: 90px;
      height: auto;
    }
  }
  .features {
    ul li {
      margin-bottom: 30px;
      display: flex;
      // padding: 20px 10px;
      .icon {
        padding-left: 20px;
        max-width: 90px;
        height: auto;
      }
    }
  }
}
.pricing {
  position: relative;
}
.pricing .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}
.pricing .box {
  position: relative;
  box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  transition: $main-transition;
  background: white;
  text-align: center;
  z-index: 1;
}
.pricing .box::before,
.pricing .box::after {
  content: '';
  width: 0;
  height: 50%;
  background-color: #f6f6f6;
  position: absolute;
  z-index: -1;
  transition: $main-transition;
}
.pricing .box::before {
  left: 0;
  top: 0;
}
.pricing .box::after {
  right: 0;
  bottom: 0;
}
.pricing .box:hover::before,
.pricing .box:hover::after {
  width: 100%;
}
@media (min-width: 1200px) {
  .pricing .box.popular {
    top: -20px;
  }
}
.pricing .box.popular .label {
  position: absolute;
  writing-mode: vertical-rl;
  background-color: $main-color;
  color: white;
  font-weight: bold;
  padding: 10px 10px 35px 10px;
  font-size: 18px;
  right: 20px;
  width: 40px;
}
.pricing .box.popular .label::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-color: transparent transparent white;
  border-width: 20px;
}
.pricing .box .title {
  font-weight: bold;
  margin: 30px 0;
  font-size: 25px;
  letter-spacing: -1px;
}
.pricing .box img {
  width: 80px;
  margin-bottom: 30px;
}
.pricing .box .price {
  margin-bottom: 20px;
}
.pricing .box .amount {
  display: block;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 5px;
  color: $main-color;
}
.pricing .box .time {
  color: #777;
}
.pricing .box ul {
  text-align: left;
}
.pricing .box ul li {
  padding: 20px;
  border-top: 1px solid #eee;
}
.pricing .box ul li::before {
  font-family: 'Font Awesome 6 Free';
  content: '\f00c';
  margin-left: 10px;
  font-weight: 900;
  color: $main-color;
}
.pricing .box a {
  display: block;
  width: fit-content;
  border: 2px solid $main-color;
  color: $main-color;
  margin: 30px auto 40px;
  padding: 15px 20px;
  border-radius: 6px;
  font-weight: bold;
  transition: $main-transition;
}
.pricing .box a:hover {
  background-color: $main-color-alt;
  border-color: $main-color-alt;
  color: white;
}
</style>
