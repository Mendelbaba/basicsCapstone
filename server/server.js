require("dotenv").config()

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

app.use(express.static("client"));
app.get("/",(req,res) => {
    res.sendFile("/index.html")
})

const port = process.env.PORT || process.env.SERVER_PORT;

const ctrlFile = require("./controller.js");
// const parks = require('./db.json')

app.get("/parks", ctrlFile.getParks)
app.post("/parks", ctrlFile.addToMyParks)
app.delete("/parks/:id", ctrlFile.deleteFromToDo)
app.get("/toDoList", ctrlFile.getToDo)




app.listen(port, () => {console.log(`server running on ${port}`)})