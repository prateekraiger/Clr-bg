import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/pratik-r1104/",
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/prateekraiger",
      icon: <Github size={18} />,
      label: "GitHub",
    },
    {
      href: "https://x.com/mrpratik753",
      icon: <Twitter size={18} />,
      label: "Twitter",
    },
    {
      href: "https://instagram.com",
      icon: <Instagram size={18} />,
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-blue-600 py-6">
      <div className="container mx-auto px-4">
        {/* Logo row */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="h-7 w-7 rounded bg-white flex items-center justify-center mr-2">
              <span className="text-blue-600 font-bold text-sm">cb</span>
            </div>
            <span className="font-bold text-lg text-white">clrbg</span>
          </div>
        </div>


        {/* Social links */}
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-blue-200 hover:text-white transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-blue-200">
            © {currentYear} Pratik. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
