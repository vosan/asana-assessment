import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
  },
});