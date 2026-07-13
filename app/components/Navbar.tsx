"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const siteUrl = "https://tweeven-ventures.vercel.app/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Certifications", href: "#certifications" }, // Added for your new section
    { name: "Leadership", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 1. AUTOMATIC PRINT LAYER: Hidden on screen, stamps small QR code on top-right of all PDF pages */}
      <div className="hidden print-qr-header pointer-events-none">
        <div className="bg-white border border-black p-1 shadow-sm flex items-center justify-center rounded-sm">
          <QRCodeSVG
            value={siteUrl}
            size={35}
            bgColor={"#FFFFFF"}
            fgColor={"#000000"}
            level={"M"}
          />
        </div>
      </div>

      {/* 2. LIVE SITE LAYER: Hidden entirely when hitting print to keep your layout perfect */}
      <nav className="fixed w-full z-[100] bg-white border-b border-gray-200 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex justify-between h-24 items-center">

            {/* Real Company Logo + Text (PDF style) */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                  <Image
                  src="/logo-navbar.png"
                  alt="Tweveen Ventures Ltd Logo"
                  fill
                  className="object-contain"
                  priority
                  />
              </div>

              <div className="flex flex-col justify-center border-l border-gray-300 pl-4 h-12">
                <div className="text-[16px] font-black tracking-tight text-tweveen-dark uppercase leading-none">
                  Tweveen Ventures <span className="text-tweveen-orange">Ltd.</span>
                </div>
                <div className="text-[9px] tracking-[0.15em] uppercase text-gray-500 font-bold mt-1">
                  Civil Engineering with a Human Touch
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] tracking-[0.2em] uppercase font-black text-tweveen-dark hover:text-tweveen-orange transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-tweveen-dark hover:bg-gray-100 rounded-md transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Thin orange rule (PDF structural line) */}
        <div className="h-[3px] w-full bg-tweveen-orange" />

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 top-[99px] z-50 bg-white/95 backdrop-blur-md md:hidden px-6 pt-12">
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl tracking-widest uppercase font-black text-tweveen-dark border-b border-gray-100 pb-4 active:text-tweveen-orange"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}