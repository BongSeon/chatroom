import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { app } from './firebase/config'
import getUser from './composables/getUser'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import './css/main.css'

//const { user } = getUser()

let _app

  const auth = getAuth()
  onAuthStateChanged(auth, () => {
    if(!_app){
      console.log('onAuthStateChanged: ')
      _app = createApp(App).use(router).mount('#app')
    }
  })

