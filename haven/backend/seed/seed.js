//const seedData = require("./seed-data.js");
const seedData = require("./OfficialData/coffee-data.js");
const Destination = require("../models/destination.model");

function Seed() {
  Destination.collection.drop();
  console.log("destinations dropped");
  console.log(seedData.length);
  for (i = 0; i < seedData.length; i++) {
    const name = seedData[i].name;
    const category = seedData[i].category;
    const neighborhood = seedData[i].neighborhood;
    const rating = Number(seedData[i].rating);
    const distanceMiles = Number(seedData[i].distanceMiles);
    const attributes = seedData[i].attributes;
    const img = seedData[i].img;
    const links = seedData[i].links;
    const location = seedData[i].loc;
    const featured = seedData[i].featured;

    const newDestination = new Destination({
      name,
      category,
      neighborhood,
      rating,
      distanceMiles,
      attributes,
      location,
      img,
      links,
      featured,
    });

    newDestination
      .save()
      .then(() => console.log(`destination: ${name}, saved`));
  }
}

module.exports = Seed;
