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
    attributes: [{ type: String }],
    img: { type: String, required: true },
    // loc: { type: { type: String }, coordinates: [Number] },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// const pointSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     enum: ["Point"],
//     required: true,
//   },
//   coordinates: {
//     type: [Number],
//     required: true,
//   },
// });

/* Lets mongodb know that loc is 2dsphere geoJSON */
destinationSchema.index({ location: "2dsphere" });
destinationSchema.index({ "geometry.coordinates": "2dsphere" });

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
