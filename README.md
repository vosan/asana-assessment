# Playwright Test Automation Setup

This repository contains a Playwright test automation framework using the Page Object Model (POM) design pattern.

---

## Installation

1. Install dependencies by running `npm install`
2. Install Playwright browsers `npx playwright install`
3. Build the project by running `npm run build`
4. Congrats! 🎉🎉🎉 Now you can run tests with `npm run test`

---

## Project Structure

```plaintext
loop-tech-assessment/
├── src/
│   ├── data/                # Contains test data
│   ├── pageObjects/         # Page Object Model (POM) classes
│   └── tests/               # Test suites
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration