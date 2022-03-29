import Customer from "../models/productModel.js";

export async function sendingData(req, res) {
  res.send("slash coming");
  // const Custom = new Customer({
  //   name: req.body.name,
  //   tel: req.body.tel,
  // });
  // await Custom.save();
}
