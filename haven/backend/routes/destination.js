const router = require("express").Router();
let Destination = require("../models/destination.model");

router.route("/").get((req, res) => {
  Destination.find()
    .then((destinations) => res.json(destinations))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/get").get((req, res) => {
  const coordinates = JSON.parse(req.query.coor.valueOf());
  console.log(`REQUEST DESTINATION/GET: ${coordinates} `);
  const latitude = coordinates.lat;
  const longitude = coordinates.long;

  Destination.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      },
    },
  })
    .then((destinations) => {
      console.log(`DESTINATIONS FROM MONGODB ATLAS: ${destinations}`);
      return res.json(destinations);
    })
    .catch((err) => {
      console.log(`ERROR SERVERSIDE: ${err}`);
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const neighborhood = req.body.neighborhood;
  const rating = Number(req.body.rating);
  const distanceMiles = Number(req.body.distanceMiles);
  const attributes = req.body.attributes;
  const loc = req.body.loc;

  const newDestination = new Destination({
    name,
    category,
    neighborhood,
    rating,
    distanceMiles,
    attributes,
    loc,
  });

  newDestination
    .save()
    .then(() => res.json("Destination added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Destination.findById(req.params.id)
    .then((destination) => {
      res.json(destination);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
router.route("/:id").delete((req, res) => {
  Destination.findByIdAndDelete(req.params.id)
    .then(() => res.json("Destination deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Destination.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Destination updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
*/

module.exports = router;
