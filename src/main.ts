import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import site styles
import '@mdi/font/css/materialdesignicons.min.css' // MDI font icons
import './styles/site.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
