//EXPRESS to use
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("./db/dbs.js")
app.use(express.json());
app.use(require("./router/auth"))
dotenv.config({ path: "./config.env" });
//fetch port from dotenv file
const PORT = 6000;

//middlewares
const middleware = app.use((req, res, next) => {
    // console.log('Time:', Date.now())
    next()
})

app.get("/", (req, res) => {
    res.send("Hello welcome to Home page");
})
app.get("/about", middleware, (req, res) => {
    res.send("Hello welcome to About page");

})
app.get("/login", (req, res) => {
    res.send("Hello welcome to Login in page");

})
app.get("/signup", (req, res) => {
    res.send("Hello welcome to Signup page");

})

app.listen(PORT, () => {

    console.log(`The port is running at ${PORT} port`)
})
