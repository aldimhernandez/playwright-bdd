# Playwright BDD 🚀

[![Playwright BDD Tests](https://github.com/aldimhernandez/playwright-bdd/actions/workflows/github-actions.yml/badge.svg)](https://github.com/aldimhernandez/playwright-bdd/actions/workflows/github-actions.yml)
[![GitHub Pages](https://img.shields.io/badge/Report-GitHub%20Pages-blue)](https://aldimhernandez.github.io/playwright-bdd/)

This repository was created as a way to **experiment and learn** about end-to-end test automation using [playwright-bdd](https://vitalets.github.io/playwright-bdd/#/), combining the power of [Playwright](https://playwright.dev/) with the clarity of BDD (Behavior Driven Development) and interactive HTML reporting.

My goal was to explore how to integrate Gherkin-written tests, CI/CD execution with GitHub Actions, and automatic publishing of reports to GitHub Pages—all in a modern, reusable workflow.

---

## What will you find in this project?

- **BDD with Gherkin:** Tests written in natural language, easy to read and maintain.
- **Cross-browser automation:** Thanks to Playwright, you can test on Chromium, Firefox, and WebKit.
- **Rich HTML reports:** Each run generates a visual report with screenshots and traces for debugging.
- **Real CI/CD:** Every push or PR runs the tests and publishes the report automatically to [GitHub Pages](https://aldimhernandez.github.io/playwright-bdd/).
- **Simple and extensible example:** Perfect for anyone wanting to start experimenting with playwright-bdd and CI/CD.
- **Page Object Model (POM):** The project uses the Page Object Model pattern. Each page or section is represented by a class (e.g., `HomePage`, `IntroPage`), making tests more maintainable and readable. Page objects are located in [`src/pages/`](src/pages/).
- **Tag-based test selection:** Use tags in your `.feature` files and run only the scenarios you want with the `test:tag` script.

---

## Using custom fixtures

By default, [playwright-bdd](https://vitalets.github.io/playwright-bdd/#/configuration/options?id=importtestfrom) expects your custom fixtures to be defined in the `steps` directory.
However, in this project, fixtures are located in the `src/fixtures/` folder for better organization.

To make this work, **you must explicitly set the `importTestFrom` option in your Playwright config** to point to your fixtures file:

```typescript
// playwright.config.ts
const testDir = defineBddConfig({
  features: "src/tests/features/**/*.feature",
  steps: "src/tests/steps/**/*.ts",
  importTestFrom: "src/fixtures/Fixtures.ts", // <-- Required if your fixtures are not in 'steps'
  disableWarnings: { importTestFrom: true },
  statefulPoms: true,
  language: "en",
});
```

This tells playwright-bdd where to find your custom fixtures, allowing you to keep your project structure clean and modular.

---

## Project structure

```
.
├── src/
│   ├── fixtures/        # Custom Playwright fixtures
│   ├── pages/           # Page Object Model classes
│   └── tests/
│       ├── features/    # .feature files (Gherkin)
│       └── steps/       # Step definitions (TypeScript)
├── reports/
│   └── cucumber/        # Generated HTML report
├── .github/workflows/   # GitHub Actions workflows
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

## Playwright configuration

The project uses a modern Playwright config with multiple projects (browsers), custom fixtures, and HTML reporting:

```typescript
import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "src/tests/features/**/*.feature",
  steps: "src/tests/steps/**/*.ts",
  importTestFrom: "src/fixtures/Fixtures.ts",
  disableWarnings: { importTestFrom: true },
  statefulPoms: true,
  language: "en",
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", {
      outputFile: "reports/cucumber/index.html",
      externalAttachments: true,
    }),
  ],
  use: {
    baseURL: "https://playwright.dev",
    screenshot: "on",
    trace: "on",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
```

---

## How to use

1. **Install dependencies**

```sh
npm install
```

2. **Run tests**

```sh
npm test
```

3. **Run tests in UI mode**

```sh
npm run test:ui
```

4. **Run tests with verbose/debug output**

```sh
npm run test:debug
```

5. **Run tests by tag**

```sh
npm run test:tag
# By default runs scenarios tagged with @tagExample
# Edit the script in package.json to use your own tag
```

6. **View the report locally**

```sh
npm run cucumber:report
```

---

## CI/CD and Online Report

Every time you push or open a pull request:

- Tests are automatically executed in GitHub Actions.
- An HTML report is generated with screenshots and traces.
- The report is automatically published to **GitHub Pages**.

### 📊 [View the latest report here](https://aldimhernandez.github.io/playwright-bdd/)

You can browse the report, see screenshots for each step, and download traces for advanced debugging.

---

## Feature Example

```gherkin
@tagExample
Feature: Playwright site

  Scenario: Check get started link
    Given I am on home page
    When I click link "Get started"
    Then I see in title "Installation"
```

---

## Useful scripts

- `npm test` — Runs the tests and generates the report.
- `npm run test:ui` — Runs the tests in interactive mode.
- `npm run test:debug` — Runs the tests in verbose/debug mode.
- `npm run playwright:report` — Shows the Playwright report (if used).
- `npm run cucumber:report` — Opens the Cucumber report locally (Windows only).
- `npm run test:tag` — Runs only scenarios with a specific tag (edit the tag in `package.json`).

---

## Resources & Thanks

- [Playwright](https://playwright.dev/)
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) — Thanks for this awesome tool!
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/)

---

## Author

- [aldimhernandez](https://github.com/aldimhernandez)

---

This project is open to suggestions, improvements, and pull requests.
Thanks for visiting and experimenting with me!
