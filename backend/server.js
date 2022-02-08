const express = require("express")

const app = express()

app.get("/login", (req,res) => {
    res.send("Testing")
})

app.get("/", (req, res) => {
    res.send("Working")
})


app.listen(3000, () => {
    console.log("Server connected to PORT 3000")
})