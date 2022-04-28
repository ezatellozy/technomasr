<template>
  <footer class="footer">
    <div class="container" :class="!routeContact ? 'py-50' : ''">
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
          class="text-center overflow-hidden px-5"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13675.833764016936!2d31.3732275!3d31.0274075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x859ee8ea1a8da4ae!2sTechnomasr%20for%20web%20solutions!5e0!3m2!1sen!2seg!4v1596684538546!5m2!1sen!2seg"
            width="650"
            frameborder="0"
            style="border: 0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="info text-center text-lg-end my-4">
            <p class="mb-0 text-white">
              <span><font-awesome-icon :icon="['fas', 'map-marker']" /></span>
              المنصورة , ش المطافي برج الدالي الدور التاسع
            </p>
            <div>
              <a href="mailto:info@technomasr.com" class="text-white">
                <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>
                info@technomasr.com
              </a>
            </div>
            <div>
              <a href="tel:0502265598" class="text-white">
                <span><font-awesome-icon :icon="['fas', 'mobile']" /></span>
                01097225751
              </a>
            </div>
            <div>
              <a href="tel:0502265598" class="text-white">
                <span><font-awesome-icon :icon="['fas', 'phone']" /></span>
                0502265598
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright mt-5 pt-2 pb-3 text-center bg-primary-color">
        <p class="text-white m-0">
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
}
</style>
