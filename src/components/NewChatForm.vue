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
import { ref } from 'vue'

import { Timestamp } from 'firebase/firestore'
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'

export default {
  setup() {
    const message = ref('')

    const { user } = getUser()
    const { error, addDocument } = useCollection('messages')

    // enter 또는 send 버튼을 눌렀을 때
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: Timestamp.now()
      }

      await addDocument(chat)
      if (!error.value) {
        message.value = ''
      }
    }

    return { message, handleSubmit, error }
  }
}
</script>

<style scoped>
.chat-message {
  background: #15171E;
  border-top: 1px solid #999;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  max-height: 70px;
  /* padding: 30px; */
  bottom: 0px;
}
textarea {
  width: 70%;
  margin: 10px;
  font: 14px/22px "Lato", Arial, sans-serif;
  /* border-radius: 5px; */
  /* resize: none; */
}
button {
  margin: 10px;
  width: 15%;
}
</style>