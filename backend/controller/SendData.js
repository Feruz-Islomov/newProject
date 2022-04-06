import Customer from "../models/productModel.js";
import fs, { readFileSync } from "fs";

export async function sendingData(req, res) {
  const jsonData = readFileSync("./data/data.json");
  res.send(JSON.parse(jsonData));
}
