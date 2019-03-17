const Location= require("../models/LocationModel");


exports.listAllLocation = (req, res) => {
    Location.find({}, (err, location) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(location);
    });
  };
  
  exports.createNewLocation = (req, res) => {
    let newLocation = new Location(req.body);
    newLocation.save((err, location) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).json(location);
    });
  };