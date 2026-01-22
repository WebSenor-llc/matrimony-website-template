"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import LoginModal from "../component/LoginModal";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className={`fixed top-0 left-0 right-0 w-full border-b z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/70 backdrop-blur-sm" : "bg-white"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/svg/shaadi_logo.svg" // replace with your logo path
            alt="Shaadi Logo"
            width={80}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link
            href="/about"
            className="hover:text-gray-900 transition-colors"
          >
            About us
          </Link>

          <Link
            href="/help"
            className="hover:text-gray-900 transition-colors"
          >
            Help
          </Link>

          {/* Login Button */}
          <button
            onClick={handleLoginClick}
            className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
          >
            Login
            <ChevronDown size={16} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>

            <Link
              href="/help"
              className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help
            </Link>

            {/* Mobile Login Button */}
            <button
              onClick={() => {
                handleLoginClick();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition w-full"
            >
              Login
              <ChevronDown size={16} />
            </button>
          </nav>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
