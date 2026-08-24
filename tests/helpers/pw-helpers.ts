import {test, type Page, type Locator} from '@playwright/test';

//Take a screeshot for a full page
async function takeFullPageScreenshot(page: Page, screenshotName: string){
const screenshot = await page.screenshot({ fullPage: true});

//Attach it to the report
await test.info().attach(screenshotName, {
body: screenshot,
contentType: "image/png".
});
}

//Take a element screenshot
async function takeElementScreenshot(element: Locator, screenshotName: string){

//Take a screenshot of element
const screenshot = await element.screenshot();

//Attach it to the report
await test.info().attach(screenshotName, {
body: screenshot,
contentType: "image/png".
});
}

export default {takeFullPageScreenshot, takeElementScreenshot};