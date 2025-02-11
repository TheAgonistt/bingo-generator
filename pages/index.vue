<template>
  <main>
    <AppHeader />

    <div class="grid--container">
      <Grid />
    </div>
  </main>
</template>

<style scoped>
  main {
    /* padding: 50px 0; */
    background: var(--color-back);
  }

  h1 {
    margin: 0;
    padding: 30px 0;
    text-align: center;
  }

  .grid--container {
    display: flex;
    justify-content: center;
  }
</style>