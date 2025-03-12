<template>
  <section>
    <div class="menu-bar">
      <div class="menu-bar--container">
        <p class="menu-bar--title">Bingoly</p>

        <button
          class="menu-bar--settings"
          @click="toggleShowOptions"
        >
          <span class="material-symbols-outlined">
            settings
          </span>
        </button>
      </div>
    </div>

  </section>
</template>

<script setup>
  const optionsStore = useOptionsStore();

  const toggleShowOptions = () => {
    optionsStore.toggleShowOptions();
  }
</script>

<style scoped lang="scss">
  section {
    margin-block-end: 50px;
  }

  .menu-bar {
    display: flex;
    align-items: center;
    width: 100%;
    padding-block: 15px;
    background-image: linear-gradient(to right,#e052a0,#f15c41)!important;

    &--container {
      width: 100%;
      padding-inline: var(--grid-gutter);
      max-width: var(--grid-max-width);
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &--title {
      margin: 0 auto;
      padding: 0;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    &--settings {
      position: relative;
      margin: 0;
      padding: 0;
      font-size: 10px;
      border: none;
      cursor: pointer;
      pointer-events: auto;
      display: inline-block;
      outline: 0;
      border: 0!important;
      background: transparent;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      white-space: nowrap;
      color: var(--color-text);

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        // background-image: linear-gradient(to right, #e052a0, #f15c41);
        // -webkit-background-clip: text;
        // background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
    }
  }
</style>