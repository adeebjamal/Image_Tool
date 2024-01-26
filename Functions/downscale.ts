import sharp from "sharp";
import fs from "fs";

// Importing files / functions
import save_image from "./save_image";
import getImageDimensions from "./image_dimensions";

export default async(imagePath: string): Promise<string> => {
    const dimensions: {height: number, width: number} = await getImageDimensions(imagePath);
    const newHeight: number = Math.floor(dimensions.height * 0.75);
    const newWidth: number = Math.floor(dimensions.width * 0.75);
    const downscaledBuffer: Buffer = await sharp(imagePath).resize(newWidth, newHeight).toBuffer();
    fs.unlink(imagePath, (error) => {
        if(error) {
            console.log(error);
        }
    });
    let extension: string = "", index: number = imagePath.length - 1;
    while(imagePath[index] !== '.') {
        extension += imagePath[index--];
    }
    const path: string = await save_image(`downscale.${extension.split("").reverse().join("")}`, downscaledBuffer);
    return path;
}