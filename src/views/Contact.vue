<template>
  <div class="our-services py-50 mt-5">
    <!-- <div class="map m-b-30">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13675.833764016936!2d31.3732275!3d31.0274075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x859ee8ea1a8da4ae!2sTechnomasr%20for%20web%20solutions!5e0!3m2!1sen!2seg!4v1596684538546!5m2!1sen!2seg"
        width="600"
        class="w-100"
        height="450"
        frameborder="0"
        style="border: 0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div> -->
    <div class="container mt-5">
      <div class="row contacts justify-content-center">
        <div class="col-lg-4 info">
          <div>
            <a class="main-color fs-4" href="mailto:info@technomasr.com">
              <span class="d-block">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </span>
              info@technomasr.com
            </a>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 info">
          <div>
            <a class="main-color fs-4" href="tel:0502265598">
              <span class="d-block">
                <font-awesome-icon :icon="['fas', 'mobile']" />
              </span>
              01097225751
            </a>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 info">
          <div>
            <a class="main-color fs-4" href="tel:0502265598">
              <span class="d-block">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </span>
              0502265598
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form mb-4 px-xl-5">
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
        <div class="col-md-6">
          <div class="info text-center text-lg-end">
            <p class="mb-0 main-color fs-5 fs-lg-4 text-center mb-4">
              <span><font-awesome-icon :icon="['fas', 'map-marker']" /></span>
              المنصورة , ش المطافي برج الدالي الدور التاسع
            </p>
            <div class="map m-b-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13675.833764016936!2d31.3732275!3d31.0274075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x859ee8ea1a8da4ae!2sTechnomasr%20for%20web%20solutions!5e0!3m2!1sen!2seg!4v1596684538546!5m2!1sen!2seg"
                width="600"
                height="250"
                class="w-100"
                frameborder="0"
                style="border: 0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
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
      form: { name: '', email: '', phone: '', message: '' },
    }
  },
}
</script>

<style lang="scss" scoped>
.ml-2 {
  margin-left: 10px;
}

.row.contacts {
  margin-bottom: 50px;
  .info {
    text-align: center;
    margin-bottom: 10px;
    > div {
      a {
        border: 1px solid #0c6ea2;
        border-radius: 10px;
        padding: 20px 30px;
        transition: all 0.3s;
        display: inline-block;
        width: 100%;
        svg {
          font-size: 35px !important;
          margin-bottom: 8px;
        }
        &:hover {
          background-color: #0c6ea2 !important;
          color: #fff !important;
        }
      }
    }
  }
}
</style>
