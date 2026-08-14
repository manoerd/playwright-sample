import { test, expect, request } from "@playwright/test";
import { log } from "../helpers/logger.js";

test.describe("REST API Demo", () => {
  test("Should get the list of users", async ({ request }) => {
    //Make a GET Call

    const res = await request.get("https://reqres.in/api/users?page=2", {
      headers: {
        "x-api-key": "free_user_3HuJL8sZiJu8fXRLncFZLu2Sl1q",
      },
      ignoreHTTPSErrors: true,
    });
    //Assert the status code
    expect(res.status()).toBe(200);
    await log("info", "The GET call is succesfull with ${res.status()}");

    //Get the list of users
    const userData = await res.json();
    log("info", "List of users: ${JSON.stringify(userData)}");
  });
});