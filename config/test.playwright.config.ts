import { defineConfig, devices } from "@playwright/test";
import { baseConfig } from "../playwright.config.ts";
import { EnvConfig } from "../tests/helpers/config-fixtures.ts";
import path from "path";

export default defineConfig<EnvConfig>({
  ...baseConfig, //Loads all the basic config values
  testDir: path.resolve(process.cwd(), "./tests"),

  use: {
    ...baseConfig.use, // Loading exsiting use object
    envName: "Test",
    appURL: "https://katalon-demo-cura.herokuapp.com/",    
    nopCommerceAppURL: "https://demo.nopcommerce.com/login?returnUrl=%2F",
    dbConfig: {
      server: "",
      dbName: "",
      connectionStr: "",
    },
  },
});