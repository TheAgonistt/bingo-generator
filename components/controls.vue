<template>
  <section class="container">
    <div class="row gap">
      <button
        @click="doSuffle"
      >
        Shuffle
      </button>

      <button
        @click="captureImage"
      >
        Capture
      </button>

      <label>
        Show border
        <input
          type="checkbox"
          v-model="showBorder"
          :checked="showBorder"
          @change="updateShowBorder"
        />
      </label>

      <label>
        Freeze middle image
        <input
          type="checkbox"
          v-model="freezeMiddle"
          :checked="freezeMiddle"
          @change="updateFreezeMiddle"
        />
      </label>
    </div>
  </section>
</template>

<script setup>
const gridStore = useGridStore();
const optionsStore = useOptionsStore();

// refs
const showBorder = ref(true)
const freezeMiddle = ref(true)

// methods
const doSuffle = () => {
  if (freezeMiddle.value) {
    gridStore.doShuffleArrayExceptMiddle();
  }

  if (!freezeMiddle.value) {
    gridStore.doShuffle();
  }
}

const captureImage = async () => {
  try {
    const pngDataURL = await useNuxtApp().$htmlToImage.toPng(gridStore.domGrid);
    // Or use other functions like toJpeg, toBlob, etc.
    // Example: Create a link to download the image
    const link = document.createElement('a');
    link.href = pngDataURL;
    link.download = 'my-image.png';
    link.click();

  } catch (error) {
    console.error('Error capturing image:', error);
  }
};

const updateShowBorder = (e) => {
  optionsStore.$patch({showBorder: e.target.checked})
}

const updateFreezeMiddle = (e) => {
  optionsStore.$patch({freezeMiddle: e.target.checked})
}
// lifecycle

// watch
</script>

<style scoped>
  section {
    display: flex;
    justify-content: center;
    padding-block: 50px;
  }

  button {
    pointer-events: auto;
    cursor: pointer;
    background: #e7e7e7;
    border: none;
    padding: 0.5rem 1.5rem;
    margin: 0;
    font-size: 14px;
    position: relative;
  }
</style>