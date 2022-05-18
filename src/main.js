import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/style/main.scss'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'
library.add(fas)
library.add(fab)
library.add(far)

const app = createApp(App)

app.AOS = new AOS.init()
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(i18n)
app.use(store)
app.use(AOS)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
