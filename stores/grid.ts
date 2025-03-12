import { defineStore } from 'pinia';

interface Cell {
  index: number;
  humanIndex: number;
  preview: string | null;
  locked: boolean;
  counter: number;
  styles: Record<string, any>; // Or a more specific type if you have a defined structure for styles
}

interface GridState {
  cells: Cell[];
  domGrid: HTMLElement | null;
  selectedFiles: File[]; // You might want to refine this type if needed
  uploadErrors: string[]; // Assuming errors are represented as strings
}

export const useGridStore = defineStore('grid', {
  state: (): GridState => ({
    cells: [],
    domGrid: null,
    selectedFiles: [],
    uploadErrors: [],
  }),
  actions: {
    // handle shuffle
    doShuffle() {
      this.$patch((draftState: GridState) => {
        let copyArray = [...draftState.cells];
        draftState.cells = [];

        for (let i = copyArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
        }

        copyArray.forEach((cell, index) => {
          cell.index = index;
          cell.humanIndex = index + 1;
          cell.counter = cell.counter + 1;
        });

        draftState.cells = copyArray;
      });
    },
    doShuffleArrayExceptLocked() {
      this.$patch((draftState: GridState) => {
        let copyArray: Cell[] = [...draftState.cells];
        if (!Array.isArray(copyArray) || copyArray.length < 2) {
          return; // Return early if not an array or too short
        }

        // Separate locked and unlocked cells
        const lockedCells: Cell[] = copyArray.filter(cell => cell.locked);
        const unlockedCells: Cell[] = copyArray.filter(cell => !cell.locked);
        
        // Shuffle only the unlocked cells
        for (let i = unlockedCells.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [unlockedCells[i], unlockedCells[j]] = [unlockedCells[j], unlockedCells[i]];
        }

        // Recombine the locked and unlocked cells based on their original positions
        const newArray: Cell[] = [];
        let unlockedIndex = 0;

        copyArray.forEach( (originalCell, index) => {
          if(originalCell.locked) {
            newArray.push(originalCell)
          } else {
            newArray.push(unlockedCells[unlockedIndex])
            unlockedIndex++;
          }
        })

        // Update indices and counter
        newArray.forEach((cell, index) => {
          cell.index = index;
          cell.humanIndex = index + 1;
          cell.counter = cell.counter + 1;
        });

        draftState.cells = newArray;
      });
    },

    // generate cell
    generateCells() {
      this.cells = Array.from({ length: 25 }, (_, index) => ({
        index,
        humanIndex: index + 1,
        preview: null,
        locked: false,
        counter: 0,
        styles: {},
      }));
    },

    // handle lock
    handleLockedState(state: boolean, index: number) {
      this.$patch((draftState: GridState) => {
        draftState.cells[index].locked = !draftState.cells[index].locked;
      });
    },

    // handle image
    handleImageUpload(event: Event, index: number) {
      const target = event.target as HTMLInputElement;
      if (target?.files?.[0]) {
        this.$patch((draftState: GridState) => {
          draftState.cells[index].preview = URL.createObjectURL(
            target.files![0]
          );
        });
      }
    },
    handleDeleteImageByIndex(index: number) {
      this.$patch((draftState: GridState) => {
        const cell = draftState.cells[index];
        if (cell.preview) {
          URL.revokeObjectURL(cell.preview);
          cell.preview = null;
        }
      });
    },
    revokeObjectURLs() {
      this.$patch((draftState: GridState) => {
        draftState.cells.forEach((c) => {
          if(c.preview){
            URL.revokeObjectURL(c.preview);
          }
        });
      });
    },

    getCells(): Cell[] {
      return this.cells;
    },
    hasAnyPreview(): boolean {
      return this.cells.some((cell) => cell.preview !== null);
    },
  },
});
