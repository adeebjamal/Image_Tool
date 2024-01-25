import sharp from "sharp";
import fs from "fs";
import save_image from "./save_image";

export default async(imagePath: string): Promise<string> => {
    const unblurredBuffer: Buffer = await sharp(imagePath).blur(5).toBuffer();
    fs.unlink(imagePath, (error) => {
        if(error) {
            console.log(error);
        }
    });
    let extension: string = "", index: number = imagePath.length - 1;
    while(imagePath[index] !== '.') {
        extension += imagePath[index--];
    }
    const path: string = await save_image(`unblur_${extension.split("").reverse().join("")}`, unblurredBuffer);
    return path;
}