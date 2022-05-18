<template>
  <div class="contact-us">
    <div class="top" data-aos="fade-in">
      <img src="@/assets/contact-us.png" alt="technomasr" />
      <div class="content">
        <div class="container position-relative title-fade-in">
          <h2 class="main-title fs-2 mb-0">تواصل معنا</h2>
          <p class="withbg"></p>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="row contacts">
            <div class="contact" data-aos="zoom-in">
              <h4>اتصل بنا</h4>
              <a class="main-color" href="mailto:info@technomasr.com">
                <span>
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
                info@technomasr.com
              </a>
              <a class="main-color" href="tel:0502265598">
                <span>
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </span>
                01097225751
              </a>
              <a class="main-color" href="tel:0502265598">
                <span>
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </span>
                0502265598
              </a>
            </div>
            <div>
              <div
                class="mb-0 address main-color fs-5 fs-lg-4 mb-5"
                data-aos="zoom-in"
              >
                <h4>
                  الموقع
                </h4>

                <address class="d-flex">
                  <span class="d-block">
                    <font-awesome-icon :icon="['fas', 'map-marker']" />
                  </span>
                  <span class="d-block">
                    المنصورة
                    <br />
                    ش المطافي
                    <br />
                    برج الدالي الدور التاسع
                  </span>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8" data-aos="zoom-in">
          <div class="form mb-4 px-xl-5">
            <b-form @submit="send()">
              <div class="row">
                <div>
                  <b-form-group>
                    <b-form-input
                      id="name"
                      v-model="form.name"
                      type="text"
                      placeholder="الاسم"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div>
                  <b-form-group>
                    <b-form-input
                      id="phone"
                      v-model="form.phone"
                      type="phone"
                      placeholder="رقم الهاتف"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div>
                  <b-form-group>
                    <b-form-input
                      id="email"
                      v-model="form.email"
                      type="email"
                      placeholder="البريد الإلكتروني"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div>
                  <b-form-group>
                    <b-form-textarea
                      id="textarea"
                      v-model="message"
                      placeholder="نص الرسالة"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                </div>
              </div>
              <b-button type="submit" class="w-100" variant="primary">
                إرسال
              </b-button>
            </b-form>
          </div>
        </div>
      </div>
      <!-- <div class="info text-center text-lg-end">
        <p class="mb-0 main-color fs-5 fs-lg-4 text-center mb-5">
          <span><font-awesome-icon :icon="['fas', 'map-marker']" /></span>
          المنصورة , ش المطافي برج الدالي الدور التاسع
        </p>
      </div>
       -->
      <!-- 
      <div class="row justify-content-center">
        <div class="col-md-9">
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
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  data() {
    return {
      form: { name: '', email: '', phone: '', message: '' },
    }
  },
  created() {
    AOS.init()
  },
}
</script>

<style lang="scss" scoped>
.ml-2 {
  margin-left: 10px;
}
.form {
  input {
    height: 60px;
    border-radius: 15px;
    padding: 10px 20px;
  }
  textarea {
    border-radius: 15px;
    padding: 10px 20px;
    height: 180px;
  }
  button {
    height: 60px;
    width: fit-content !important;
    border-radius: 15px;
    padding: 10px 40px;
  }
}
.row.contacts {
  margin-bottom: 50px;
  .col {
    &:first-child {
      border-left: 1px solid;
    }
  }
  .contact {
    h4 {
      margin-bottom: 20px;
      color: #011f31;
      font-weight: bold;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    a {
      display: flex;
      color: #777 !important;
      margin-bottom: 10px;
      font-size: 16px;
      span {
        display: inline-flex;
        align-items: center;
        width: 30px;
        font-size: 18px;
      }
    }
  }
  .address {
    h4 {
      margin-top: 50px;
      margin-bottom: 20px;
      color: #011f31;
      font-weight: bold;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    address {
      color: #777 !important;
      span {
        &:first-child {
          font-size: 18px;
          width: 30px;
        }
      }
    }
  }
  // .info {
  //   text-align: center;
  //   margin-bottom: 10px;
  //   // > div {
  //   //   a {
  //   //     transition: all 0.3s;
  //   //     display: inline-block;
  //   //     width: 100%;
  //   //     svg {
  //   //       font-size: 35px !important;
  //   //       margin-bottom: 8px;
  //   //     }
  //   //   }
  //   // }
  // }
}
</style>
