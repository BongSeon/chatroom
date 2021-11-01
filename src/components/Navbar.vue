<template>
  <nav class="nav-bar">
    <img @click="handleClick" class="my-avatar small-screen-only" src="../assets/avatar-120x120.png" alt="">
    <img class="my-avatar disabled large-screen-only" src="../assets/avatar-120x120.png" alt="">
    <!-- <button @click="handleClick" type="button" class="my-avatar small-screen-only">smOnly</button> -->
    <!-- <button disabled type="button" class="my-avatar large-screen-only">lgOnly</button> -->
  </nav>
</template>

<script>
export default {
  setup(props, context) {
    const handleClick = () => {
      console.log('clickAvartar')
      context.emit('clickAvartar')
    }

    return { handleClick }
  }
}
</script>

<style scoped>
.nav-bar {
  position: relative;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  /* justify-content: space-between; */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.my-avatar {
  height: 30px;
  cursor: pointer;
}
.disabled {
  cursor: default;
}

</style>