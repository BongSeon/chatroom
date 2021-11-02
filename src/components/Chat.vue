<template>
  <div class="chat">
    <ChatHeader class="chat-header"/>
    <ChatHistory class="chat-history"/>
    <NewChatForm class="new-chat-form"/>
  </div>
</template>

<script>
import ChatHeader from '../components/ChatHeader.vue'
import ChatHistory from '../components/ChatHistory.vue'
import NewChatForm from '../components/NewChatForm.vue'

export default {
  components: { ChatHeader, ChatHistory, NewChatForm },
  setup() {

  }
}
</script>

<style>
/* @import url('../css/chat.css'); */
.chat {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  background: #F2F5F8;
  color: #434651;
  /* border-radius: 0 10px 10px 0; */
}

.chat .chat-header {
  background: #a1a4ad;
  flex-basis: 50px; /* 고정값 */
  flex-shrink: 0; /* 아이템의 크기가 flex-basis 보다 작아지지 않게 하기 위해 */
}
.chat .chat-history {
  flex-basis: 90%;
  flex-grow: 1;
}
.chat .new-chat-form {
  /* border-radius: 0 0 10px 0; */
  flex-basis: 70px; /* 고정값 */
  flex-shrink: 0; /* 아이템의 크기가 flex-basis 보다 작아지지 않게 하기 위해 */
}

</style>