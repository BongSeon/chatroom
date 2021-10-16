import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  const auth = getAuth()

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.displayName + ' loged in')
    })
    .catch((_error) => {
      error.value = _error.message
      console.log('User Login fail => ' + error.value)
    })
}

const useLogin = () => {
  return { error, login }
}

export default useLogin