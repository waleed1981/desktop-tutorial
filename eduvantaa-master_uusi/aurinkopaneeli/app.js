var fs = require("fs");
var path = require("path");
var cors = require("cors");
var express = require("express");
var app = require();
app.use(cors());

app.get("/arvot", (req, res, next) => {
    var tidosto = bufferfile ("arvo.txt");
    res.send(tidosto);
});
app.listen(3000, ()=>{
});
function bufferFile(relPath){
 return fs.readFileSync(path.join(__dirname, relPath),"utf8");
}