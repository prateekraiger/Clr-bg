import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
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
    <footer className="bg-gradient-to-r from-indigo-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="ClrBg Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl text-blue-700 tracking-wide">
              ClrBg
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110 hover:rotate-3 text-lg"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-blue-700 text-center md:text-right text-lg font-medium">
            © ClrBg 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;