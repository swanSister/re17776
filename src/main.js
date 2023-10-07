import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './assets/fontello.css'
import mitt from 'mitt'
import router from './router'

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(router).mount('#app')
