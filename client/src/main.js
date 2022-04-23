import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import '@ico/fontawesome/scss/fontawesome.scss'
import '@ico/fontawesome/scss/solid.scss'
import '@ico/fontawesome/scss/regular.scss'
import '@ico/fontawesome/scss/brands.scss'
import '@scss/main.scss'

createApp(App).use(createPinia()).mount('#app')
