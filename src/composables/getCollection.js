import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore"

const getCollection = (collectionName) => {
  const error = ref(null)
  const documents = ref(null)

  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, orderBy("createdAt"), limit(300))
  
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results = []
    querySnapshot.forEach((doc) => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })
    console.log(results);
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
  })

  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  return { documents, error, unsubscribe }
}

export default getCollection