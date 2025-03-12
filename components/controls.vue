<template>
  <section
    class="component"
    :class="[
      hasCellInGrid ? 'is-visible' : 'is-hidden'
    ]"
  >
    <div class="container">
      <div class="row gap align-center justify-center">
        <button
          @click="doShuffle"
        >
          Shuffle
        </button>
  
        <button
          @click="captureImage"
        >
          Capture
        </button>
  
        <!-- <label>
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
        </label> -->
      </div>
    </div>
  </section>
</template>

<script setup>
const gridStore = useGridStore();
const optionsStore = useOptionsStore();

// refs
// computed
const hasCellInGrid = computed(() => gridStore.hasAnyPreview())


// methods
const doShuffle = () => {
  gridStore.doShuffleArrayExceptLocked();
}


const captureImage = async () => {
  let exportOptions = optionsStore.getOptions();
  try {
    // htmlToImage.toJpeg(node, { quality: 0.95, filter: filter});
    const pngDataURL = await useNuxtApp().$htmlToImage.toPng(
      gridStore.domGrid,
      {
        ...exportOptions
      }
    );
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

<style scoped lang="scss">
  .component {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-accent-2);
    height: 80px;
    padding-block: 15px;
    transform: translate3d(0, 100%, 0);
    transition: all var(--ease-in) .25s .25s;

    &.is-visible {
      transform: translate3d(0, 0, 0);
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