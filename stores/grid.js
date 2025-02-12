export const useGridStore = defineStore('grid', {
  state: () => ({
    cells: [],
    domGrid: null,
    selectedFiles: [],
    uploadErrors: [],
  }),
  actions: {
    doShuffle() {
      let copyArray = [...this.cells];
      for (let i = copyArray.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]]; 
      } 
      this.cells = copyArray;
    },
    doShuffleArrayExceptMiddle() {
      let copyArray = [...this.cells];
      if (!Array.isArray(copyArray) || copyArray.length < 3) {
        return copyArray; // Return original array if it's not an array or too short
      }
    
      const middleIndex = Math.floor(copyArray.length / 2);
      const middleItem = copyArray[middleIndex];
      const newArray = [...copyArray]; // Create a copy to avoid modifying the original
    
      // 1. Remove the middle item:
      newArray.splice(middleIndex, 1);
    
      // 2. Shuffle the remaining items (Fisher-Yates shuffle):
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
      }
    
      // 3. Re-insert the middle item at its original position:
      newArray.splice(middleIndex, 0, middleItem);
    
      this.cells = newArray;
    },
    generateCells() {
      this.cells = Array.from({ length: 25 }, (_, index) => ({
        index,
        humanIndex: index + 1,
        preview: null,
      }));

    },
    handleImageUpload(event, index) {
      if (event?.target?.files?.[0]) {
        this.cells[index].preview = URL.createObjectURL(event.target.files[0]);
      }
    },
    revokeObjectURLs() {
      this.cells.forEach((c) => {
        URL.revokeObjectURL(c.preview)
      })
    },
  },
});