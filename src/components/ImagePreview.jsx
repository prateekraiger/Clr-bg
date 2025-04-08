import React from 'react';

function ImagePreview({ image, type }) {
  const isProcessed = type === 'processed';
  
  return (
    <div className="relative">
      <div className={`aspect-square rounded-lg overflow-hidden ${
        isProcessed 
          ? "bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAOdEVYdFRpdGxlAENoZWNrZXJz+KSWogAAAC1JREFUOI1jZGBg+M9AAWBioBAwjhowasCoAaMGjBowasCoAaMGjBowasCoAQBQ8xDwXJ+ZIQAAAABJRU5ErkJggg==')]"
          : "bg-gray-50 border border-gray-200"
      }`}>
        <img
          src={image}
          alt={type === 'original' ? 'Original' : 'Processed'}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="mt-3 text-center text-sm font-medium text-gray-600">
        {type === 'original' ? 'Original Image' : 'Processed Image'}
      </p>
    </div>
  );
}

export default ImagePreview;