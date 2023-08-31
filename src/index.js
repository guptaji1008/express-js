const express = require('express')

const app = express()

// to set the view engine
app.set("view engine", "hbs")

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        websiteName: "AMAN"
    })
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})