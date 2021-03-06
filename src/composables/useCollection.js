import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const useCollection = (collectionName) => {
  const error = ref(null)

  const addDocument = async (doc) => {

    try {
      const docRef = await addDoc(collection(db, collectionName), doc);

      // console.log("Document written with ID: ", docRef.id)
      error.value = null
    } catch (err) {
      console.error("Error adding document: ", err);
      error.value = err
    }
    
  }

  return { error, addDocument }
}

export default useCollection