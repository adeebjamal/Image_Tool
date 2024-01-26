import * as fs from "fs/promises";

export default async(filename: string, buffer: Buffer): Promise<string> => {
    try {
        const path: string = `./uploads/${Date.now()}_${filename}`;
        await fs.writeFile(path, buffer);
        return path;
    }
    catch(error) {
        console.log(error);
        throw new Error("Error while writing the file.");
    }
}