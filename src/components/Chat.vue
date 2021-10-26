<template>
  <div class="chat">
    <div class="navbar">
      <Navbar @clickAvartar="handleClickAvatar" />
    </div>
    <div class="chat-header">
      chat-header
    </div>
    <div class="chat-history">
      chat-history
    </div>
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { NewChatForm, Navbar },
  setup(props, context) {

    const handleClickAvatar = () => {
      context.emit('clickAvatar')
    }
    return { handleClickAvatar }
  }
}
</script>

<style>
/* @import url('../css/chat.css'); */
.chat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #F2F5F8;
  color: #434651;
  height: 100%;
}

.chat .chat-header {
  background: #8993b9;
  /* padding: 5px; */
  /* border-bottom: 2px solid white; */
}
.chat .chat-history {
  background: #f1f1f1;
  height: 575px;
  overflow-y: scroll;
}
</style>