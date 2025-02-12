export const useOptionsStore = defineStore('options', {
  state: () => ({
    showBorder: true,
    keepMiddle: true,
  }),
  actions: {
    updateShowBorder(newValue) {
      this.showBorder = newValue
    },
  },
});