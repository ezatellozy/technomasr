<template>
  <footer class="footer">
    <div class="container" :class="!routeContact ? 'pt-50' : ''">
      <div class="row" v-if="!routeContact">
        <div class="col-lg-6">
          <div class="form mb-4 px-5">
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
          </div>
        </div>
        <div
          :class="routeContact ? '' : 'col-lg-6 '"
          class="text-center overflow-hidden px-5 contacts"
        >
          <p class="mb-2 text-white text-center">
            <span><font-awesome-icon :icon="['fas', 'map-marker']" /></span>
            المنصورة , ش المطافي برج الدالي الدور التاسع
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13675.833764016936!2d31.3732275!3d31.0274075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x859ee8ea1a8da4ae!2sTechnomasr%20for%20web%20solutions!5e0!3m2!1sen!2seg!4v1596684538546!5m2!1sen!2seg"
            style="width: 100%; border: 0;"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="info row mt-2">
            <div class="contact">
              <a href="mailto:info@technomasr.com" class="text-white">
                <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>
                info@technomasr.com
              </a>
            </div>
            <div class="contact col-sm-6">
              <a href="tel:0502265598" class="text-white">
                <span><font-awesome-icon :icon="['fas', 'mobile']" /></span>
                01097225751
              </a>
            </div>
            <div class="contact col-sm-6">
              <a href="tel:0502265598" class="text-white">
                <span><font-awesome-icon :icon="['fas', 'phone']" /></span>
                0502265598
              </a>
            </div>
            <div class="social d-flex justify-content-center">
              <div>
                <a href="https://www.linkedin.com/company/technomasr/">
                  <font-awesome-icon size="lg" :icon="['fab', 'linkedin-in']" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/technomasrco">
                  <font-awesome-icon size="lg" :icon="['fab', 'facebook-f']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright mt-5 pb-3 text-center bg-primary-color">
        <p class="text-white m-0 pt-2">
          كافة الحقوق محفوظة لشركة تكنو مصر للبرمجيات ولخدمات الويب والتسويق
          الرقمى 2014 - 2022
        </p>
        <!--<img src="https://technomasr.com/SiteAssets/style/images/logo-white.png" alt="تكنومصر لتصميم مواقع و متاجر الكترونية و برمجة التطبيقات" class="logo" style="height: 35px; width: auto">-->
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
  mounted() {
    this.checkRoute()
  },
  methods: {
    send() {
      console.log(this.form)
    },
    checkRoute() {
      if (this.$route.path == '/contact-us') {
        this.routeContact = true
      } else {
        this.routeContact = false
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute()
    },
  },
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #011f31;
  .copyright {
    border-top: 1px solid #fff;
  }
  .contacts {
    .contact {
      a {
        display: inline-block;
        border: 1px solid #fff;
        padding: 10px;
        width: 100%;
        margin-bottom: 10px;
        border-radius: 10px;
        transition: 0.3s;
        &:hover {
          background-color: #0d6efd;
          // color: #fff;
          border-color: #0d6efd;
        }
      }
    }
    .social {
      a {
        display: inline-flex;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 50%;
        &:first-child {
          margin-right: 5px;
        }
        &:hover {
          transition: all 0.3s;
          background-color: #3b5998;
          color: #fff;
        }
      }
    }
  }
}
</style>
