
import { Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts";

export class IntroPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
}