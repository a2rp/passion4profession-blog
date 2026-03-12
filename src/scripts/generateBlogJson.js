import fs from "fs";
import path from "path";
import { blogRegistry } from "../lib/blogRegistry.js";

const outputPath = path.resolve("public/blogRegistry.json");

const data = blogRegistry.map((item) => ({
    title: item.title,
    path: item.path,
    date: item.date,
}));

const json = JSON.stringify(data, null, 2);

fs.writeFileSync(outputPath, json);

console.log("blogRegistry.json generated successfully");
