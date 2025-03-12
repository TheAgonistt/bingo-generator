<template>
  <div class="container">
    <div
      ref="domGrid"
      class="grid"
      :class="[
        optionsStore?.showBorder ? 'has-border' : '',
      ]"
    >
      <Cell
        v-for="(cell, index) in gridStore.getCells()" 
        :key="`cell-${index}-${cell.counter}`"
        :data="cell"
        :borders="borders"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

/* stores */
const gridStore = useGridStore();
const { cells: storeCells } = storeToRefs(gridStore) ;

const optionsStore = useOptionsStore();

/* methods */


/* refs */
const domGrid = ref(null);
const borders = ref([]);

/* lifecycle */
gridStore.generateCells();

/* watch */
watch(storeCells, async (newStoreCells, oldStoreCells) => {
  // console.log('storeCells: ' ,storeCells)
})

/* lifecycle */
onMounted(() => {
  gridStore.$patch({domGrid: domGrid.value})
});
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
        &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          .border {
            border-top: 1px solid black;
          }
        }

        &:nth-child(1), &:nth-child(6), &:nth-child(11), &:nth-child(16), &:nth-child(21) {
          &:deep(.border) {
            border-left: 1px solid black;
          }
        }

        &:deep(.border) {
          border-right: 1px solid black;
          border-bottom: 1px solid black;
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1000;
          // border: 1px solid black;
          // border-collapse: collapse;
        }
      }
    }
  }
</style>