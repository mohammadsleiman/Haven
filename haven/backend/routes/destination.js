const router = require("express").Router();
let Destination = require("../models/destination.model");

router.route("/").get((req, res) => {
  Destination.find()
    .then((destinations) => res.json(destinations))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const neighborhood = req.body.neighborhood;
  const rating = Number(req.body.rating);
  const distanceMiles = Number(req.body.distanceMiles);

  const newDestination = new Destination({
    name,
    category,
    neighborhood,
    rating,
    distanceMiles,
  });

  newDestination
    .save()
    .then(() => res.json("Destination added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
/*
router.route("/:id").get((req, res) => {
  Destination.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

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
