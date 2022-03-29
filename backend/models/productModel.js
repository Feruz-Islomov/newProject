import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  tel: { type: Number, required: true },
});

const Customer = mongoose.model("customer", CustomerSchema);

export default Customer;
