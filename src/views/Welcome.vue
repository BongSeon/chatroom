<template>
  <div class="welcome container">
    <div class="header"></div>
    <div class="card">

      <img class="app-logo" src="../assets/app-logo.png" alt="logo">
      <h3>AestaChat</h3>
      <div v-if="!showLogin && !showSignup">
        <h4>친구들과 이야기를 나누세요!</h4>
        <button
          type="button"
          class="btn btn-outline-light"
          @click="showLogin = true"
        >
        로그인
        </button>
      </div>
      <div v-if="showLogin">
        <h2>Log In</h2>
        <LoginForm @login="enterChat" />
        <p>Not have sign up? then, <span @click="toggleForm">Sign In</span></p>
      </div>
      <div v-if="showSignup">
        <h2>Sign Up</h2>
        <SignupForm @signup="enterChat" />
        <p>You already registerd? <span @click="toggleForm">Log In</span> instead</p>
      </div>
    </div>

  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(false)
    const showSignup = ref(false)
    const router = useRouter()

    // 로그인 폼 <-> 사인업 폼 toggle
    const toggleForm = () => {
      showLogin.value = !showLogin.value
      showSignup.value = !showSignup.value
    }

    const enterChat = () => {
      console.log('enterChat')
      router.push({ name: 'Home' })
    }

    return { showLogin, showSignup, toggleForm, enterChat }
  }
}
</script>

<style scpoeds>
.welcome {
  background: #211f24;
  /* display: flex; */
  text-align: center;
  /* padding: 20px 0; */
  /* justify-content: center; */
  width: 100vw;
  height: 100vh;
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
  margin: 5% auto;
}
.header {
  height: 20%;
}
.card {
  background: #565359;
  margin: 0px auto;
  max-width: 700px;
  width: 80%;
  /* height: 40%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 576px) {
  .header {
    height: 0%;
  }
  .card {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
.app-logo {
  width: 7rem;
  height: 7rem;
  border-radius: 7rem;
  margin: 5% auto;
}

</style>
