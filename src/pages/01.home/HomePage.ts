import { Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts";

/**
 * @see: https://playwright.dev/docs/pom
 */
export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
}