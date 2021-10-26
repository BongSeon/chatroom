<template>
  <nav class="sidebar container" v-if="user">
    <div class="row justify-content-between">
      <div class="col email">{{ user.email }}</div>
      <div class="col">
        <button class="col btn-close btn-close-white" v-show="isDrawer" @click="clickClose" type="button" aria-label="Close"></button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <!-- {{ popup }} -->
      </div>
    </div>
    <div class="row">
      <button class="col" @click="handleLogout">logout</button>
    </div>
    <div class="row">
      <div class="col displayName mt-2">안녕하세요! <b class="text-warning">{{ user.displayName }}</b> 님!</div>
    </div>

  </nav>
  <nav v-else>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'
import { onMounted, popScopeId, ref } from 'vue'
import getUser from '../composables/getUser'

export default {
  props: ['isDrawer'],
  setup(props, context) {
    const router = useRouter()
    const { user } = getUser()

    const { logout, error } = useLogout()
    
    const handleLogout = () => {
      logout()
      router.push({ name: 'Welcome' })
    }

    const clickClose = () => {
      context.emit('clickClose')
    }

    onMounted(() => {
      
    })

    return { user, handleLogout, error, clickClose }
  }
}
</script>

<style>
.sidebar {
  height: 100%;
  background: #090909;
  padding: 0;
}
.sidebar .row {
  --bs-gutter-x: 0rem;
}

</style>