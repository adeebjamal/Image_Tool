import express, {Router, Request, Response} from "express";

const router: Router = express.Router();

// Importing functions / middlewares
import {upload} from "../Functions/multer_storage";

router.post("/", upload.single("uploadedFile"), async(req: Request,res: Response) => {
    try {
        if(req.file) {
            return res.status(200).json({message: "File uploaded successfully."});
        }
        return res.status(200).json({message: "File not uploaded."});
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;