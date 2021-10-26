<template>
  <nav>
    <button @click="handleClick" type="button" class="btn btn-light">Avatar</button>
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

<style>

</style>