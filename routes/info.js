import express from "express";

const router = express.Router();

router.get("/info", (req, res) => {
    res.render("info",  {
        title: "Express!",
        creationDate: "12-2-2022"
    });
});

export default router;