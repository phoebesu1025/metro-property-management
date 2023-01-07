const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));
require("dotenv").config();
////////////////Port Listener///////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening to PORT", PORT);
});

//////////////Mongoose Connection///////////
mongoose.connect(process.env.mongoUrl)
  .then(() => { console.log("connected") })
  .catch((error) => { console.log(error) });


/////////////////Router////////////////////

const { karanRouter } = require("./Routers/KaranRouter");
const PropertyManagersRouter = require("./Routers/PropertyManagers");
/////////////////////////
app.use(karanRouter);
app.use("/", PropertyManagersRouter);


















app.get("/", (req, res, next) => {
  UserInfo.find()
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});