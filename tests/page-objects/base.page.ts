import {expect, type Page, type Locator} from "@playwright/test";
import {log} from "../helpers/logger";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Re-Usable Actions
    async navigateToUrl(url: string) {
        await log("info", `Navigating to ${url}`);  
        await this.page.goto(url);  
    }

    //Click Action
    async butttonClick(ele: Locator) {
        try{
            await expect(ele).toBeVisible({timeout: 10_000}); //Custom default timeout is 5 seconds
            await ele.click()
        } catch (error) {
            await log("error", `Failed to click on element: ${ele.toString()}, original error: ${error}`);
            throw error;
        } 
    }
    //Type Action
    async typeInputBox(ele: Locator, text: string) {
            try{
                await expect(ele).toBeVisible({timeout: 10_000});
                await ele.fill(text);
            } catch (error) {
                await log("error", `Failed to type into element: ${ele.toString()}, original error: ${error}`);
                throw error;
            }
    }    
}