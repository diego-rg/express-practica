import express from "express";
import morgan from "morgan";//HTTP request logger middleware. Fai logs das request e da info delas
import bodyParser from "body-parser";//middleware que cando recibe unha petición parsea o que recibe e gárdao no body da request

const app = express();

app.disable("x-powered-by");//Desactiva nos headers da response a info de que a app usa express

app.set("env", "development");//Indicalle a express que estamos en desarrollo, non en producción

app.use(morgan());

app.get("/", (req, res) => {
    res.send("Boas!");
});

app.listen("3000", () => {
    console.log("Servidor funcionando en localhost:3000");
});