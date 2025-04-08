import React from 'react';
import { Upload, Wand2, Download } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600" />,
      title: "Upload Your Image",
      description: "Simply drag and drop or click to upload any image you want to process"
    },
    {
      icon: <Wand2 className="w-8 h-8 text-blue-600" />,
      title: "AI Processing",
      description: "Our advanced AI instantly removes the background with professional precision"
    },
    {
      icon: <Download className="w-8 h-8 text-blue-600" />,
      title: "Download Result",
      description: "Get your processed image with transparent background in high quality"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;