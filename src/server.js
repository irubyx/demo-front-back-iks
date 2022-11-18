const path = require("path")
const express = require("express")
const hbs = require("hbs")
const cors = require("cors")
const axios = require('axios');
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "Front-back-com",
        name: "Sebastian Fripp"
    })
})

app.get("/backCom", (req, res) => {
    var config = {
        method: 'get',
        url: "http://localhost:3000/backCom",
        headers: {}
    };

    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.send(error);
        });

})

app.listen(3000, () => {
    console.log("Corriendo en 3000")
})