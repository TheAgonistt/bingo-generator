<template>
  <section>
    <div class="menu-bar">
      <div class="menu-bar--container">
        <p class="menu-bar--title">Bingogo</p>
      </div>
    </div>

  </section>
</template>

<script setup>
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
    background: black;

    &--container {
      width: 100%;
      padding-inline: var(--grid-gutter);
      max-width: var(--grid-max-width);
      margin-inline: auto;
    }

    &--title {
      margin: 0;
      padding: 0;
      color: white;
    }
  }
</style>