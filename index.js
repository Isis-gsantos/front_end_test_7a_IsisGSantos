const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    const initialQuantity = null; 
    res.render("index", { initialQuantity });
});

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});
