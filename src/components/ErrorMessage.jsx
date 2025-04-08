import React from 'react';

function ErrorMessage({ message }) {
  if (!message) return null;
  
  return (
    <div className="mb-6 p-4 text-center text-red-600 bg-red-50 rounded-lg">
      {message}
    </div>
  );
}

export default ErrorMessage;