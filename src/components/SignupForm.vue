<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Display Dame" v-model="displayName">
    <input type="emmail" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
    <div v-if="isLoading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    // loading
    const isLoading = ref(false)
    
    const handleSubmit = async () => {
      isLoading.value = true
      const user = await signup(email.value, password.value, displayName.value)
        isLoading.value = false
      if(!error.value) {
        console.log('before emit signup: ', user)
        context.emit('signup')
      }
    }

    return { displayName, email, password, handleSubmit, error, isLoading }
  }
}
</script>

<style>

</style>