# ClrBg - AI-Powered Background Remover

ClrBg is a web application that allows users to upload images and remove their backgrounds using AI-powered tools. The app provides a seamless and user-friendly interface for quick and efficient background removal.

## Features

- **AI-Powered Background Removal**: Instantly remove the background from your images with high precision.
- **Responsive Design**: Works seamlessly across devices.
- **Flexible Pricing Plans**: Choose from Free, Pro, and Enterprise plans.
- **Interactive UI**: Modern design with hover effects and spotlight cards for better user experience.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend API**: [Remove.bg API](https://www.remove.bg/api)
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prateekraiger/clr-bg.git
   cd clr-bg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Remove.bg API key:
   ```env
   VITE_REMOVE_BG_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## Usage

1. **Upload an Image**: Click the "Upload Image" button to select an image from your device.
2. **Remove Background**: Click the "Remove Background" button to process the image.
3. **Download Processed Image**: Once the background is removed, download the processed image.
4. **Reset**: Use the "Reset" button to start over.

## Project Structure

```
clr-bg/
├── src/
│   ├── components/       # Reusable React components
│   ├── App.jsx           # Main application file
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── public/               # Static assets (e.g., logo.png)
├── .env                  # Environment variables
├── package.json          # Project metadata and dependencies
├── tailwind.config.js    # TailwindCSS configuration
└── vite.config.js        # Vite configuration
```

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Background Removal
![Background Removal](https://via.placeholder.com/800x400?text=Background+Removal)

## License

This project is licensed under the [Apache License 2.0](LICENSE).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
