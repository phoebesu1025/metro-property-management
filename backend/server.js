console.log("test test")

const express = require('express')
const app = express()
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("listening to PORT", PORT);
});

app.get("/", (req, res) => res.json({ message: 'Welcome to Turners API Page!' }))
app.get("/risk", (req, res) => res.json({ message: 'Welcome to Risk Rating API!' }))
app.get("/fifa", (req, res) => {
    res.send("Welcome to FIFA World Cup API!")
})