var express =  require("express");
var productRouter = require("./routes/product");


var app =  express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/product", productRouter);

app.listen(9898, ()=>{
    console.log("Server Started..");
});




