import { ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const user = ref(null)

const listenAuthStateChange = () => {
  const auth = getAuth()
  onAuthStateChanged(auth, (_user) => {
    console.log('auth state changed: ', user)
    if (_user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = _user.uid
      // ...
    } else {
      // User is signed out
    }
    user.value = _user
  })
}

const getUser = () => {
  return { user, listenAuthStateChange }
}

export default getUser

