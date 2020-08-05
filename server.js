const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: dallyla.s.oliveira@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I'm Dallyla Oliveira, a Web Developer based in Recife.");
});

app.get("/hobbies", function(req, res) {
    res.send("Travelling, Photografy, TV series, movies, dogs, cats and friends.");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
