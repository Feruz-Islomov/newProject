import express from "express";
import { sendingData } from "../controller/SendData.js";
import upload from "../helpers/UploadFile.js";

const router = express.Router();

router.get("/datas", sendingData);

router.post("/postClient", upload.single("img"), (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

router.get("*", (req, res) => {
  res.status(404).send("No such page");
});
export default router;
