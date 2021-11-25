require("dotenv").config()

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || process.env.SERVER_PORT;

const ctrlFile = require("./controller.js");
// const parks = require('./db.json')

app.get("/parks", ctrlFile.getParks)
app.post("/parks", ctrlFile.addToMyParks)
app.delete("/parks/:id", ctrlFile.deleteFromToDo)





app.listen(port, () => {console.log(`server running on ${port}`)})