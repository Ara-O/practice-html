const app = require("express")()

app.get("/", (req, res) => {
    res.send("Hi everyone")
})

app.post("/signup", (req, res) => {
    console.log(req.body)
    res.status(200).send({ message: "Success" })
})

app.listen("8080")