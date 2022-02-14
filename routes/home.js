import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home",  {
        title: "Express!",
        creationDate: "12-2-2022"
    });
});

export default router;