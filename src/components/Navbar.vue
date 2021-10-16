<template>
  <nav v-if="user">
    <div>
      <p>hey there ... displayname</p>
      <p class="email">Current logged in as ... {{ user.email }}</p>
      <button @click="handleLogout">logout</button>
    </div>
  </nav>
</template>

<script>
// import { getAuth } from 'firebase/auth'
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  setup() {
    //const router = useRouter()
    // const auth = getAuth()
    // const user = auth.currentUser
    const { user } = getUser()


    const { logout, error } = useLogout()
    //console.log('getUser', user.value.email);
    
    const handleLogout = () => {
      logout()
      //router.push({ name: 'Welcome' })
    }

    return { user, handleLogout, error }
  }
}
</script>

<style>

</style>