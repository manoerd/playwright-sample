import { defineConfig, devices } from "@playwright/test";
import { baseConfig } from "../playwright.config.ts";
import { EnvConfig } from "../tests/helpers/config-fixtures.ts";
import path from "path";

export default defineConfig<EnvConfig>({
  ...baseConfig, //Loads all the basic config values
  testDir: path.resolve(process.cwd(), "./tests"),

  use: {
    ...baseConfig.use, // Loading exsiting use object
    envName: "Dev",
    appURL: "https://google.com/",
    dbConfig: {
      server: "",
      dbName: "",
      connectionStr: "",
    },
  },
});