<template>
  <form @submit.prevent="handleSubmit">
    <input type="emmail" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>Log In</button>
    <div class="error">{{ error }}</div>
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
    
    const handleSubmit = async () => {
      //console.log(email.value, password.value);
      await login(email.value, password.value)
      if(!error.value) {
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>