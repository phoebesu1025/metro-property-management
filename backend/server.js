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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening to PORT", PORT);
});
///////////////////////////////////////////////////////////////////////////
const mongoUrl =
  "mongodb+srv://root1:pass123@cluster0.nfckp1n.mongodb.net/geeksOnMission?retryWrites=true";
mongoose.connect(
  mongoUrl,
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);
//////////////////////////////////////////////////////////////////////////
const UserInfo = require("./db/UserInfo");
const User = require("./db/User");
const { karanRouter } = require("./Routers/KaranRouter");
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
//////////////////////////////////////////////////////////////////////////
const PropertyManagers = require("./db/PropertyManagers");
app.get("/propertyManagers", (req, res, next) => {
  PropertyManagers.find(req.query)

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
///








app.use(karanRouter);
