var express = require("express");
var bodyParser = require("body-parser");
var _ = require("underscore");

var app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {

    res.send("Node.js Başarılı bir şekilde çalışıyor...");

})

app.post("/personel/:id", function (req, res) {
    
    let body = _.pick(req.body, "first_name", "last_name", "number");
    let id = req.params.id;
    res.send(body.first_name + "id = " + id);

})

app.put("/personel/:id", function(req, res){
    //res.send("PUT isteği gönderildi!!");

    let body = _.pick(req.body, "first_name", "last_name", "number", "title");
    let id = req.params.id;
    res.send(body);
})

app.delete("/", function(req, res){
    res.send("DELETE isteği gönderildi!!!");
})


app.listen(3000);