const app = require("express")()

app.get("/", (req, res) => {
    res.send("Hi everyone")
})

app.listen("8080")