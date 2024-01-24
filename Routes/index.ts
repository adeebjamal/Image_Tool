import express, {Router, Request, Response} from "express";

const router: Router = express.Router();

router.get("/", async(req: Request, res: Response) => {
    try {
        return res.status(200).render("homepage", {
            message: ""
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error."});
    }
});

module.exports = router;