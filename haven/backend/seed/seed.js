const seedData = require("./seed-data.js");
const Destination = require("../models/destination.model");

function Seed() {
  Destination.collection.drop();
  console.log("destinations dropped");
  for (i = 0; i < seedData.length; i++) {
    const name = seedData[i].name;
    const category = seedData[i].category;
    const neighborhood = seedData[i].neighborhood;
    const rating = Number(seedData[i].rating);
    const distanceMiles = Number(seedData[i].distanceMiles);
    const attributes = seedData[i].attributes;
    const location = seedData[i].loc;

    const newDestination = new Destination({
      name,
      category,
      neighborhood,
      rating,
      distanceMiles,
      attributes,
      location,
    });

    newDestination
      .save()
      .then(() => console.log(`destination: ${name}, saved`));
  }
}

module.exports = Seed;
