# Opencart Web API Framework (Playwright)

A Playwright-based test automation framework for OpenCart web and API validation.

## Project Overview

This repository contains end-to-end and API tests built with Playwright, Allure reporting, and environment-specific configuration using `.env` files.

## Prerequisites

- Node.js installed (recommended Node 18+)
- npm available via Node.js installation
- Git installed if you want to initialize the repository and manage source control

## Installation

1. Install project dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

## Environment Configuration

The project loads environment variables from `config/.env.<ENV>`.

Available environment files:

- `config/.env.dev`
- `config/.env.qa`
- `config/.env.stage`

By default, the framework uses `qa` if `ENV` is not set.

### Run tests for a specific environment

On macOS/Linux:

```bash
ENV=stage npx playwright test
```

On Windows PowerShell:

```powershell
$env:ENV = 'stage'
npx playwright test
```

On Windows CMD:

```cmd
set ENV=stage&& npx playwright test
```

## Available Scripts

- `npm test`
  - Run Playwright tests with default configuration.
- `npm run test:headed`
  - Run Playwright tests in headed mode.
- `npm run test:chrome`
  - Run Playwright tests using the Chromium project.
- `npm run allure:generate`
  - Generate Allure report files from `allure-results` into `allure-report`.
- `npm run allure:open`
  - Open the generated Allure report.
- `npm run allure:report`
  - Generate and open the Allure report.
- `npm run allure:clean`
  - Remove Allure report folders: `allure-results` and `allure-report`.

## Reporting

The Playwright configuration writes results to:

- HTML report: `reports/html-report`
- Allure result folder: `allure-results`

Artifacts and generated folders that should not be committed are already included in `.gitignore`.

## Project Structure

- `config/` - environment `.env` files
- `tests/` - Playwright test suites
- `src/` - test helper utilities and framework code
- `allure-results/` - Allure raw test results
- `allure-report/` - generated Allure HTML report
- `reports/` - Playwright HTML report output
- `playwright.config.ts` - Playwright test configuration
- `package.json` - npm scripts and dependencies

## Notes

- Set `ENV` before running tests to choose the right environment variables.
- Use `npm run allure:generate` after test execution to prepare the Allure report.
- The framework currently runs Chromium by default; other browser projects are available but commented out in `playwright.config.ts`.
