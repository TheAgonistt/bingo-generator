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
    generateCells() {
      this.cells = Array.from({ length: 25 }, (_, index) => ({
        index,
        humanIndex: index + 1,
        preview: null,
      }));

    },
    handleImageUpload(event, index) {
      this.cells[index].preview = URL.createObjectURL(event.target.files[0]);
    },
    revokeObjectURLs() {
      this.cells.forEach((c) => {
        URL.revokeObjectURL(c.preview)
      })
    },
  },
});