import React from 'react';
import { Image as ImageIcon, Download, Trash2 } from 'lucide-react';

function ActionButtons({ onProcess, onDownload, onReset, hasImage, hasProcessedImage, loading }) {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <button
        onClick={onProcess}
        disabled={!hasImage || loading}
        className={`flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all ${
          !hasImage || loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-0.5'
        }`}
      >
        <ImageIcon className="w-5 h-5 mr-2" />
        {loading ? 'Processing...' : 'Remove Background'}
      </button>

      {hasProcessedImage && (
        <button
          onClick={onDownload}
          className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all transform hover:-translate-y-0.5"
        >
          <Download className="w-5 h-5 mr-2" />
          Download
        </button>
      )}

      {(hasImage || hasProcessedImage) && (
        <button
          onClick={onReset}
          className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all transform hover:-translate-y-0.5"
        >
          <Trash2 className="w-5 h-5 mr-2" />
          Reset
        </button>
      )}
    </div>
  );
}

export default ActionButtons;