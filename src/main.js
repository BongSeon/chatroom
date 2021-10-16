import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { app } from './firebase/config'
import getUser from './composables/getUser'

import './css/main.css'

const { listenAuthStateChange } = getUser()
listenAuthStateChange()

createApp(App).use(router).mount('#app')
