const express = require("express");
const {create} = require("express-handlebars");
require('./database/connect');
const app = express();

const hbs = create({
    extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");


app.get("/", (req,res)=>{
    const productos =[
        {productName: "Carro", precio: "3000"},
        {productName: "Moto", precio: "1000"},
        {productName: "Bici", precio: "300"}
    ]
    res.render("home", {productos: productos});
});

app.use(express.static(__dirname + "/public"));

app.listen(5000, ()=> console.log("Servidor en marcha 👍"));