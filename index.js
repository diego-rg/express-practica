import path from "path";//Para configurar o path das views para pug
import express from "express";
import morgan from "morgan";//HTTP request logger middleware. Fai logs das request e da info delas
import bodyParser from "body-parser";//middleware que cando recibe unha petición parsea o que recibe e gárdao no body da request

const app = express();

app.disable("x-powered-by");//Desactiva nos headers da response a info de que a app usa express

app.set("env", "development");//Indicalle a express que estamos en desarrollo, non en producción

app.use(morgan("combined"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set("views", path.join(__dirname, "views"));//Indica que as views quevamos a usar estarán no directorio actual/views
app.set("view engine", pug);//indicamos que usaremos pug como motor de plantillas

app.get("/", (req, res) => {
    res.render("home");
});

app.listen("3000", () => {
    console.log("Servidor funcionando en localhost:3000");
});