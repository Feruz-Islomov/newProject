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
router.delete("/delete/:id", (req, res) => {
  // const cid = req.body.id; //for axios delete data method
  const cid = req.params.id; //params method
  //get whole array
  const existClients = wholeData("./data/data.json");
  //check existence
  checkExistence(cid, existClients);
  // delete and save
  deleteSaveData(cid, existClients, "./data/data.json");
  res.send(cid);
});
const wholeData = (path) => {
  const wholeData = fs.readFileSync(path, "utf-8");
  return JSON.parse(wholeData);
};
const checkExistence = (clientId, existClients) => {
  const findExist = existClients.filter((x) => x.id === clientId);
  if (!findExist) {
    return res.status(401).send("there is no such client!");
  }
};
const deleteSaveData = (id, existClients, path) => {
  const filteredData = existClients.filter((x) => x.id !== id);
  const str = JSON.stringify(filteredData);
  fs.writeFileSync(path, str);
};
router.get("*", (req, res) => {
  res.status(404).send("No such page");
});
export default router;
