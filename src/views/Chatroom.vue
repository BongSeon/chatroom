<template>
  <div class="chatroom">
    <h1>Chatroom</h1>
    <Navbar />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  components: { Navbar },

  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
    
    return { }
  }
}
</script>