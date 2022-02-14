//router para as rutas
import home from "./routes/home.js";
import info from "./routes/info.js";
import user from "./routes/user.js";

export default app => {
    app.use("/", home);
    app.use("/", info);
    app.use("/", user);
}