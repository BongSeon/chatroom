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
          <Social v-if="isSocial" />
          <Chat v-else @clickAvatar="handleAvatarClick" />
        </div>
      </div><!-- row home -->
    </div><!-- container-md -->
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Sidebar from '../components/Sidebar.vue'
import Social from '../components/Social.vue'
import Chat from '../components/Chat.vue'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { getAuth } from "firebase/auth";

export default {
  components: { Sidebar, Social, Chat },

  setup() {
    const router = useRouter()
    const auth = getAuth();
    //ref
    const user = ref(null)
    const isSocial = ref(false)
    const drawer = ref(false)

    user.value = auth.currentUser;
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
.sidearea {
  display: block;
  height: 100%;
}
.mainarea {
  height: 100%;
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