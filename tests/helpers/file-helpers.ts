import fs from "fs";
import { log } from "./logger.js";

//Read file and returns string

function readFile(filePath: string): any {
  if (!fs.existsSync(filePath)) {
    throw new Error("No file exists with given name: ${filePath}");
  }
  log("info", "Reading file: ${filePath}...");
  const data = fs.readFileSync(filePath, "utf-8");
  return data;
}

//Write to target file
function writeFile(filePath: string, data: string) {
  try {
    fs.writeFileSync(filePath, data);
    log("info", "Writing file: ${filePath}...");
  } catch (error) {
    new Error("Error writing to: ${filePath}, ${error}");
  }
}

export default {readFile, writeFile};