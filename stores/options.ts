import { defineStore } from 'pinia';

interface Borders {
  [key: string]: string; // Example: Assuming border properties are strings (e.g., '1px solid black')
}

interface ExportOptions {
  canvasWidth: number;
  canvasHeight: number;
}

interface OptionsState {
  borders: Borders;
  showBorder: boolean;
  freezeMiddle: boolean;
  title: string;
  exportOptions: ExportOptions;
  showOptions: boolean;
}

export const useOptionsStore = defineStore('options', {
  state: (): OptionsState => ({
    borders: {},
    showBorder: true,
    freezeMiddle: true,
    title: 'My Bingoly',
    exportOptions: {
      canvasWidth: 1000,
      canvasHeight: 1000
    },
    showOptions: false,
  }),
  actions: {
    // setter
    updateBorders(newValue: Borders) {
      this.borders = newValue;
    },
    updateShowBorder(newValue: boolean) {
      this.showBorder = newValue;
    },
    updateFreezeMiddle(newValue: boolean) {
      this.freezeMiddle = newValue;
    },
    updateTitle(newValue: string) {
      this.title = newValue;
    },
    updateShowOptions(newValue: boolean) {
      this.showOptions = newValue;
    },
    toggleShowOptions() {
      this.showOptions = !this.showOptions;
    },

    // getter
    getOptions(): ExportOptions {
      return this.exportOptions;
    },

    getShowOptions(): boolean {
      return this.showOptions;
    },

  },
});
