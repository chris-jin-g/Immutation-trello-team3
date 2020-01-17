const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://jeff:UhlYeefWLmMmBQ1a@cluster0-vi8kl.mongodb.net/test?retryWrites=true&w=majority").then(() => {
	console.log("connection success");
})
.catch(() => {
	console.log("connection failed");
});

app.use(bodyParser.json());

// user route


app.use('/api/user', userRouter);
module.exports = app;

