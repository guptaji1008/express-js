const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>This is a Home Page of our app</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>This is a About Page of our app</h1>")
})

// app.get("/contact", (req, res) => {
//     res.send({
//         id: 1,
//         firstName: "Aman",
//         lastName: "Gupta",
//         address: null
//     })
// })

app.get("/contact", (req, res) => {
    res.json({
        id: 1,
        firstName: "Aman",
        lastName: "Gupta",
        address: null
    })
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})