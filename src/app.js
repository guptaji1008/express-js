const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World from the Express framework.")
})

app.get("/about", (req, res) => {
    res.send("Hello World from the About section of Express framework.")
})

app.listen(3000, () => {
    console.log("Listening to the port of 3000")
})