<template>
  <button
    @click="props.onClick"
    :class="props.classNames"
  >
    <slot></slot>
  </button>
</template>

<script>
  import { ref, onMounted } from 'vue'

  export default {
    name: 'Button',
    props: ['onClick', 'classNames'],
    
    setup (props) {

      return {
        props,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>