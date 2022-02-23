import express from "express";
import { send as wSend } from "../socket.js"

const router = express.Router();

router.get("/info", (req, res) => {
    wSend(req.method, req.baseUrl, { socketMsg: "Hola socket!" })
    res.render("info",  {
        title: "Express!",
        creationDate: "12-2-2022"
    });
});

export default router;