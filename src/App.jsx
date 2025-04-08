import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import ImageUploader from "./components/ImageUploader";
import ImagePreview from "./components/ImagePreview";
import ActionButtons from "./components/ActionButtons";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = import.meta.env.VITE_REMOVE_BG_API_KEY;

function App() {
  const [selectedImage , setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setProcessedImage(null);
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError("");

    try {
      const base64Response = await fetch(selectedImage);
      const arrayBuffer = await base64Response.arrayBuffer();
      const blob = new Blob([new Uint8Array(arrayBuffer)]);

      const formData = new FormData();
      formData.append("image_file", blob);
      formData.append("size", "auto");

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": API_KEY,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to remove background. Please try again.");
      }

      const resultBlob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setProcessedImage(reader.result);
      };
      reader.readAsDataURL(resultBlob);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "removed-background.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetImages = () => {
    setSelectedImage(null);
    setProcessedImage(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-100">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-8">
              Welcome to ClrBG
            </h1>
            <p className="text-center text-lg text-gray-700 mb-12">
              Upload your image and remove the background in seconds with our
              AI-powered tool!
            </p>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl shadow-lg p-10">
              <ImageUploader
                onImageUpload={handleImageUpload}
                fileInputRef={fileInputRef}
              />

              <ErrorMessage message={error} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {selectedImage && (
                  <ImagePreview image={selectedImage} type="original" />
                )}
                {processedImage && (
                  <ImagePreview image={processedImage} type="processed" />
                )}
              </div>

              <ActionButtons
                onProcess={processImage}
                onDownload={downloadImage}
                onReset={resetImages}
                hasImage={!!selectedImage}
                hasProcessedImage={!!processedImage}
                loading={loading}
              />
            </div>
          </div>
        </section>

        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
