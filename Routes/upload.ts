import express, {Router, Request, Response} from "express";
import * as fs from "fs/promises";

const router: Router = express.Router();

// Importing functions / middlewares
import {upload} from "../Functions/multer_storage";
import upscale from "../Functions/upscale";
import downscale from "../Functions/downscale";
import unblur from "../Functions/unblur";
import denoise from "../Functions/denoise";

router.post("/", upload.single("uploadedFile"), async(req: Request,res: Response) => {
    try {
        if(!req.file || !req.body.operation) {
            return res.status(403).render("homepage", {
                message: "Make sure to upload the image and select an option."
            });
        }
        if(req.file.mimetype.slice(0,5) !== "image") {
            await fs.unlink(req.file.path);
            return res.status(403).render("homepage", {
                message: "Make sure to upload image file only"
            });
        }
        console.log(req.file);
        let downloadPath: string = "uploads/temporary.txt"
        if(req.body.operation === "upscale") {
            downloadPath = await upscale(req.file.path);
        }
        else if(req.body.operation === "downscale") {
            downloadPath = await downscale(req.file.path);
        }
        else if(req.body.operation === "unblur") {
            downloadPath = await unblur(req.file.path);
        }
        else if(req.body.operation === "denoise") {
            downloadPath = await denoise(req.file.path);
        }
        return res.status(200).download(downloadPath, async(error) => {
            if(error) {
                console.log(error);
            }
            else {
                await fs.unlink(downloadPath);
            }
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;