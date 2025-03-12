<template>
  <section
    class="component"
    :class="[
      showOptions ? 'is-visible' : 'is-hidden',
      hasCellInGrid ? 'has-cell' : ''
    ]"
  >
    <div class="container">
      <div class="row gap align-center justify-center">
        <p style="color: var(--c-white);">coming soon</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const gridStore = useGridStore();
const optionsStore = useOptionsStore();

// refs

// computed
const showOptions = computed(() => optionsStore.getShowOptions());
const hasCellInGrid = computed(() => gridStore.hasAnyPreview());


// methods

// lifecycle

// watch
</script>

<style scoped lang="scss">
  .component {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-accent-2);
    border-bottom: 2px solid var(--color-accent-3);
    height: 160px;
    padding-block: 15px;
    transform: translate3d(0, 100%, 0);
    transition: all var(--ease-in) .25s .25s;

    &.is-visible {
      transform: translate3d(0, 0, 0);
      &.has-cell {
        transform: translate3d(0, calc(0% - 80px), 0);
      }
    }
  }

  button {
    position: relative;
    margin: 0;
    font-size: 14px;
    border: none;
    cursor: pointer;
    pointer-events: auto;
    display: inline-block;
    outline: 0;
    border: 0;
    background-image: linear-gradient(to right,#e052a0,#f15c41)!important;
    border-radius: 24px;
    padding: 16px 18px 15px;
    white-space: nowrap;
    color: var(--color-text);
  }
</style>