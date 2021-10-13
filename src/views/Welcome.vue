<template>
  <div class="welcome container">
    <h3>Welcome</h3>
    <div v-if="showLogin">
      <h2>Log In</h2>
      <LoginForm />
      <p>not have sign up? then, <span @click="showLogin = false">Sign In</span></p>
    </div>
    <div v-if="!showLogin">
      <h2>Sign Up</h2>
      <SignupForm />
      <p>You already registerd? <span @click="showLogin = true">Log In</span> instead</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(false)

    return { showLogin }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>
