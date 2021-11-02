<template>
    <div v-if="formattedDocuments" class="history" ref="messages">
        <div
          v-for="message in formattedDocuments"
          :key="message.id"
          class="single"
          :class="{ mySingle: message.name == user.displayName }"
        >
          <span class="avatar">아바타</span>
          <span>
            <div>
              <span class="name">{{ message.name }}</span>
              <span class="created-at">{{ message.createdAt }} ago</span>
            </div>
            <div class="ment">{{ message.message }}</div>
          </span>
        </div>
    <div class="error">{{ error }}</div>
    </div>
</template>

<script>
    // const messages = ref([
    //   {
    //     id: 1,
    //     name: '마리오',
    //     message: '난 마리오다',
    //     createdAt: '시간'
    //   }
    // ])
import getUser from '../composables/getUser'
import getCollection from '../composables/getCollection'
import { ref, computed, onUnmounted, onUpdated, watchEffect } from 'vue'
import { formatDistanceToNow } from 'date-fns'


export default {
  setup() {
    const { user } = getUser()
    const { documents, error, unsubscribe } = getCollection('messages')
    
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })
    
    //
    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    // onUnmounted(() => {
    //   unsubscribe()
    // })

    watchEffect((onInvalidate) => {
      
      onInvalidate(() => unsubscribe())
    })

    return { user, formattedDocuments, error, messages }
  }

}
</script>

<style scoped>
.history {
  background: #15171E;
  /* height: 575px; */
  overflow-y: scroll;
  padding: 10px 10px;
}
.single {
  display: flex;
  width: 80%;
  color: #fff;
}
.ment {
  background: #22242A;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
.mySingle .name {
  display: none;
}
.mySingle .ment {
  color: #000;
  background: #7AC0FF;
}
.avatar {
  min-width: 50px;
  display: inline;
}
.mySingle .avatar {
  display: none;
}
.created-at {
  margin-left: 5px;
  color: #999;
  
}
</style>