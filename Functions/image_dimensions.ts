import sharp from "sharp";

const getImageDimensions = async(imagePath: string): Promise<{height: number, width: number}> => {
    try {
        const metadata = await sharp(imagePath).metadata();
        return {
            height: metadata.height || 0,
            width: metadata.width || 0
        }
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

export default getImageDimensions;