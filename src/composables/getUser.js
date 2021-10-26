import { ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const user = ref(null)

const listenAuthStateChange = () => {
  const auth = getAuth()
  onAuthStateChanged(auth, (_user) => {
    console.log('user state changed: ', _user)
    user.value = _user
  })
}

const getUser = () => {
  const auth = getAuth()
  user.value = auth.currentUser

  return { user, listenAuthStateChange }
}

export default getUser

