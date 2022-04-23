<template>
  <Header />
  <Taskbar />
  <TaskZone />
</template>

<script>
  import Header from '@comps/Header.vue'
  import Taskbar from '@comps/Taskbar.vue'
  import TaskZone from '@comps/TaskZone.vue'
  
  export default {
    name: 'App',

    components: {
      Header,
      Taskbar,
      TaskZone,
    },
    
    setup () {
      

      return {}
    }
  }
</script>

<style lang="scss" scoped>

</style>