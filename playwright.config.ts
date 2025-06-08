import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/tests/features/**/*.feature',
  steps: 'src/tests/steps/**/*.ts',
  importTestFrom: "src/fixtures/Fixtures.ts",
  disableWarnings: { importTestFrom: true },
  statefulPoms: true,
  language: 'en',
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
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});