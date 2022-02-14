//router para as rutas
import home from "./routes/home";
import info from "./routes/info";
import user from "./routes/user";

export default app => {
    app.use("/", home);
    app.use("/", info);
    app.use("/", user);
}