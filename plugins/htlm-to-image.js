import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

export default defineNuxtPlugin({
  name: 'htmlToImage',

  setup(nuxtApp) {
    nuxtApp.provide('htmlToImage', {
      toPng,
      toJpeg,
      toBlob,
      toPixelData,
      toSvg,
    });
  },
});