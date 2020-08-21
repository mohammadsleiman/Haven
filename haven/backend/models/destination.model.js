const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// schema is the class

const destinationSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    // address: {
    //   street: {
    //     type: String,
    //     required: true,
    //   },
    //   city: {
    //     type: String,
    //     required: true,
    //   },
    //   state: {
    //     type: String,
    //     required: true,
    //   },
    //   postalCode: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // coordinates: {
    //   lat: { type: Number, required: true },
    //   long: { type: Number, required: true },
    // },
    neighborhood: { type: String, required: true },
    rating: { type: Number, required: true },
    distanceMiles: { type: Number, required: true },
    attributes: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
