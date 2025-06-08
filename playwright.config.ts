import { defineConfig } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/tests/features/**/*.feature',
  steps: 'src/tests/steps/**/*.ts',
  importTestFrom: "src/fixtures/Fixtures.ts",
  disableWarnings: { importTestFrom: true },
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'reports/cucumber/index.html',
      externalAttachments: true,
    }),
  ],
  use: {
    baseURL: 'https://playwright.dev',
    screenshot: 'on',
    trace: 'on',
  },
});