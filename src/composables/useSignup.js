import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)

const signup = async (email, password, displayName) => {
  error.value = null

  const auth = getAuth()

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      updateProfile(auth.currentUser, {
        displayName: displayName, photoURL: "https://firebasestorage.googleapis.com/v0/b/aestagram-pwa.appspot.com/o/3ead7558-393f-4eb3-9a12-377560cd77d7.png?alt=media&token=6cc3b6ac-65b4-4df2-bcc4-5c77268fe1e7"
      }).then(() => {
        // Profile updated!
        console.log('Profile updated!', auth.currentUser)
      })
    })
    .catch((err) => {
      error.value = err.message
      console.log('User Create fail => ' + error.value)
    })
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup