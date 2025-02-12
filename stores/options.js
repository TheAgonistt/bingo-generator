export const useOptionsStore = defineStore('options', {
  state: () => ({
    showBorder: true,
    freezeMiddle: true,
  }),
  actions: {
    updateShowBorder(newValue) {
      this.showBorder = newValue
    },
    updateFreezeMiddle(newValue) {
      this.freezeMiddle = newValue
    },
  },
});