import { Given, When, Then } from "../../fixtures/Fixtures.ts";

Given('I am on home page', async ({ homePage }) => {
    await homePage.goto();
});

When('I click link {string}', async ({ homePage }, name) => {
    await homePage.getElementByText(name);
});

Then('I see in title {string}', async ({ introPage }, keyword) => {
    await introPage.validateTitle(keyword);
});