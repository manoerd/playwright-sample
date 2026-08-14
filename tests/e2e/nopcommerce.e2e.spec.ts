import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger.js";
import HomePage from "../page-objects/nopcommerce.home.page.js";

test("Login to Nop Commerce Web Application", async ({ page }, testInfo) => {
  //Env Config
  const envConfig = testInfo.project.use as any;

  //Create a page object

  const homePage = new HomePage(page);

  //Login Nop Commenrce Applicatioon
  await homePage.loginToNopCommerceApp(
    envConfig.nopCommerceAppURL,
    process.env.NOP_COMMMERCE_TEST_USERNAME,
    process.env.NOP_COMMMERCE_TEST_PASSWORD,
  );
});