# Image_Tool

This is an open-source image processing tool that allows users to perform various image processing operations such as upscaling, downscaling, unblurring, and denoising. The tool is built using Node.js and Express, and it provides a simple web interface for users to upload images and apply different operations.

## Features

- **Upscale**: Increase the resolution of an image.
- **Downscale**: Decrease the resolution of an image.
- **Unblur**: Remove blur from an image using a Gaussian blur.
- **Denoise**: Apply median filtering to reduce noise in an image.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/adeebjamal/Image_Tool
```

2. Navigate to the project directory:

```bash
cd Image-Tool
```

3. Install dependencies:
```bash
npm install
```

### Usage

1. Start the server:
```bash
ts-node server.ts
```

2. Open your browser and visit `http://localhost:3000`.

3. Upload an image and select the desired operation.

4. Click the "Upload" button to process the image.



### Folder Structure

* `Functions`: Contains individual image processing functions (e.g., upscale, downscale, unblur, denoise).
* `Routes`: Defines the Express routes for the application.
* `uploads`: Directory where uploaded images are stored temporarily.
* `Views`: Contains EJS templates for rendering HTML views.


### Dependencies

* `Express`: Web framework for Node.js.
* `Sharp`: Image processing library.
* `Multer`: Middleware for handling file uploads.
* `EJS`: Templating engine for rendering views.