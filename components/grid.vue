<template>
  <div class="container">
    <div
      ref="domGrid"
      class="grid"
      :class="[
        optionsStore?.showBorder ? 'has-border' : '',
      ]"
    >
      <div
        v-for="(cell, index) in gridStore.cells" 
        :key="index"
        class="cell"
        :style="[
          TESTING ? cell.previewTest : '',
        ]" 
      >
        <span class="border"></span>
        <input
          class="cell--input" 
          type="file" 
          @change="e => handleImageUpload(e, index)"
          accept="image/*" 
        />
        <div
          v-if="cell?.preview"
          class="cell__preview"
        >
          <img :src="cell.preview" alt="Image Preview" class="cell__preview--media" />
        </div>
      </div>      
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const gridStore = useGridStore();
const { cells: storeCells } = storeToRefs(gridStore) ;

const optionsStore = useOptionsStore();

// methods
const handleImageUpload = (event, index) => {
  gridStore.handleImageUpload(event, index);
};


// refs
const domGrid = ref(null);
const TESTING = ref(false);
const cells = ref([]);

// lifecycle
gridStore.generateCells();


// watch
watch(storeCells, async (newStoreCells, oldStoreCells) => {
  console.log('wwwww');
  console.log('storeCells: ' ,storeCells)
})

onMounted(() => {
  gridStore.$patch({domGrid: domGrid.value})
})
// onUnmounted(() => {
//   if (cells.value?.length > 0) {
//     cells.value.forEach((c) => {
//       URL.revokeObjectURL(c.preview);
//     })
//   }
// });
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
  }
  
  .grid {
    display: flex;
    flex-wrap: wrap;
    aspect-ratio: 1/1;
    width: 100%;
    max-width: 500px;
    /* width: 100%;
    max-width: 100%; */
    /* height: 500px; */
    
    &.has-border {
      .cell {
        position: relative;
        &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          .border {
            border-top: 1px solid black;
          }
        }

        &:nth-child(1), &:nth-child(6), &:nth-child(11), &:nth-child(16), &:nth-child(21) {
          .border {
            border-left: 1px solid black;
          }
        }

        .border {
          border-right: 1px solid black;
          border-bottom: 1px solid black;
          position: absolute;
          inset: 0;
          // border: 1px solid black;
          // border-collapse: collapse;
        }
      }
    }
  }
  

  .cell {
    position: relative;
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