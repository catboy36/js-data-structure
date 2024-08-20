const path = require('path');

/** @type {import('vite').UserConfig} */
export default {
  root: './src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
