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
    <footer className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left aligned */}
          <div className="flex items-center space-x-2 px-2">
            <img
              src="/logo.png"
              alt="ClrBg Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl text-white tracking-wide">
              ClrBg
            </span>
          </div>

          {/* Social links - Center aligned */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-cyan-100 hover:text-white transition-transform transform hover:scale-110 hover:rotate-3 text-lg"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright - Right aligned */}
          <div>
            <p className="text-lg text-cyan-100 font-medium">© ClrBg 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
