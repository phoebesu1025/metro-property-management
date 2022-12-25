
const express = require('express');
const { connectToDb, getDb } = require('./db/db');
const app = express()

const cors = require('cors')
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(express.json());
app.use(cors(corsOptions));
require('dotenv').config();

let db

connectToDb((err) => {
    if (!err) {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log("listening to PORT", PORT);
        });
        db = getDb()
    }
})

app.get('/mongodb', (req, res) => {
    let postsArray = []

    db.collection('mission5') //
        .find({ message: 'Hello World' })//cursor toArray forEach
        .sort({ message: 1 })
        .forEach(element => postsArray.push(element))
        .then(() => {
            res.status(200).json(postsArray)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could no fetch the documents' })
        })
})



















app.get("/", (req, res) => res.json({ message: 'Welcome', level: 5, group: 'Geeks On Mission', 'mission No.': 5 }))
app.get("/risk", (req, res) => res.json({ message: 'Welcome to Risk Rating API!' }))
app.get("/note", (req, res) => {
    res.send("we just need to see how to link mongodb's data to our backend, then we can submit this?🍃🐳")
})