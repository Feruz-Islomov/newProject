import express, { urlencoded } from "express";
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
