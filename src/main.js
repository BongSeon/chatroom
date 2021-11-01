import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { app, db } from './firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import './css/app.css'
import './css/app.sass'

let _app

const auth = getAuth()
onAuthStateChanged(auth, () => {
  if(!_app){
    //console.log('onAuthStateChanged: ')
    _app = createApp(App).use(router).mount('#app')
  }
})

