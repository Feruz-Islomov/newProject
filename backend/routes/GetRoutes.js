import express from "express";
import { sendingData } from "../controller/SendData.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("slash coming");
// });
router.get("/datas", sendingData);

router.post("/post", (req, res) => {});

export default router;
