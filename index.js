const express = require("express");
const db = require('./queries.js');
const port = 3030;
const app = express();
let data = { name: "Raydon", power: "Bolts" };
let entry = { makes: "Range Rover"};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get ('/getAllVehicles', db.getAllVehicles);

app.get("/", function (req, res){
  res.send("Hello World!!!");
});

app.get("/name", function (req, res){
  res.send("Ronisha Isham");
});
app.get("/json", function (req, res){
  res.status("200").json(data);
});

app.post("/json", function (req, res){
 // console.log(req.body);
  Object.assign(data, req.body);
  res.status("200").json(data);
});

app.get("/AllMakes", function (req, res){
  res.status("200").json(data);
})

  app.post("/AllMakes", function (req, res){
    // console.log(req.body);
     Object.assign(entry, req.body);
     res.status("200").json(entry);

});

app.get ('/getAllVehicles', db.getAllVehicles);
app.get ('/getAllMakes', db.getAllMakes);
  console.log(`Staring sever on port ${port}`);
app.listen(port);
