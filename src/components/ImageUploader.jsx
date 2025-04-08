import React from "react";
import { Upload } from "lucide-react";

function ImageUploader({ onImageUpload, fileInputRef }) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <button
        className="flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
        onClick={() => fileInputRef.current.click()}
      >
        <Upload className="w-5 h-5 mr-2" />
        Upload Image
      </button>
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={onImageUpload}
        ref={fileInputRef}
      />
      <p className="mt-4 text-sm text-gray-600 text-center">
        Drag & Drop your image or click the button above to upload. <br />
        Supported formats: PNG, JPG (Max: 10MB)
      </p>
    </div>
  );
}

export default ImageUploader;
