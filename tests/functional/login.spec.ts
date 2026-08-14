import { test, expect } from "playwright/test";

test.describe("Login functionality", {annotation: {type: "Story", description: "Jira: 1234 - Book an appointment"}}, () => {
  test.beforeEach("Navigate to the login page", async ({ page }, testInfo) => {
    // 1. Navigate to the login page and verify the title and header
    //await page.goto("https://katalon-demo-cura.herokuapp.com/");

    //Get the URL from config file
   const envConfigData = testInfo.project.use as any;

    await page.goto(envConfigData.appURL);
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

    // 2. Click on the "Make Appointment" button
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make appointment.")).toBeVisible();

    // Capture the custom screenshot of the login page
    const screenshotPath = await page.screenshot({fullPage:true});
    await testInfo.attach("Login Page", {body: screenshotPath, contentType: "image/png"});
  });
  test("Should login successfully"  , {annotation: {type: "Test", description: "Verify successfull login"}} ,async ({ page, browserName }) => {
    // Skip the test for firefox browser
    test.skip(browserName === "firefox", "Open bug: 1234");
   
    // 3. Fill in the login form and submit
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Get login cookies
    const loginCookies = await page.context().cookies()
    process.env.LOGIN_COOKIES = JSON.stringify(loginCookies)

    // 4. Verify that the user is logged in successfully
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  test("Should prevent login with invalid credentials", async ({ page }) => {
    // 3. Fill in the login form and submit
    await page.getByLabel("Username").fill("John Smith");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // 4. Verify that the user is not logged in and an error message is displayed
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});