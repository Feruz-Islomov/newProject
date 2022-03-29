import express, { urlencoded } from "express";
import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongo db");
  })
  .catch(() => console.log("not connected to Mdb"));

import GetRoutes from "./routes/GetRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //POST and PUT JSON OBJECT
app.use(urlencoded({ extended: true })); //POST and PUT String, Arrays

app.use("/api", GetRoutes);
// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("slash came");
// });
app.post("/post", (req, res) => {
  res.end("posted!");
});

app.listen(PORT, () => console.log("...running"));
