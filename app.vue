<template>
  <NuxtPage />
</template>

<script setup lang="ts">
  useHead({
    link: [
      {
        rel: 'stylesheet',
        crossorigin: '',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
      }
    ],
  })
</script>

<style>
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Prevent font size inflation */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* Remove default margin in favour of better control in authored CSS */
  body, h1, h2, h3, h4, p,
  figure, blockquote, dl, dd {
    margin-block-end: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
  }

  /* Set shorter line heights on headings and interactive elements */
  h1, h2, h3, h4,
  button, input, label {
    line-height: 1.1;
  }

  /* Balance text wrapping on headings */
  h1, h2,
  h3, h4 {
    text-wrap: balance;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input, button,
  textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }





  body {
    --c-primary-100: #00111C;
    --c-primary-200: #001523;
    --c-primary-300: #001A2C;
    --c-primary-400: #002137;
    --c-primary-500: #00253E;
    --c-primary-600: #002945;
    --c-primary-700: #002E4E;
    --c-primary-800: #003356;
    --c-primary-900: #003A61;
    --c-primary-1000: #00406C;
    --c-white: white;
    --c-black: black;
    --color-text: white;
    --color-accent: #defcf9;
    --color-accent-2: #cadefc;
    --color-accent-3: #c3bef0;
    --color-accent-4: #cca8e9;
    --grid-gutter: 15px;
    --grid-max-width: 500px;

    --ease-in: cubic-bezier(.43,.045,.1,.95);
    
    --z-index-test: 100;
    padding: 0;
    margin: 0;
    background: var(--c-white);
    font-family: Arial, Helvetica, sans-serif;
  }

  /* grid */
  .container {
    width: 100%;
    max-width: var(--grid-max-width);
    margin-inline: auto;
    padding-inline: var(--grid-gutter);
  }

  .row {
    display: flex;
  }

  .gap {
    gap: var(--grid-gutter);
  }

  .justify-center {
    justify-content: center;
  }

  .align-center {
    align-items: center;
  }
</style>
