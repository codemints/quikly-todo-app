<template>
  <div class="[ task__card ] [ cursor-grab ]">
    <div class="[ task__label ] [ cursor-pointer ]">
      <!-- <i class="[ fa-regular fa-chevron-right ]"></i> -->
    </div>
    <div class="[ task__priority ]">
      <i class="[ fa-solid fa-flag-swallowtail ] [ cursor-pointer ]"></i>
    </div>
    <div class="[ task__body ]">
      <h3>Finish dev portfolio website</h3>
      <div class="[ task__dates ]">
        <div class="[ task__created ] [ cursor-auto ]">
          <i class="[ fa-regular fa-calendar ]"></i>
          <h5>22 Apr 2022</h5>
        </div>
        <div class="[ task__due ] [ cursor-pointer ]">
          <i class="[ fa-regular fa-clock ]"></i>
          <h5>02 May 2022 @ 6:55AM</h5>
        </div>
      </div>
    </div>
    <div class="[ task__edits ]">
      <i class="[ fa-solid fa-pen-to-square ] [ cursor-pointer ]"></i>
      <i class="[ fa-regular fa-tag ] [ cursor-pointer ]"></i>
      <i class="[ fa-regular fa-align-justify ] [ cursor-pointer ]"></i>
      <i class="[ fa-regular fa-clone ] [ cursor-pointer ]"></i>
    </div>
    <div class="[ task__enthusiasm ]">
      <i class="[ fa-regular fa-hand-middle-finger ] [ cursor-auto ]"></i>
    </div>
    <div class="[ task__delete">
      <i class="[ fa-regular fa-trash-can ] [ cursor-pointer ]"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: [],
  setup (props) {
    

    return {
      props
    }
  }
}
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;

  .task__card {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 7.5rem;
    background-color: white;
    // border-inline-start: 0.75rem solid $purple;
    border-radius: 0.7rem;
    overflow: hidden;
    box-shadow: 0.3rem 0.3rem 0.7rem rgba(0, 0, 0, 0.15);

    > div {
      height: 100%;
    }
  }

  .task__label {
    width: 0.75rem;
    min-height: 7.5rem;
    background-color: $purple;
    overflow: hidden;
    transition: $base;

    &:hover {
      width: 2.4rem;
    }
  }

  .task__priority {
    padding-inline: 2rem;

    i[class*="fa"] {
      font-size: 1.8rem;
      color: $yellow;
    }
  }

  .task__body {
    padding-block: 1.5rem;
    
    h3 {
      font-size: 1.8rem;
      font-family: $fontHeader;
    }
    .task__dates,
    .task__created,
    .task__due {
      display: flex;
      align-items: center;
    }

    .task__dates {
      gap: 2rem;
    }

    .task__created,
    .task__due {
      gap: 0.5rem;
    }

    .task__created :is(i, h5) {
      font-size: 1.2rem;
      color: $gray-300;
    }
    .task__due :is(i, h5) {
      font-size: 1.2rem;
      color: $red;
    }
  }

  .task__edits {
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
    flex-direction: column;
    margin-block: 0.5rem;
    margin-left: auto;
    margin-right: 1rem;

    i {
      color: darken($gray-200, 10%);
      font-size: 1.2rem;

      &:hover {
        color: $gray-400;
      }
    }
  }

  .task__enthusiasm {
    display: flex;
    align-items: center;
    background-color: $red;
    min-height: 7.5rem;
    padding-inline: 1.2rem;

    i {
      font-size: 1.8rem;
      color: white;
    }
  }

  .task__delete {
    padding-inline: 1.2rem;

    i {
      font-size: 1.8rem;
      color: $red;
      transition: $base;

      &:hover {
        color: lighten($red, 15%);
      }
    }
  }
</style>