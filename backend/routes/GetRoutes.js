import express from "express";
import { sendingData } from "../controller/SendData.js";
import fs from "fs";
import upload from "../helpers/UploadFile.js";

const router = express.Router();

router.get("/datas", sendingData);

router.post("/postClient", upload.single("img"), (req, res) => {
  const newData = req.body;
  const existData = JSON.parse(fs.readFileSync("./data/data.json"));
  existData.unshift(newData);
  const stringifyData = JSON.stringify(existData);
  fs.writeFileSync("./data/data.json", stringifyData);
  res.status(200).send("data posted");
});
router.delete("/delete", (req, res) => {
  console.log(req.body);
  res.send("deleted");
});
router.get("*", (req, res) => {
  res.status(404).send("No such page");
});
export default router;
