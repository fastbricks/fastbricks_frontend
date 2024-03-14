import { promises as fs } from "fs";
import path from "path";

const faqDataPath = path.join(process.cwd(), "/src/data/faq");

export const fetchFAQdata = async () => {
  const data = await fs.readFile(`${faqDataPath}.json`, { encoding: "utf-8" });
  return JSON.parse(data);
};
