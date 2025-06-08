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

---

## Using custom fixtures

To use custom fixtures as described in the [playwright-bdd documentation](https://vitalets.github.io/playwright-bdd/#/getting-started/add-fixtures),
**you must add the `importTestFrom` path in your Playwright config:**

```typescript
// playwright.config.ts
const testDir = defineBddConfig({
  features: "src/tests/features/**/*.feature",
  steps: "src/tests/steps/**/*.ts",
  importTestFrom: "src/fixtures/Fixtures.ts", // <-- Required for custom fixtures!
  disableWarnings: { importTestFrom: true },
});
```

This allows you to use your own fixtures in your step definitions, as shown in [`src/fixtures/Fixtures.ts`](src/fixtures/Fixtures.ts).

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

## How to use

1. **Install dependencies**

```sh
npm install
```

2. **Run tests**

```sh
npm test
```

3. **View the report locally**

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
