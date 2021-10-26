<template>
  <form class="chat-message">
    <textarea
      placeholder="Type your message"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
    <button @click.prevent="handleSubmit">Send</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
// import useCollection from '../composables/useCollection'
// import { Timestamp } from 'firebase/firestore'

import getUser from '../composables/getUser'
export default {
  setup() {
    const { user } = getUser()
    // const { error, addDoc } = useCollection('messages')
    
    const error = ref(null)
    const message = ref('')

    // enter 또는 send 버튼을 눌렀을 때
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: Timestamp.now()
      }
      // console.log(chat);
      try {
        const docRef = await addDoc(collection(db, "messages"), chat);

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      // await addDoc(chat)
      // if (!error.value) {
      //   message.value = ''
      // }
    }

    return { message, handleSubmit, error }
  }
}
</script>

<style scoped>
.chat-message {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  /* padding: 30px; */
  bottom: 0px;
}
textarea {
  width: 70%;
  font: 14px/22px "Lato", Arial, sans-serif;
  /* border-radius: 5px; */
  /* resize: none; */
}
button {
  width: 15%;
}
</style>