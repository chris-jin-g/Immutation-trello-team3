const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


const app = express();

mongoose.connect("mongodb+srv://jeff:UhlYeefWLmMmBQ1a@cluster0-vi8kl.mongodb.net/test?retryWrites=true&w=majority").then(() => {
	console.log("connection success");
})
.catch(() => {
	console.log("connection failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

module.exports = app;