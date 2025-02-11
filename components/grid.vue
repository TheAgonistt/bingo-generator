<template>
  <section class="container">
    <div class="grid">

      <div
        v-for="(cell, index) in cells" 
        :key="index"
        class="cell"
        :style="[
          TESTING ? cell.previewTest : '',
        ]" 
      >
        <input class="cell--input" type="file" @change="e => handleImageUpload(e, index)" accept="image/*" />
        <div
          v-if="cell?.preview"
          class="cell__preview"
        >
          <img :src="cell.preview" alt="Image Preview" class="cell__preview--media" />
        </div>

        <!-- <div v-if="uploading">
          Uploading...
        </div>
        <div v-if="uploadError">
          {{ uploadError }}
        </div> -->
      </div>

      <p @click="doSuffle">RANDOMMMMMMMMMMM</p>
      
    </div>
  </section>
</template>

<script setup>


// methods
const generateCells = () => {
  let out = [];
  for (let index = 0; index < 25; index++) {
    let obj = {
      index: index,
      humanIndex: index + 1,
      preview: null,
      previewTest: `background-image: url(https://picsum.photos/200/200?test=${index})`,
    }

    out = [
      ...out,
      obj
    ]
  }

  return out;
}

const handleImageUpload = (event, index) => {
  selectedFile.value[index] = event.target.files[0];
  uploadError.value[index] = null; // Clear any previous errors
  if (selectedFile.value[index]) {
    cells.value[index].preview = URL.createObjectURL(selectedFile.value[index]); // For local preview

  } else {
    cells.value[index].preview = null;
  }
};

const shuffle = (arr) => { 
  for (let i = arr.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  } 
  return arr; 
};

const doSuffle = () => {
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log('--- doSuffle ---');
  cells.value = shuffle([...cells.value]);
}


// refs
const TESTING = ref(true);
const previewURL = ref([]);
const selectedFile = ref([]);
const uploading = ref(false);
const uploadError = ref([]);
const cells = ref(generateCells());

// lifecycle
onUnmounted(() => {
  if (cells.value?.length > 0) {
    cells.value.forEach((c) => {
      URL.revokeObjectURL(c.preview);
    })
  }
});
</script>

<style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    height: 500px;
    border: 1px solid var(--color-accent);
  }

  .cell {
    position: relative;
    outline: 1px solid var(--color-accent);
    flex: 0 0 20%;
    max-width: 20%;
    aspect-ratio: 1/1;
    overflow: hidden;
  }

  /* --input */
  .cell--input {
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
  }

  /* __preview--media */
  .cell__preview--media {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center center;
    transform: translate3d(-50%, -50%, 0);
    z-index: 100;
  }
</style>