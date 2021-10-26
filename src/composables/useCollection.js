import { collection } from '@firebase/firestore'
import { ref } from 'vue'
//import { db } from '../firebase/config'

const useCollection = (_collection) => {
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null
    
    await collection(_collection).add(doc)
  }

  return { error, addDoc }
}

export default useCollection