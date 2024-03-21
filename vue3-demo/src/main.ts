// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.errorHandler = (err) => {
  console.log('err', err)
}
app.config.globalProperties.$aa = 10

app.use(createPinia())
app.use(router)

app.mount('#app')
