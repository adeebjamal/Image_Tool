import multer from "multer";
import {Request, Express} from "express";

type multerCallback = (error: any, upload_destination: string) => void;

function DESTINATION(req: Request, file: Express.Multer.File, cb: multerCallback): void {
    return cb(null, "./uploads");
}

function FILENAME(req: Request, file: Express.Multer.File, cb: multerCallback): void {
    return cb(null, Date.now() + "_" + file.originalname);
}

const storageOptions = multer.diskStorage({
    destination: DESTINATION,
    filename: FILENAME
});

export const upload = multer({storage: storageOptions});