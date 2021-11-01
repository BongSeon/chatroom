<template>
  <div class="jumbotron vertical-center"> 
    <div class="drawer" :class="{ on: drawer }">
      <Sidebar :isDrawer="true" @clickClose="handleCloseClick" />
    </div>
    <div class="container-md">
      <div class="row home">
        <div class="col-sm-4 sidearea">
          <Sidebar :isDrawer="false" />
        </div>
        <div class="col-sm-8 mainarea">
          <Navbar class="nav-bar" @clickAvartar="handleAvatarClick" />
          <Social v-if="isSocial" />
          <Chat v-else />
        </div>
      </div><!-- row home -->
    </div><!-- container-md -->
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import Social from '../components/Social.vue'
import Chat from '../components/Chat.vue'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'

export default {
  components: { Sidebar, Navbar, Social, Chat },

  setup() {
    const router = useRouter()
    //ref
    const { user } = getUser()
    const isSocial = ref(false)
    const drawer = ref(false)

    //listenAuthStateChange()
    if(!user.value){
      console.log('home에서로그아웃시킵니다',user.value);
      router.push({ name: 'Welcome' })
    }

    const handleCloseClick = () => {
      console.log('handleCloseClick')
      drawer.value = false
    }

    const handleAvatarClick = () => {
      console.log('handleAvatarClick')
      drawer.value = true
    }

    watch(user, () => {
      if(!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
    
    return { isSocial, drawer, handleCloseClick, handleAvatarClick }
  }
}
</script>

<style>
@import url('../css/home.css');

@media (min-width: 768px) {
  .container, .container-md, .container-sm {
    max-width: 768px;
  }
}

.home, .drawer {
  height: 95vh;
}

@media (max-width: 768px) {
  .home, .drawer {
    height: 100vh;
  }
}

.sidearea {
  display: block;
}
.mainarea {
    height: 100%;
}
.nav-bar {
  background: #2f3034;
  height: 5%;
}
.chat {
    height: 95%;
}

.drawer {
  display: none;
  position: fixed;
  width: 60%;
  /* height: 100%; */
  z-index: -10;
}

.on {
  display: block;
  z-index: 10;
}

@media (max-width: 576px) {
  .sidearea {
    display: none;
  }
}

@media (min-width: 576px) {
  .drawer {
    display: none;
  }
}



</style>