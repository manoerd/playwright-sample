import { test } from "@playwright/test";
import chalk from "chalk";

type level = "log" | "info" | "warn" | "error";

export async function log(level: level, message: string) {
  const plainLine = "[${level.toUpperCase()}] ${message}"; // For Allure

  let coloredLine = plainLine;

  //Pick color based on level
  switch (level) {
    case "info":
      coloredLine = chalk.blue(plainLine);
      break;
    case "warn":
      coloredLine = chalk.yellow(plainLine);
      break;
    case "error":
      coloredLine = chalk.red(plainLine);
      break;
    default:
      coloredLine = chalk.white(plainLine);
  }

  //Print to console
  (console[level] || console.log)(coloredLine);

  //Send plain line to Allure
  await test.step(plainLine, async () => {});
}    