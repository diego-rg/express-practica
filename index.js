import path from "path";//Para configurar o path das views para pug
import express from "express";//Express será o que transforma o cñodigo da plantilla de pug a html para o navegador
import morgan from "morgan";//HTTP request logger middleware. Fai logs das request e da info delas
import bodyParser from "body-parser";//middleware que cando recibe unha petición parsea o que recibe e gárdao no body da request
import router from "./router.js";//Importamos router coas rutas
import { connect } from "./socket.js";

//Fix para que funcione __dirname con "type": "module" de package.json
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.disable("x-powered-by");//Desactiva nos headers da response a info de que a app usa express

app.set("env", "development");//Indicalle a express que estamos en desarrollo, non en producción

app.use(morgan("tiny"));//configuramos que info nos manda morgan: combined, tiny, etc por cada request que nos mandan
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set("views", path.join(__dirname, "views"));//Indica que as views quevamos a usar estarán no directorio actual/views
app.set("view engine", "pug");//indicamos que usaremos pug como motor de plantillas

router(app);//activamos rutas

app.use("/static", express.static(path.join(__dirname, "public")));

//middleware para manejo de error 404 cuando no existe la página a la que llama el usuario
app.use((req, res, next) => {
    res.render("error404", {
        title: "Error!!!",
        message: "La página que indica no existe"
    });
    next();
});

app.listen("3000", () => {
    connect();//socket
    console.log("Servidor funcionando en localhost:3000");
});