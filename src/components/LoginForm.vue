<template>
  <form @submit.prevent="handleSubmit">
    <input type="emmail" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // refs
    const email = ref('')
    const password = ref('')
    
    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value);
    }

    return { email, password, handleSubmit }
  }
}
</script>

<style>

</style>