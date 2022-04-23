<template>
  <header class="header__top">
    <section class="[ site__logo ]">
      <div class="[ logo ]">
        <img :src="!mode ? logoLight : logoDark" alt="">
      </div>
      <div class="[ tagline ]">
        <h4 class="[ text-gray-400 dark:text-gray-100 ]">A simple todo app to get stuff done</h4>
      </div>
    </section>
    <section class="[ task__button ]">
      <Button
        :onClick="clicked"
        :classNames="['bg-blue', 'text-white', 'blue-hover']"
      >
        <i class="[ fa-regular fa-plus ] [ mr-3 ]"></i> New Task
      </Button>
    </section>
  </header>
</template>

<script>
  import logoLight from '/logo.png'
  import logoDark from '/logo-white.png'

  import { mode } from '@/src/composables/mode'
  import { task, setTask } from '@/src/composables/add-task'
  import Button from '@comps/globals/Button.vue'

  export default {
    name: 'Header',
    components: {
      Button,
    },

    setup () {
      const clicked = () => {
        setTask(true)
      }
      

      return {
        logoLight,
        logoDark,
        mode,
        clicked,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;

  .header__top {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding-inline: 5rem;
    padding-block: 2rem;
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .site__logo {
    display: flex;
    align-items: center;
    gap: 5rem;

    .logo {
      border-right: 4px solid $red;
      padding-right: 5rem;
    }
  }

</style>