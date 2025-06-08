// fixtures.ts
import { test as base, createBdd } from 'playwright-bdd';
import { HomePage, IntroPage } from '../pages/index.ts';

/**
 * @see: https://vitalets.github.io/playwright-bdd/#/getting-started/add-fixtures
 * @see: https://playwright.dev/docs/test-fixtures#creating-a-fixture
 */
type Fixtures = {
    homePage: HomePage;
    introPage: IntroPage;
}

export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    introPage: async ({ page }, use) => {
        const introPage = new IntroPage(page);
        await use(introPage);
    }
});

export const { Given, When, Then } = createBdd(test);
