import express, { urlencoded } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import GetRoutes from "./routes/GetRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(process.env.MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongo db");
  })
  .catch(() => console.log("not connected to Mdb"));

app.use(express.json()); //POST and PUT JSON OBJECT
app.use(urlencoded({ extended: true })); //POST and PUT String, Arrays

app.use("/api", GetRoutes);

app.listen(PORT, () => console.log(`running on ...${PORT}`));
