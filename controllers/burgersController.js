// burgerController.js - registers the HTTP endpoints with the express router:
//     /                   - GET - return all burgers from the database
//     /api/burgers/:id    - PUT - update a specfic burger in the database
//     /api/burgers/:id    - DELETE - removes a specific burger from the database
//     /api/burgers        - POST - add a burger to the dataase
//   (See README.md for parameter details)

var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
    console.log("GET Called");
    db.burger.findAll({}).then(function (data) {
        var burgersData = {
            burgers: data
        };
        res.render("index", burgersData);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log("PUT Called: ", req.params.id);
    db.burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        var burgersData = {
            burgers: data
        };        
        res.render("index", burgersData);
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    console.log("DELETE Called: ", req.params.id);
    db.burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        var burgersData = {
            burgers: data
        };
        res.render("index", burgersData);
    });
});

router.post("/api/burgers/", function (req, res) {
    console.log("POST Called ");
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function (burgerData) {
        return res.json({ id: burgerData.id });
    });
});


// Export routes for server.js to use.
module.exports = router;