<template>
  <NuxtPage />
</template>

<script setup lang="ts">
  
</script>

<style>
  body {
    --color-back: #84a59d;
    --color-text: #f7ede2;
    --color-accent: #f28482;
    --grid-gutter: 15px;
    --grid-max-width: 1200px;
    /* width: 100vw;
    height: 100vh; */
    padding: 0;
    margin: 0;
    background: var(--color-back);
    font-family: Arial, Helvetica, sans-serif;
  }

  .container {
    max-width: 100%;
    margin-inline: auto;
    padding-inline: var(--grid-gutter);
  }

  .row {
    display: flex;
  }

  .gap {
    gap: var(--grid-gutter);
  }
</style>
