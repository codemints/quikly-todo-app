<template>
  <section class="list__container">
    <div class="list__wrapper">
      <div class="list__column">
        <ProgressCard
          name="task"
          :classnames="['card__task']"
        >
          <Task />
        </ProgressCard>
      </div>
    </div>
    <div class="list__wrapper">
      <div class="list__column">
        <ProgressCard
          name="inprogress"
          :classnames="['card__progress']"
        >
          <h1>shit</h1>
        </ProgressCard>
      </div>
    </div>
    <div class="list__wrapper">
      <div class="list__column">
        <ProgressCard
          name="complete"
          :classnames="['card__complete']"
        >
          <h1>piss</h1>
        </ProgressCard>
      </div>
    </div>
  </section>
</template>

<script>
  import ProgressCard from '@comps/globals/ProgressCard.vue'
  import Task from '@comps/globals/Task.vue'
  
  export default {
    name: 'TaskZone',
    components: {
      ProgressCard,
      Task
    },
    setup () {
      

      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;

  .list__container {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    padding-inline: 10rem;
    padding-block: 5rem;
    transition: $base;
  }

  .list__wrapper {
    flex: 1 0 33%;

    &:first-of-type .list__column {
      margin-right: 1.5rem;
    }
    &:last-of-type .list__column {
      margin-left: 1.5rem;
    }

    &:not(:last-of-type, :first-of-type) .list__column {
      margin-inline: 0.75rem;
    }
  }
</style>