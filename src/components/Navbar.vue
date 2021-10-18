<template>
  <nav v-if="user">
    <div>
      <p>hey there ... displayname</p>
      <p class="email">Current logged in as ... {{ user.email }}</p>
      <button @click="handleLogout">logout</button>
    </div>
  </nav>
  <nav v-else>
    <!-- <div>
      <p>다시 로그인해 주세요</p>
      <button @click="handleGoHome">홈으로</button>
    </div> -->
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'


export default {
  setup() {
    const router = useRouter()
    const { user, listenAuthStateChange } = getUser()
    listenAuthStateChange()

    const { logout, error } = useLogout()
    
    const handleLogout = () => {
      logout()
    }

    const handleGoHome = () => {
      router.push({ name: 'Welcome' })
    }

    onMounted(() => {
      setTimeout(() => {
        console.log('mavbar mounted!')
        // login check
        console.log(user.value)
        if(!user.value) {
          router.push({ name: 'Welcome' })
        }
      }, 100);
    })

    return { user, handleLogout, error, handleGoHome }
  }
}
</script>

<style>
nav {
  width: 30%;
  height: 100vh;
  background: #090909;
}
</style>