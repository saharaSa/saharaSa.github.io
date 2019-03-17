const mongoose = require("mongoose");

//const dbURI = "mongodb+srv://andresarangopro:vSkcVcN4eYiiWUJ@lotterycluster-cnhxf.mongodb.net/test?retryWrites=true"
//const dbURI = "mongodb://andresarangopro:vSkcVcN4eYiiWUJ@lotterycluster-shard-00-00-cnhxf.mongodb.net:27017,lotterycluster-shard-00-01-cnhxf.mongodb.net:27017,lotterycluster-shard-00-02-cnhxf.mongodb.net:27017/LotteryCollection?ssl=true&replicaSet=LotteryCluster-shard-0&authSource=admin&retryWrites=true"
const dbURI ="mongodb+srv://saharasa:cLIUQUEAUR12.@cluster0-nnzyq.mongodb.net/db_trace"
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../api/models/LocationModel");