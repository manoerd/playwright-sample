import { type FullConfig } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

export default async function globalSetup(config: FullConfig) {

  console.log('[INFO}: Starting global setup...');
  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log('[INFO}: Detecting local runs...');

    //Delete allure reports
    const resultDir = path.resolve(process.cwd(), "allure-results");
    console.log(`>> resultsDir: ${resultDir}`);

    if (fs.existsSync(resultDir)) {
      fs.rmSync(resultDir, { recursive: true, force: true });
      console.log('[INFO}: Allure reports deleted for local runs...');
    }
  }
  console.log('[INFO}: Completed the global setup...');

  //Set the login cookie global variable
  process.env.LOGIN_COOKIES = undefined
}