import express from "express";
import { sendingData } from "../controller/SendData.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("slash coming");
// });
router.get("/datas", sendingData);

router.post("/post", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

router.get("*", (req, res) => {
  res.status(404).send("No such page");
});
export default router;
