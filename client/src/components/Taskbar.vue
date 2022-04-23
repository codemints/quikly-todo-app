<template>
  <transition name="showTask">
    <section v-if="task" class="[ taskbar__wrapper ] [ bg-gray-500 ]">
      <div class="[ taskbar__container ]">
        <div class="[ form__group ]">
          <div class="[ form__icon ]">
            <i class="[ fa-regular fa-list ] [ icon ] [ text-theme-white ]"></i>
          </div>
          <div class="[ field__group ]">
            <label for="task-name">Enter a task title...</label>
            <input class="[ text-theme-white ]" id="task-name" type="text" placeholder="Enter a task title...">
          </div>
        </div>
        <div class="[ form__group ]">
          <div class="[ form__icon ]">
            <i class="[ fa-regular fa-flag-swallowtail ] [ icon ] [ text-theme-white ]"></i>
          </div>
          <div class="[ field__group ]">
            <p>Set task priority...</p>
          </div>
        </div>
        <div class="[ form__group ]">
          <div class="[ form__icon ]">
            <i class="[ fa-regular fa-clock ] [ icon ] [ text-theme-white ]"></i>
          </div>
          <div class="[ field__group ]">
            <label for="task-due"></label>
            <p>Set a due date for task...</p>
          </div>
        </div>
        <div class="[ form__group ]">
          <div class="[ form__icon ]">
            <i class="[ fa-regular fa-tag ] [ icon ] [ text-theme-white ]"></i>
          </div>
          <div class="[ field__group ]">
            <label for="task-category">Set category for task...</label>
            <input class="[ text-theme-white ]" id="task-category" type="text" placeholder="Set category for task...">
          </div>
        </div>
        <div class="[ form__group ]">
          <div class="[ form__icon ]">
            <i class="[ fa-regular fa-face-party ] [ icon ] [ text-theme-white ]"></i>
          </div>
          <div class="[ field__group ]">
            <label for="task-enthusiasm"></label>
            <p>Enthusiasm for task...</p>
          </div>
        </div>
        <Button
        :onClick="clicked"
        :classNames="['bg-red', 'text-white', 'red-hover']"
        >
          Create Task
        </Button>
        <i @click="clicked" class="[ fa-regular fa-chevrons-up ] [ cursor-pointer ]"></i>
      </div>
    </section>
  </transition>
</template>

<script>
  import Button from '@comps/globals/Button.vue'
  import { task, setTask } from '@/src/composables/add-task'

  export default {
    name: 'Taskbar',
    components: {
      Button
    },

    setup () {
      const clicked = () => {
        setTask(false)
      }

      return {
        task,
        clicked
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;

  .taskbar__wrapper {
    width: 100vw;
    padding-inline: 5rem;
    padding-block: 2rem;
    transition: $base;
  }

  .taskbar__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin-inline: auto;

    > div {
      flex: 0 1 auto;
    }
  }

  .form__group {
    display: flex;
    align-items: center;
    gap: 2rem;

    border-radius: 0.7rem;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1rem;
  }

  .icon {
    font-size: 2.4rem;
  }

  .field__group {
    label {
      display: block;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
    }

    p, input {
      font-family: $fontBody;
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 1;
      padding: 0;
      margin: 0;
    }

    p {
      color: rgba(255, 255, 255, 0.35);
      white-space: nowrap;
    }

    input {
      background-color: transparent;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.35);
      }
    }
  }

  i[class*="fa-chevrons-up"] {
    font-size: 2.4rem;
    color: white;
  }

  .showTask-enter-from,
  .showTask-leave-to {
    transform: translateY(-100%);
  }
  .showTask-enter-active,
  .showTask-leave-active {
    transition: $base;
  }
</style>