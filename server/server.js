require("dotenv").config()

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json())

// these lines of code are telling it what to load when the page is first initiated on the hosting site
app.use(express.static("client"));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  });

const port = process.env.PORT || process.env.SERVER_PORT;

const ctrlFile = require("./controller.js");
// const parks = require('./db.json')

app.get("/parks", ctrlFile.getParks)
app.post("/parks", ctrlFile.addToMyParks)
app.delete("/parks/:id", ctrlFile.deleteFromToDo)
app.get("/toDoList", ctrlFile.getToDo)




app.listen(port, () => {console.log(`server running on ${port}`)})