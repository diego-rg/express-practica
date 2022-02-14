import express from "express";

const router = express.Router();

app.get("/:user", (req, res) => {//Ten que ir última para non tomar o valor de outra para :user
    const user = req.params.user;
    res.render("user", { user });
});

export default router;