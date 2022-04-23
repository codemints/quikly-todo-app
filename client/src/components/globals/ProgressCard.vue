<template>
  <article ref="taskList" :class="props.classnames">
    <div class="card__type">
      <h2>{{ props.name }}</h2>
    </div>
    <div class="card__body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'ProgressCard',
    props: [
      'name',
      'classnames',
    ],
    setup (props) {
      const taskList = ref(null)
      
      return {
        taskList,
        props,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;

  .card__type {
    color: white;
    text-transform: uppercase;
    font-family: $fontHeader;
    font-size: 1.8rem;
    line-height: 1;
    
    display: inline-block;
    border-start-start-radius: 0.7rem;
    border-start-end-radius: 0.7rem;

    padding-inline: 2.4rem;
    padding-block: 1.2rem;
  }

  .card__body {
    min-height: 5rem;
    background-color: $gray-200;
    padding: 2rem;
  }

  .card__task {
    .card__type {
      background-color: $red;
    }

    .card__body {
      border-top: 4px solid $red;
    }
  }
  
  .card__progress {
    .card__type {
      background-color: $yellow;
    }

    .card__body {
      border-top: 4px solid $yellow;
    }
  }
  
  .card__complete {
    .card__type {
      background-color: $green;
    }

    .card__body {
      border-top: 4px solid $green;
    }
  }

</style>