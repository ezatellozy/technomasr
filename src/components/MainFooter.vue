<template>
  <footer class="footer position-relative d-flex">
    <div class="container">
      <div class="logo w-100 position-relative" data-aos="fade-up">
        <img src="@/assets/logo.png" alt="technomasr" class="img-fluid" />
        <p class="mb-2 text-center">
          تكنو مصر للبرمجيات ولخدمات الويب والتسويق الرقمى
        </p>
      </div>
      <div class="row content" data-aos="fade-up">
        <div class="col-lg-5">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13675.833764016936!2d31.3732275!3d31.0274075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x859ee8ea1a8da4ae!2sTechnomasr%20for%20web%20solutions!5e0!3m2!1sen!2seg!4v1596684538546!5m2!1sen!2seg"
              style="width: 100%; height: 200px; border: 0;"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <!-- <div class="form mb-4">
            <b-form @submit="send()">
              <b-form-group>
                <b-form-input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="الاسم"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  id="phone"
                  v-model="form.phone"
                  type="phone"
                  placeholder="رقم الهاتف"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="البريد الإلكتروني"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-textarea
                  id="textarea"
                  v-model="message"
                  placeholder="نص الرسالة"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" class="w-100" variant="primary">
                إرسال
              </b-button>
            </b-form>
          </div> -->
        </div>
        <div class="col-lg-7 pt-5 pt-lg-0 text-center text-lg-end">
          <div class="row text">
            <div class="col-sm-6">
              <h3>
                موقعنا
              </h3>
              <div class="info">
                <p class="mb-2">
                  <font-awesome-icon :icon="['fas', 'location']" />
                  المنصورة , ش المطافي برج الدالي الدور التاسع
                </p>
              </div>
              <div
                class="social d-flex justify-content-center justify-content-lg-start"
              >
                <div>
                  <a href="https://www.linkedin.com/company/technomasr/">
                    <font-awesome-icon
                      size="lg"
                      :icon="['fab', 'linkedin-in']"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/technomasrco">
                    <font-awesome-icon
                      size="lg"
                      :icon="['fab', 'facebook-f']"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <h3 class="pt-5 pt-sm-0">
                تواصل معنا
              </h3>
              <div
                class="info d-flex justify-content-center justify-content-sm-start"
              >
                <div class="contain">
                  <div class="contact">
                    <a href="mailto:info@technomasr.com">
                      <ul class="list-unstyled p-0 d-flex">
                        <li>
                          <font-awesome-icon
                            size="lg"
                            :icon="['fas', 'envelope']"
                          />
                        </li>
                        <li>
                          info@technomasr.com
                        </li>
                      </ul>
                    </a>
                  </div>
                  <div class="contact">
                    <a href="tel:0502265598">
                      <ul class="list-unstyled p-0 d-flex">
                        <li>
                          <font-awesome-icon
                            size="lg"
                            :icon="['fas', 'mobile']"
                          />
                        </li>
                        <li>
                          01097225751
                        </li>
                      </ul>
                    </a>
                  </div>
                  <div class="contact">
                    <a href="tel:0502265598">
                      <ul class="list-unstyled p-0 d-flex">
                        <li>
                          <font-awesome-icon
                            size="lg"
                            :icon="['fas', 'phone']"
                          />
                        </li>
                        <li>
                          0502265598
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright text-center bg-primary-color">
        <p>
          كافة الحقوق محفوظة لشركة تكنو مصر للبرمجيات ولخدمات الويب والتسويق
          الرقمى 2014 - 2022
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
      routeContact: false,
    }
  },

  methods: {
    send() {
      console.log(this.form)
    },
  },
}
</script>

<style scoped lang="scss">
.footer {
  height: fit-content;

  .logo {
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
    z-index: 10;
    img {
      max-width: 150px;
    }
  }
  .content {
    min-height: 300px;
    padding-top: 30px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 1px;
      background-size: 100% 100%;
      background-image: url('@/assets/thinline.png');
    }
    &::after {
      content: '';
      position: absolute;
      top: -80px;
      left: 0;
      right: 0;
      background-image: url('@/assets/fff.png');
      background-size: 100% 100%;
      height: 125px;
      z-index: -1;
    }
  }
  .copyright {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    padding: 20px 0;
    p {
      color: #011f31;
      margin: 0;
      font-size: 14px;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-size: 100% 100%;
      background-image: url('@/assets/thinline.png');
    }
  }
  .row.text {
    h3 {
      font-size: 20px;
    }
    color: #555 !important;
  }
  .info {
    padding-top: 20px;
    .contact {
      a {
        ul {
          transition: all 0.3s;
          li:first-child {
            min-width: 20px;
            text-align: center;
          }
          li:last-child {
            padding-right: 10px;
          }
          &:hover {
            transform: translateX(-10px);
          }
        }
      }
    }
  }
  .social {
    padding-top: 20px;
    a {
      display: inline-flex;
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #555;
      border-radius: 50%;
      border: 1px solid #555;
      &:first-child {
        margin-right: 5px;
      }
      &:hover {
        transition: all 0.3s;
        background-color: #3b5998;
        border-color: #3b5998;
        color: #fff;
      }
    }
  }
  .contain {
    .contact {
      a {
        color: #555;
      }
    }
  }
}
</style>
