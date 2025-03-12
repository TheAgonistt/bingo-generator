<template>
  <div
    class="cell"
    :class="[
      `${cell?.preview ? 'has-preview' : ''}`
    ]"
  >
    <span class="cell--border"></span>

    <div
      v-if="cell?.preview"
      class="row gap cell__settings"
    >
      <button
        @click="handleDeleteImageByIndex(cell.index)"
      >
        <span class="material-symbols-outlined">
          delete
        </span>

      </button>

      <!-- <button @click="console.log('CLICK STYLES')">
        <span class="material-symbols-outlined">
          style
        </span>
      </button> -->

      <!-- handle locked -->
      <button
        @click="handleLockedState(cell.locked, cell.index)"
      >
        <span class="material-symbols-outlined">
          {{ cell.locked ? 'lock' : 'lock_open' }}
        </span>
      </button>
    </div>

    <!-- <pre style="font-size: 10px">{{ cell }}</pre> -->

    <label class="cell--label">
      <input
        class="cell--input" 
        type="file" 
        @change="e => handleImageUpload(e, cell.index)"
        accept="image/*" 
      />
    </label>
  
    <div
      v-if="cell?.preview"
      class="cell__preview"
    >
      <img :src="cell.preview" alt="Image Preview" class="cell__preview--media" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

/* stores */
const gridStore = useGridStore();
const { cells: storeCells } = storeToRefs(gridStore) ;

const optionsStore = useOptionsStore();

/* props */
const props = defineProps({
  data: {
    type: Object,
    default: {}
  },
  borders: {
    type: Array,
    default: [],
  }
});

const cell = props.data;

/* methods */
const handleImageUpload = (event, index) => {
  gridStore.handleImageUpload(event, index);
};

const handleLockedState = (state, index) => {
  gridStore.handleLockedState(state, index); // Pass only the index
};

const handleDeleteImageByIndex = (state, index) => {
  gridStore.handleDeleteImageByIndex(state, index); // Pass only the index
};

/* refs */
const displayLockButton = ref(false);


/* lifecycle */

/* watch */

/* lifecycle */
// console.log('cell: ', cell);

</script>

<style scoped lang="scss">
  .cell {
    position: relative;
    flex: 0 0 20%;
    max-width: 20%;
    aspect-ratio: 1/1;
    transform: scale(1);
    transition: all ease-in .15s;
    backface-visibility: hidden;
    // background: white;
    &:hover {
      &.has-preview {
        transform: scale(1.2);
        z-index: 100;
      }
    }

    &:hover & {
      &__settings {
        opacity: 1;
        z-index: 1000;
      }
    }

    // --border
    &--border {
      position: absolute;
      inset: -1px;
      border: 2px solid var(--c-primary-100);
      pointer-events: none;
      z-index: 110;
    }

    // --label
    &--label {
      position: absolute;
      inset: 0;
      z-index: 100;
    }

    // --input
    &--input {
      position: absolute;
      inset: 0;
      cursor: pointer;
      opacity: 0;
      font-size: 0;
      background: transparent;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }

    // __settings
    &__settings {
      position: absolute;
      justify-content: flex-end;
      padding-inline: calc(var(--grid-gutter) / 2);
      top: 0;
      left: 0;
      right: 0;
      height: 25px;
      background: rgba(black, 0.8);
      transition: all ease-in .15s;
      opacity: 0;

      button {
        margin: 0;
        padding: 0;
        background: transparent;
        border: none;
        color: var(--color-text);
        line-height: 0.6;
        
        span {
          font-size: 1rem;
        }
      }
    }

    // __preview
    &__preview {
      position: absolute;
      overflow: hidden;
      inset: 1px;
      pointer-events: none;
      z-index: 200;

      &--media {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center center;
        transform: translate3d(-50%, -50%, 0);
        z-index: 50;
      }
    }
  }
</style>