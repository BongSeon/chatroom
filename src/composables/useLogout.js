import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'

const error = ref(null)

const logout = async () => {
  error.value = null

  const auth = getAuth()
  signOut(auth)
}

const useLogin = () => {
  return { logout, error }
}

export default useLogin