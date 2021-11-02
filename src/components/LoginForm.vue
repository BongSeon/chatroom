<template>
  <form @submit.prevent="handleSubmit">
    <input type="emmail" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log In</button>
    <div v-if="isLoading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const { error, login } = useLogin()
    // refs
    const email = ref('')
    const password = ref('')
    // loading
    const isLoading = ref(false)
    
    const handleSubmit = async () => {
      isLoading.value = true
      
      const user = await login(email.value, password.value)
      isLoading.value = false

      if(!error.value) {
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error, isLoading}
  }
}
</script>

<style>

</style>