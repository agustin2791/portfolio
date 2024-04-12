<script lang="ts">
import {defineComponent, ref} from 'vue'
import TheWelcome from './components/TheWelcome.vue'

export default defineComponent({
  name: 'App',
  components: {TheWelcome},
  setup() {

  }
})
</script>

<template>
  <div style="width: 100%;">
    <the-welcome />
  </div>
</template>

<style scoped>

</style>
